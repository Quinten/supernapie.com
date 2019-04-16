Let's assume you are building a html5 game that only uses the keyboard. You are testing your game and suddenly you get the idea to hide the mouse cursor, because it is sitting over your nice graphics and the player isn't going to need it anyway.

You have a reference to your canvas element. In Phaser 3 you can grab it from any scene with:

```
let canvas = this.sys.canvas;
```

And then you simple get rid of the mouse cursor with:

```
canvas.style.cursor = 'none';
```

You think you are done, but my friend, you are not.

What happens when your canvas fills the entire browser and maybe the whole screen except for the address bar. And... suddenly... the player wants to use the mouse to bring the focus to the address bar to type something. The player will start rapidly moving their mouse, up and down, left and right, up and down... but can't find the mouse :( because it is indefinitely hidden on your canvas.

Enter the following snippet:

```
let mouseHideTO = 0;
canvas.style.cursor = 'none';
canvas.addEventListener('mousemove', () => {
    canvas.style.cursor = 'default';
    clearTimeout(mouseHideTO);
    mouseHideTO = setTimeout(() => {
        canvas.style.cursor = 'none';
    }, 1000);
});
```

What does this do? Let's break it down:

1. It hides the mouse
2. Detects when the mouse is moved
3. Counts to 1000 milliseconds (which is 1 second)
4. If the mouse is still in motion it will keep counting further
5. If the mouse isn't moved for 1 second the cursor will be hidden again

If the player needs the mouse, he will simply need to move it and then it becomes visible again, even when it is above your canvas. When the player is interacting with the keyboard the mouse will simply hide again in it's cosy mouse hole.

Make sure you run the code only once, because you don't want an overflow of multiple event listeners.

I think this is a friendlier way to hide the mouse, that will make a lot of ~~mice~~ humans happy.

Keep on coding!
