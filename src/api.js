const GamesAPI = {
  games: [
    { url: 'unmatch', name: "Unmatch", description: "Lorem" },
    { url: 'daves-disk', name: "Daves Disk", description: "Lorem" },
    { url: 'dead-sticks', name: "Dead Sticks", description: "Lorem" }
  ],
  all: function() { return this.games},
  get: function(url) {
    const isGame = g => g.url === url
    return this.games.find(isGame)
  }
}

export default GamesAPI
