I don't know what it is about this time of the year, but i am always extra motivated to make games in april and may. This year all social activities got suspended, so i had lots of extra time to devote to this nerdy hobby.

Four short games got made in just a couple of weeks: [hommel](https://supernapie.com/games/hommel), [Gravity Food](https://supernapie.com/games/gravity-food), [Mount Hop](https://supernapie.com/games/mount-hop) and [Alpha Evader](https://supernapie.com/games/alpha-evader).

While i was on a streak and was planning to make a game every week, i suddenly changed gears about two weekends ago and started developing a game engine... from scratch. No dependencies. No build tools (webpack). Just ES6 modules, that i test right in the browser and then later i'll load them into new projects via npm.

### Quinten, fyi there are already good html5 game frameworks out there... Why bother?

Valid point! But let me give you a couple of reasons:

When i use a third party framework and there is a bug in that framework, i need to wait until that bug gets fixed.

Third party frameworks have a public api, that is always generic, but never exactly in the way i would use it. So i end up writing a lot of boiler-plate code and custom plugins just to get it to do things in the way i want.

When i use another framework, i use only one third of it, but still all the other code somehow gets compiled into my game and i end up with a lot of dead code.

Also (and this is probably the main reason) when i notice something unexpected, i read the frameworks code and i have no clue about what is going on.

And for bonus points: writing your own game engine is a lot of fun.

### Whatever. Where is it? So we can make fun of it.

The project is called **Verf** and you can find it on [github](https://github.com/Quinten/verf) and [npm](https://www.npmjs.com/package/verf). Verf means paint in Dutch and 'verve' means also spirit of enthousiasm in English.

For the moment there is no webgl support and it renders everything on the canvas 2d context. Which is good enough (and sometimes even more suited) for the games i make and it is also a little easier to start with.

It is a very young project (probably also naive) so bear with me as i still need to add a lot of features. But in the meantime you can check out the [examples](https://quinten.github.io/verf/examples/) to see what already got implemented.

