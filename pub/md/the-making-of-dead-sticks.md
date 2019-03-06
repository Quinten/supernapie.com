**Last month i added a bunch of levels to dead sticks. Here are some insights from the level design process.**

### TLDR

[Play the dead sticks game](https://dead-sticks.supernapie.com/)

### A note on expanding my old games

The first two months of 2019 i didn't make any new games. Instead i spend some time creating mobile controls for [Acid Sink](https://acid-sink.supernapie.com/) and adding a bunch of levels to [dead sticks](https://dead-sticks.supernapie.com/). I also rewrote that last one for Phaser 3, added retina support and sound to it.

Actually i think it is really okay to pick up your old projects again and add more stuff to it. I am not planning on doing it too often as i still want to make 5 new games this year. About a year ago i made a bet with myself to make 20 games in 5 years. I made 5 games last year -okay some are really basic jam games-, but i hope to accomplish the same this year.

But let's have a closer look at the level design of dead sticks.

### Graph paper

All levels start as a doodle in my checkered notebook. Most of them are drawn during my commute to work. I have about 13 minutes of train time so that is ideal to draw just one puzzle. I first sketch them with a pencil and then finish them with a black ballpoint pen. Here are some crazy shots from the notebook:

![Checkered notebook one](/img/checkers-notebook-one.jpg "Checkered notebook one")

![Checkered notebook two](/img/checkers-notebook-two.jpg "Checkered notebook two")

You can see the complexity increasing :p

When i doodled up something i like, i will convert it to a json file. The following is the code for level zero.

```
{
    "points": [
        {"x": 1, "y": -0.5, "fixed": false, "clickable": false},
        {"x": 0, "y": -1, "fixed": true, "clickable": true}
    ],
    "sticks": [
        {"a": 0, "b": 1}
    ]
}
```

### All is clickable

When i first have the structure in a json i usually don't know yet which circles i will make fixed and/or clickable. So i then make them all
 clickable and fixed. This way i can test out different scenarios.

![All circles clickable](/img/dead-sticks-all-clickable.jpg "All circles clickable")

And when i am done tweaking it the level looks like this:

![Not all circles clickable](/img/dead-sticks-not-all-clickable.jpg "Not all circles clickable")

That is all i wanted to share today. I hope you all like the new levels. Maybe next time i have something to share about a brand new project.

Stay tuned...
