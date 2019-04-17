import games from './games';
import posts from './posts';

const GamesAPI = {
    games: games,
    all: function () {
        return this.games;
    },
    latest: function () {
        return this.games.slice(0, 3);
    },
    get: function (url) {
        return this.games.find(g => g.url === url);
    }
}

const BlogAPI = {
    posts: posts,
    all: function () {
        return this.posts;
    },
    latest: function () {
        return this.posts.slice(0, 3);
    },
    get: function (url) {
        return this.posts.find(p => p.url === url);
    },
    getPrevious: function (url) {
        let index = this.posts.findIndex(p => p.url === url);
        if (index < this.posts.length - 1) {
            let post = this.posts[index + 1];
            post.relation = 'Previously';
            return post;
        }
        if (this.posts[0]) {
            let post = this.posts[0];
            post.relation = 'Recently';
            return post;
        }
        return false;
    }
}

module.exports = {GamesAPI, BlogAPI}
