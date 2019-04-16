Loading assets (like images and audio) in [Phaser 3](https://github.com/photonstorm/phaser) is achieved by making xhr requests. This is fine if you are building a game for the web, but if your game isn't hosted on a server and needs to be loaded from the local filesystem, this will cause all kinds of troubles. Javascript is not allowed to make this kind of request when you are opening the html file with the `file://` scheme.

We can solve this with [data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)'s. They are basicly complete images (or other files) that are represented by base64 encoded strings, which can be merged into your code rather then being loaded as external files. Here is a small example of such code:

```
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAU0lEQVQoU2NkIBEwkqiegTINJtNvH2BgYGg4k6kKorECFBtMZtz+D1V1gOE/QyM2jbg0wEzH0Ihfw3+Gg+hOxK4Bi0KYlagaSPU0MXFCWTwQYwMA3P8mDXcTncUAAAAASUVORK5CYII=" />
```

**Warning**: If you are developing a game on your local machine, it is best to emulate a webserver with Node.js. If the final publication of your game will be on the web, then the technique described here has to be avoided. The reason is that your final javascript file will become really big.

I have made complete example with commented source code, which can be found here: https://github.com/Quinten/phaser-3-assets-as-data-uri

The example was started from the [phaser3-project-template](https://github.com/photonstorm/phaser3-project-template). So if your project uses a similar starting point with Webpack, you are good to go.

## Converting our assets to data URI strings

First we need a way to convert our assets to base64 encoded strings. There are probably a lot of online tools in the wild that can do this, but copy-pasting all of these strings into our code is going to be a painfull task. Lucky for us there is a Webpack loader that can do this for us. Have a look at [url-loader](https://www.npmjs.com/package/url-loader). Install it with npm as a development dependency:

```
npm install url-loader --save-dev
```

We need to add the following code to the `rules` section of our `webpack.config.js`

```
{
    test: /\.(png|mp3)$/,
    use: [{ loader: 'url-loader'}]
}
```

Now we can import png and mp3 files into our javascript code and the loader will convert them into data URI strings.

```
import blueSrc from '../assets/blue.png'
```

`blueSrc` is in this case just another string variable we can use in our code and it's value is a base64 encoded data URI representing an image.

Let's look at our original Phaser code that is responsible for loading assets in our standard `preload` function.

```
this.load.image('bg', 'assets/blue.png');
this.load.spritesheet([{ file: 'assets/shards.png', key: 'shards', config: { frameWidth: 16, frameHeight: 16 } }]);
this.load.audioSprite('sfx', ['assets/sfx.ogg', 'assets/sfx.mp3'], 'assets/sfx.json');
```

You would think from our `img` tag example from the beginning of this blogpost that we can now just jam our `blueSrc` variable in the file path `'assets/blue.png'` and call it a day. But Phaser won't let you do this (at least not at the time of this writing). Phaser will throw a warning `Local data URIs are not supported` and skips the image all together.

When i found out about this i scratched my head and turned my hopes to the Phaser Slack channel. @toneal and @rich helped me out here and pointed me in the right direction. The solution required a little more tinkering.

## Adding the assets to the Phaser TextureManager and Cache

We actually need to skip the loader and add the assets directly to the TextureManager and Phaser's internal cache system. I'll show you how i did it for simple images, spritesheets and audiosprites. Perhaps my methods are not to the most recommended way of doing this, but in the end they worked out.

### Adding a simple image

For a simple image it is very easy. Once we have our `blueSrc` data URI we can add it directly to the TextureManager with one line of code:

```
this.textures.addBase64('bg', blueSrc);
```

The `addBase64` is used internally by Phaser to add the images you see when there is a missing image.

### Adding a spritesheet

Spritesheets require a little bit more work. The TextureManager has a method called `addSpriteSheet` that takes 3 parameters: the key, a HTMLImageElement and a config object. So we create a HTMLImageElement and pass the `shardsSrc` data URI to it's src property. This will trigger the onload method and when the image element is ready it will be added to the TextureManager.

```
var shardsImg = new Image();
shardsImg.onload = () => {
    this.textures.addSpriteSheet('shards', shardsImg, { frameWidth: 16, frameHeight: 16 });
};
shardsImg.src = shardsSrc;
```

### Adding an audiosprite

The audiosprites i use, have 2 items in the cache: a json file with start/stop data and an AudioBuffer. If both have the same key Phaser knows they are meant to be used together. They will automatically be linked together, when you call:

```
this.sound.playAudioSprite('sfx', 'glass');
```

Adding a json file to the cache is pretty straightforward. Recent versions of Webpack already know how to handle this. There is no reason to use the url-loader here.

```
import sfxJson from '../assets/sfx.json'
```

Then put it into the Phaser json cache with the following line of code:

```
this.cache.json.add('sfx', sfxJson);
```

Adding the AudioBuffer to the cache is a little harder, because we need to convert it from our base64 encoded mp3 that we got out of:

```
import sfxSrc from '../assets/sfx.mp3'
```

We will use a small helper function for this called [to-array-buffer](https://www.npmjs.com/package/to-array-buffer). You can install it in your project with:

```
npm install to-array-buffer --save
```

Then import the helper in your code with:

```
import toArrayBuffer from 'to-array-buffer'
```

And finally we will use some vanilla javascript to add the AudioBuffer to the cache:

```
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
audioCtx.decodeAudioData(toArrayBuffer(sfxSrc), (buffer) => {
    this.cache.audio.add('sfx', buffer);
}, (e) => { console.log("Error with decoding audio data" + e.err); });
```

This callback sequence will first decode our `sfxSrc` data URI to an ArrayBuffer, then it will pass that ArrayBuffer to an AudioContext, which will then convert it to an AudioBuffer that can then be added to the cache. Note that the key `'sfx'` is exactly the same key as our json file.

## A note on the Phaser preload function

Because we are not using the loader and are not making any requests to the network, the Phaser `preload` function of the scene will immediatly return and the `create` function (where we add the game objects to the scene) will be called very quickly. So we need to make sure that before we use the assets to construct our game objects, the assets will effectivly have been loaded. Otherwise your game objects will have missing images.

You will have to keep track yourself wether all the `onload` and `decodeAudioData` callbacks (from the code above) have been called, before you set up your scene. In the [example on github](https://github.com/Quinten/phaser-3-assets-as-data-uri/blob/master/src/index.js) you will see that i solved this rather basicly.

## Wrapping up

That's it! We covered loading images, spritesheets and audiosprites all as data URI's. If there are other types of assets you need to load, you are on your own. But the principle will be pretty much the same.

You can find a working example on github: https://github.com/Quinten/phaser-3-assets-as-data-uri

If you have any questions you can find me on the social media channels listed on the [contact page](https://supernapie.com/contact).

Until next time!




