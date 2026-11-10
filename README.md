# supernapie.com

Supernapie's game catalog

**This was the first version of the website made with react**

You will need node and npm: https://nodejs.org/en/

Run the following commands on your local machine:

To get dependecies (only once):

```
npm install
```

To run a local development server:

```
npm start
```

To make a production build:

```
npm run build
```

The files you have to upload to your hosting service are in the `pub` folder.

There is no database... Listings are managed with the following json files:

```
src/games.json
src/posts.json
```

The content of an individual post is in a markdown (.md) file in the following folder:

```
assets/md/
```

See also: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

Styling is done with variables in:

```
src/css/_var.less
```

Icons can be generated with the following online tool: https://realfavicongenerator.net/

Also change the google analytics and other keys, please...

See: `assets/index.html`




