const GamesAPI = {
  games: [
    { url: 'unmatch', name: "Unmatch", description: "" },
    { url: 'untitled', name: "Untitled", description: "" },
    { url: 'daves-disk', name: "Dave's Disk", description: "" },
    { url: 'dead-sticks', name: "dead sticks", description: "" },
    { url: 'euphrosine-wants-ten-dots', name: "Euphrosine wants ten dots", description: "" },
    //{ url: 'graves-of-salad', name: "Graves of Salad", description: "" }
  ],
  all: function() { return this.games},
  get: function(url) {
    const isGame = g => g.url === url
    return this.games.find(isGame)
  }
}

export default GamesAPI
