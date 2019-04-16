import games from './games';
import posts from './posts';

const GamesAPI = {
  games: games,
  all: function() { return this.games},
  latest: function() { return this.games.slice(0, 3)},
  get: function(url) {
    const isGame = g => g.url === url
    return this.games.find(isGame)
  }
}

const BlogAPI = {
  posts: posts,
  all: function() { return this.posts},
  latest: function() { return this.posts.slice(0, 3)},
  get: function(url) {
    const isPost = p => p.url === url
    return this.posts.find(isPost)
  }
}

module.exports = {GamesAPI, BlogAPI}
