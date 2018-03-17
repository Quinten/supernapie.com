const GamesAPI = {
  games: [
    { url: 'unmatch', name: "Unmatch", description: "Lorem" },
    { url: 'untitled', name: "Untitled", description: "Lorem" },
    { url: 'daves-disk', name: "Dave's Disk", description: "Lorem" },
    { url: 'dead-sticks', name: "Dead Sticks", description: "Lorem" },
    { url: 'woordpad', name: "Woordpad", description: "Lorem" },
    { url: 'dead-sticks', name: "Dead Sticks", description: "Lorem" },
    { url: 'euphrosine-wants-ten-dots', name: "Euphrosine wants ten dots", description: "Lorem" }
  ],
  all: function() { return this.games},
  get: function(url) {
    const isGame = g => g.url === url
    return this.games.find(isGame)
  }
}

export default GamesAPI
