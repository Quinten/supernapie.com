**A nice way to add variety to your game is random levels. In this article i will explain how i made the mazes for Esciit and Acid Sink.**

### TLDR

[Play the demo](https://quinten.github.io/phaser3-maze-demo/)

[Grab the source code](https://github.com/Quinten/phaser3-maze-demo)

### Eller's algorithm

Straight to the point: i didn't figure out the math to create these mazes myself. Actually i only had to implement an existing npm-package called [generate-maze](https://www.npmjs.com/package/generate-maze) and visualize the output with Phaser objects. The package is a javascript implementation of [Eller's algorithm](http://www.neocomputer.org/projects/eller.html). The algorithm is said to create 'perfect' mazes, with a single path between any two cells.

The generate-maze library only generates a two-dimensional array of maze cells, which have the following properties:

```
{
      x: 4,          // Horizontal position, integer
      y: 7,          // Vertical position, integer
      top: false,    // Top/Up has a wall/blocked if true, boolean
      left: false,   // Left has a wall/blocked if true, boolean
      bottom: true,  // Bottom/Down has a wall/blocked if true, boolean
      right: true,   // Right has a wall/blocked if true, boolean
      set: 5         // Set # used to generate maze, can be ignored
}
```

So a cell has a position and holds data about which sides are open and which sides are closed.

Given the 4 properties `top`, `left`, `bottom` and `right` there are 16 combinations of walls, minus 1, because the all-four-walls combination never occurs. So there are 15 maze cell types. Thus for my demo i made 15 different tilemaps, which you can see in this image:

![The 15 different parts of the maze](/img/maze-parts.jpg "The 15 different parts of the maze")

You will find the source for each individual tilemap file in the `scratch` folder. They are `.tmx` files and you can edit in the [Tiled](https://www.mapeditor.org/) map editor if you want.

Now we only need some Phaser code to glue them together.

### Glue code

The most important code for this demo is in `src/plugins/MazePlugin.js` and `src/scenes/MazeLevel.js`.

The `MazePlugin` is a global Phaser plugin that is available through `this.maze` in each scene. To generate a new maze data structure you can call:

```
let maze = this.maze.generate(32, 8);
```

As long as you don't call the method again the same data is also available via `this.maze.maze` in any other scene. Maybe you want to make a minimap, but i'll leave that as a homework assignment.

Once the maze data structure is generated, we need to display the tilemaps. I used to just add them one by one to the scene, but this was not very performant when i started adding colliders. So then i had to merge all the data from each tilemap into a bigger tilemap and then the performance got a lot better. So the get the data for the big map we need to call:

```
let tiledata = this.maze.createMapData({ key: 'map', shardW: 16, shardH: 16 });
```

The key is The `shardW` and `shardH` are the number of tiles for the width and the height of each individual part.

Then we can pass the `tiledata` to a new map:

