For last year's Adventure Jam i made [Dave's Disk](https://gamejolt.com/games/daves-disk/255500). The game was well received. It was picked up by some streamers and it even made it to 'Game of the week' in [Phaser's newsletter](https://madmimi.com/p/03594a). Not bad for a game made in two weeks.

But it was a platformer and some people argued that a platformer is not a real adventure game. Although the jam rules state that you can use any genre for the jam, most definitions on the old internet are narrowed down to point-and-click and text adventures. Since the genre 'text adventure' has the word 'adventure' in it's name, i deceided to make a text adventure this year. So for two weeks in spring i was writing out a story about [Ibe](https://gamejolt.com/games/Ibe/338381).

## The concept of Ibe

The game combines the survival idea from [Tamagotchi](https://en.wikipedia.org/wiki/Tamagotchi), the geolocation mechanics from [Pokémon Go](https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go) and the text timeline from [Lifeline](https://itunes.apple.com/us/app/lifeline/id982354972?mt=8). Those are the three things that inspired me. So it's not all new ideas. The combination makes it into an 'augmented reality text adventure'. I searched for that genre on the internet, but there doesn't seem to be a lot out there about it.

So the idea was to use [javascript's geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) and the [Google Places api](https://cloud.google.com/maps-platform/places/) to find out the player's nearest point of interest and then let the game interact with that data. That's how i arrived at the idea of an alternate reality or parallel universe. Every game needs it's own world. This makes me think: are there any games that are non-fiction? Some educational games maybe? But are they really free from fictional elements? I'll leave this question open for now...

I wanted a survival element as well, to give the player an incentive to not postpone to continue to play the game. So i set the game in an apocalopytic world and asked for the player to help the protagonist survive the cruel world by helping her find food. In the background there is a timer running and if you don't feed Ibe at regular intervals she will starve. It's not really permanent, but the punishment is that your inventory is empty.

## The mechanics of Ibe

What follows is some copy pasting from the design document. It gives a good idea of how difficult i made it for myself.

** Begin copy paste >>> **

### Metrics

- energy (number)
- items (food and utility) (list)
- points of interest (list)

### Energy

Your energy depletes slowly everyday, you need to find food on regular occasions or you will die and have to restart te game. Some food needs to be prepared, but generates more energy. Food that needs to be prepared requires a cookbook, a box of matches, some firewood and a cooking pot.

### Items

Items can be consumed on the spot or put in your backpack. When they are in your backpack they can be consumed. Some items dissapear from your backpack once they are consumed (food) other provide continous utility.

Some items like a fridge can't be put in your backpack, but can be consumed (opened), in the last case the fridge finds you a can of coke for instance. But it could be that the fridge is sealed with a lock in that case you need to have a crowbar. (so in theory an item can be just a door)

Some generate energy like food others contain other items.

Some items can only be found when you already found another item. For example: you can't find a box of matches, before you found a candle. Because when you found a candle, we can indicate you need to find the box of matches to light the candle this creates a quest for the user. The ultimate goal is to find an escape to where the other people are.

Some items cannot be found once you already have some other specific item(s) in your backpack. You can't find the bag of rice again when you have a risoto in your backpack.

Items that are in your backpack can't be found again, unless they are removed with the consume action. Some consumables will not remove it from you backpack, for instance a poster can be read, but will not be removed because it is essential to the storyline.

Items have the following 5 descriptions: when found, when consumed, when failed to consume (locked by other items), when put in backpack, when inspected in backpack.

Items have the following relations: knowledge (can only be found, when one of these items is found), ignorance (cannot be found when one of these are in your backpack), keysOr (can only be consumed when you have at least one of these items), keysAnd (can only be consumed when you have all of these items), contains (which item(s) it contains).

They also have the following properties: nutrition (an amount of energy they give), static (cannot be put in your backpack), keepable (are not removed from you backpack when consumed), goal (if it completes the game or not)

### Types of items

- food
- box
- key
- goal

### Complex flow example

When you found the darkness you need to 'open' it with the flashlight, but if you don't have the batteries you can't see anything in the darkness. So the key (flashlight) will have to be consumable by antoher key (batteries).

### Points of interest

Points of interest have a description and some number of items to be found.

They also have a sort position for how relevant they are to the story. The Google Places api will return a bunch of them at the same time, so we will have to make a choice. Places where there are items the player needs will get priority.

Each place also has a number of items that may or may not be stored in locked boxes (like a fridge or a vendormachine). Items and the items that unlock them cannot be stored in the same place or they need to put in a box.

Items that get the storyline going are found in a lot of places (like the cellar door).

** <<< End copy paste **

Programming the flow of these mechanics was very straight forward once i had defined them in this design document. I also wrote all my storylines in the JSON format from the beginning. So i did not have to link up the items afterwards.

## The tech of Ibe

Because i did not have any visuals i chose React as a framework. React has proven to be a very good framework for making text adventures. Any layout i had to do for the interface was done using plain css. My React skills aren't that bonkers as i am still very new to it. But even with minor skills you can still get a gameloop going very easily.

All games for the Adventure Jam need to be hosted on [Gamejolt](https://gamejolt.com/). They have an uploader for HTML5 games, but there are 2 problems with that. The first one is that it is a mobile game and i wanted it to behave like a PWA without the Gamejolt site surrounding it. The second problem is that the game will then be shown in an iframe. For security reasons webpages in an iframe can't access the geolocation api. Which meant it would break my game.

So in the end i solved these issues by using their [game site and portfolio](https://fireside.gamejolt.com/post/custom-game-sites-portfolios-fgjzjsa8) functionality, which allows you upload a complete static site. See the end result [here](https://supernapie.gamejolt.io/Ibe/). Then i still needed some downloadable content otherwise i could not publish my game. So i printed out a complete run of the game's timeline as pdf file and uploaded that as downloadable content. So now players also had a cheatsheet they could consult in case they got lost.

## Wrap up

When the deadline came, the game was finished. But is it really a videogame? Players had to get out of their houses and walk around the city in order to complete it. That seems to be a pretty high treshold to descend from. Only one streamer shows up in the comments complaining that there is no way to stream the game. Maybe it was a little to experimental in the end.

On the other hand i really enjoyed writing the storylines in plain text. Usually i'm more on a visual mission, so this was very refreshing for me and it let me think more about the story. Maybe the story wasn't that great or original in this one, but at least i got my feet wet in narrative waters.

PS: If you want to play all the other games from the other participants. Check them out [here](http://jams.gamejolt.io/advjam2018/games).
