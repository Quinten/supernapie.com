const GamesAPI = {
  games: [
    { url: 'dead-sticks', name: "dead sticks", cta: "Play", link: false, specs: { mobile: true, desktop: true, gamepad: false }, youtube: [], twitch: [], description: "'dead sticks' is an abstract and minimalisitc puzzle game with physics based on verlet integration. Now with more then 30 new puzzles!" },
    { url: 'acid-sink', name: "Acid Sink", cta: "Play", link: false, specs: { mobile: true, desktop: true, gamepad: true }, youtube: [], twitch: ['&t=10h55m19s&video=v308460292'], description: "Get your swimsuits ready! It's time for a dive! Wall jump and swim your way out of Acid Sink. With music by Fonske. Input: arrow keys and spacebar, gamepad or touch-hold-release." },
    { url: 'esciit', name: "Esciit", cta: "Buy", link: "https://supernapie.itch.io/esciit", specs: { mobile: false, desktop: true, gamepad: true }, youtube: ['rOTktBntZUk'], twitch: [], description: "Jimmy wakes up next to his wrecked Porsche 550. He is all alone in a haunted pine forest. He tries to find help, but stumbles deeper into an outlandish conspiracy..." },
    { url: 'voidcrab', name: "Voidcrab", cta: "Buy", link: "https://supernapie.itch.io/voidcrab", specs: { mobile: false, desktop: true, gamepad: false }, youtube: ['a_ztYu1y3qc', 'Zzm5Cyk0nUQ', '3RmUpa-zx80', 'Jta7QZQNMmY'], twitch: [], description: "Voidcrab is a challenging lo-fi pixel-art metroid-vania platformer in which you will get lost. Calming and frustrating at the same time." },
    { url: 'ibe', name: "Ibe", cta: "Play", link: false, specs: { mobile: true, desktop: false, gamepad: false }, youtube: [], twitch: [], description: "Ibe is an augmented reality text adventure that takes place in a parallel universe. The game uses points of interest in the players everyday world as anchors to tell a fragmented and dystopian storyline." },
    { url: 'soccer-slasher', name: "Soccer slasher", cta: "Play", link: false, specs: { mobile: false, desktop: true, gamepad: false }, youtube: [], twitch: [], description: "Obviously i don't know anything about soccer. I only heard 'soccer is war'. Soccer Slasher is a sports hack 'n slash. You need to slay enemies by kicking a ball at them." },
    { url: 'unmatch', name: "Unmatch", cta: "Play", link: false, specs: { mobile: true, desktop: true, gamepad: false }, youtube: [], twitch: ['&t=00h13m44s&video=v354652204'], description: "Unmatch is a puzzle game where you have to make combinations of 3 tiles with matching or unmatching shapes, colors or number of shapes." },
    { url: 'untitled', name: "Untitled", cta: "Play", link: false, specs: { mobile: true, desktop: true, gamepad: true }, youtube: [], twitch: [], description: "Untitled is a multiplayer experiment. You can explore the small world on your own, but when there are others online you can play a game of tag." },
    { url: 'daves-disk', name: "Dave's Disk", cta: "Play", link: false, specs: { mobile: true, desktop: true, gamepad: true }, youtube: ['NY5HtMi4MHQ', 'y6KVL5lk8mY', 'P7r0mLy2qog', 'iv4q-jrlZTE', 'QjQ-b9btJ0g'], twitch: [], description: "When Dave Flimsy, a game developer for a large company, opens his mailbox in the morning, he finds a rather unpleasant message. It's the start of a horrible day." },
    { url: 'euphrosine-wants-ten-dots', name: "Euphrosine wants ten dots", cta: "Play", link: false, specs: { mobile: true, desktop: true, gamepad: true }, youtube: [], twitch: [], description: "Euphrosine has set her mind on some new dots and is out on a hunt to catch cute dice and steal their dots." },
    { url: 'graves-of-salad', name: "Graves of Salad", cta: "Play", link: false, specs: { mobile: true, desktop: true, gamepad: true }, youtube: [], twitch: [], description: "It's the night after the day of judgement and the salads have risen from their graves. They are hungry for your brains. Can you hold off this onslaught of lettuce?" }
  ],
  all: function() { return this.games},
  latest: function() { return this.games.slice(0, 3)},
  get: function(url) {
    const isGame = g => g.url === url
    return this.games.find(isGame)
  }
}

const BlogAPI = {
  posts: [
    { url: 'the-making-of-dead-sticks', name: "The making of dead sticks", description: "Last month i added a bunch of levels to dead sticks. Here are some insights from the level design process.", date: '2019-03-06'},
    { url: 'procedural-generated-maze-in-phaser-3', name: "Procedural generated maze in Phaser 3", description: "A nice way to add variety to your game is random levels. In this article i will explain how i made the mazes for Esciit and Acid Sink.", date: '2019-01-18'},
    { url: 'hiding-the-mouse-in-a-ux-friendly-way', name: "Hiding the mouse in a ux friendly way", description: "When building a game that only uses the keyboard, you may want to hide the mouse. Here is how to do it properly!", date: '2018-10-24'},
    { url: 'ludum-dare-42-post-mortem', name: "Ludum Dare 42 post mortem", description: "I submitted my second Ludum Dare entry last month. This time with the help of my brother Thomas, who did the sound and music. Here are some afterthoughts about how it went.", date: '2018-09-12'},
    { url: 'adventure-jam-2018-post-mortem', name: "Adventure Jam 2018 post mortem", description: "Last May i joined Adventure Jam for the second year in a row. This year's entry was a little weird and experimental, but i still learned a lot from it...", date: '2018-07-17'},
    { url: 'keyboard-focus-in-an-iframe', name: "Keyboard focus in an iframe", description: "If your are running your html5 game in an iframe, you might run into the problem where your keyboard input loses focus, when you click outside the iframe. Here is a quick tip to circumvent this.", date: '2018-07-11'},
    { url: 'support-retina-with-phaser-3', name: "Support retina with Phaser 3", description: "You can support retina devices and other pixel ratio's in your Phaser 3 games. In this short blogpost i will explain how and give some tips on how to make your art super crisp.", date: '2018-06-03'},
    { url: 'ludum-dare-41-post-mortem', name: "Ludum Dare 41 post mortem", description: "About a month ago, I participated for the first time with the Ludum Dare game jam. Here is what i learned from it.", date: '2018-05-21'},
    { url: 'loading-assets-as-data-uri-in-phaser-3', name: "Loading assets as data URI's in Phaser 3", description: "In this blogpost i'll explain how you can load the assets of your Phaser 3 game as data URI's, without having to rely on xhr requests.", date: '2018-04-29'}
  ],
  all: function() { return this.posts},
  latest: function() { return this.posts.slice(0, 3)},
  get: function(url) {
    const isPost = p => p.url === url
    return this.posts.find(isPost)
  }
}

module.exports = {GamesAPI, BlogAPI}
