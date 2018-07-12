const GamesAPI = {
  games: [
    { url: 'ibe', name: "Ibe", description: "Ibe is an augmented reality text adventure that takes place in a parallel universe. The game uses points of interest in the players everyday world as anchors to tell a fragmented and dystopian storyline." },
    { url: 'soccer-slasher', name: "Soccer slasher", description: "Obviously i don't know anything about soccer. I only heard 'soccer is war'. Soccer Slasher is a sports hack 'n slash. You need to slay enemies by kicking a ball at them." },
    { url: 'unmatch', name: "Unmatch", description: "Unmatch is a puzzle game where you have to make combinations of 3 tiles with matching or unmatching shapes, colors or number of shapes." },
    { url: 'untitled', name: "Untitled", description: "Untitled is a multiplayer experiment. You can explore the small world on your own, but when there are others online you can play a game of tag." },
    { url: 'daves-disk', name: "Dave's Disk", description: "When Dave Flimsy, a game developer for a large company, opens his mailbox in the morning, he finds a rather unpleasant message. It's the start of a horrible day." },
    { url: 'dead-sticks', name: "dead sticks", description: "'dead sticks' is an abstract and minimalisitc puzzle game with physics based on verlet integration." },
    { url: 'euphrosine-wants-ten-dots', name: "Euphrosine wants ten dots", description: "Euphrosine has set her mind on some new dots and is out on a hunt to catch cute dice and steal their dots." },
    { url: 'graves-of-salad', name: "Graves of Salad", description: "It's the night after the day of judgement and the salads have risen from their graves. They are hungry for your brains. Can you hold off this onslaught of lettuce?" }
  ],
  all: function() { return this.games},
  get: function(url) {
    const isGame = g => g.url === url
    return this.games.find(isGame)
  }
}

const BlogAPI = {
  posts: [
    { url: 'keyboard-focus-in-an-iframe', name: "Keyboard focus in an iframe", description: "If your are running your html5 game in an iframe, you might run into the problem where your keyboard input loses focus, when you click outside the iframe. Here is a quick tip to circumvent this.", date: '2018-07-11'},
    { url: 'support-retina-with-phaser-3', name: "Support retina with Phaser 3", description: "You can support retina devices and other pixel ratio's in your Phaser 3 games. In this short blogpost i will explain how and give some tips on how to make your art super crisp.", date: '2018-06-03'},
    { url: 'ludum-dare-41-post-mortem', name: "Ludum Dare 41 post mortem", description: "About a month ago, I participated for the first time with the Ludum Dare game jam. Here is what i learned from it.", date: '2018-05-21'},
    { url: 'loading-assets-as-data-uri-in-phaser-3', name: "Loading assets as data URI's in Phaser 3", description: "In this blogpost i'll explain how you can load the assets of your Phaser 3 game as data URI's, without having to rely on xhr requests.", date: '2018-04-29'}
  ],
  all: function() { return this.posts},
  get: function(url) {
    const isPost = p => p.url === url
    return this.posts.find(isPost)
  }
}

export {GamesAPI, BlogAPI}
