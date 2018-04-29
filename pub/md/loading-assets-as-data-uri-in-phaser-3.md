**In this blogpost i'll explain how you can load the assets of your Phaser 3 game as data URI's, without having to rely on xhr requests.**

Loading assets (like images and audio) in [Phaser 3](https://github.com/photonstorm/phaser) is achieved by making xhr requests. This is fine if you are building a game for the web, but if your game isn't hosted on a server and needs to be loaded from the local filesystem, this will cause all kinds of troubles. Javascript is not allowed to make this kind of request when you are opening the html file with the `file://` scheme.

We can solve this with [data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)'s. They are basicly complete images (or other files) that are represented by base64 encoded strings, which can be merged into your code rather then being loaded as external files. Here is a small example of such code:

```
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAU0lEQVQoU2NkIBEwkqiegTINJtNvH2BgYGg4k6kKorECFBtMZtz+D1V1gOE/QyM2jbg0wEzH0Ihfw3+Gg+hOxK4Bi0KYlagaSPU0MXFCWTwQYwMA3P8mDXcTncUAAAAASUVORK5CYII=" />
```

**Warning**: If you are developing a game on your local machine, it is best to emulate a webserver with Node.js. If the final publication of your game will be on the web, then the technique described here has to be avoided. The reason is that your final javascript file will become really big.

I have made complete example with commented source code, which can be found here: https://github.com/Quinten/phaser-3-assets-as-data-uri

The example was started from the [phaser3-project-template](https://github.com/photonstorm/phaser3-project-template). So if your project uses a similar starting point with Webpack, you are good to go.

## Converting our assets to data URI strings

First we need a way to convert our assets to base64 encoded strings. There are probably a lot of online tools in the wild that can do this, but copy-pasting all of these strings into our code is going to be a painfull task. Lucky for us there is a Webpack loader that can do this for us. Have look at [url-loader](https://www.npmjs.com/package/url-loader). Install it with npm as a development dependency:

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
