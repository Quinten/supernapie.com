**If your are running your html5 game in an iframe, you might run into the problem where your keyboard input loses focus, when you click outside the iframe. Here is a quick tip to circumvent this.**

When you upload your html5 game to any game portal, the portal will most likely display your game in an iframe. An iframe is a seperate webpage inside of another webpage. The scripts from the document inside the iframe can't reach the scripts of the outer webpage and vice versa. They even have a seperate `window` object. This means that when you add event listeners to the `window` object inside the iframe and the user puts the focus on the outer `window` object, your events won't trigger anymore. If your game uses the keyboard as it's primary input and the player clicks outside the iframe, he will lose control over the game.

To overcome this we need to put the focus back to the inner `window` object, when the user clicks on our game canvas. To achieve this i use this little script in all of my games:

```
window.addEventListener('load', function () {
    window.focus();
    document.body.addEventListener('click',function(e) {
        window.focus();
    },false);
});
```

It will simply focus the window, when it is done loading and it will focus again when somebody clicks anywhere in the iframe.

Another thing you might consider is to detect when the game loses focus and then pause the game. When the game is paused you can show a message that the player has to click anywhere to continue to play. You can checkout [Euphrosine wants ten dots](https://supernapie.itch.io/euphrosine-wants-ten-dots) on itch.io. When you are in the middle of the main game scene, click anywhere else on the page and the game will pause.

The relevant portions of the Phaser 2 code was:

boot.js

```
game.stage.disableVisibilityChange = true;
```

game.js (actual game scene)

```

// in the create function
if (game.device.desktop) {
    game.stage.disableVisibilityChange = false;
}
game.onPause.add(this.onGamePause, this);
game.onResume.add(this.onGameResume, this);
this.pausedText = this.createText(game.camera.width / 2, game.camera.height / 2, 'Click anywhere to resume game', colors.normalStroke, 42);
this.pausedText.visible = false;

// extra functions on the game scene

onGamePause: function () {
    this.pausedText.visible = true;
},

onGameResume: function () {
    this.pausedText.visible = false;
},
```

You can check out the complete source code for [Euphrosine on github](https://supernapie.itch.io/euphrosine-wants-ten-dots)

It is not always easy to discover these kinds of things, when uploading your game to a game portal as you are always focused on testing the game itself and not the webpage around it. So I hope this tip helps someone.

Keep on coding!
