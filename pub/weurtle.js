(function () {
    var urls = [
        {
            old: 'https://quinten.github.io/unmatch/',
            new: 'https://supernapie.com/games/unmatch'
        },
        {
            old: 'https://play.webwolk.be/',
            new: 'https://supernapie.com/games/untitled'
        },
        {
            old: 'https://quinten.github.io/daves-disk/',
            new: 'https://supernapie.com/games/daves-disk'
        },
        {
            old: 'https://quinten.github.io/dead-sticks/',
            new: 'https://supernapie.com/games/dead-sticks'
        },
        {
            old: 'https://quinten.github.io/euphrosine-wants-ten-dots/',
            new: 'https://supernapie.com/games/euphrosine-wants-ten-dots'
        },
        {
            old: 'https://quinten.github.io/graves-of-salad/',
            new: 'https://supernapie.com/games/graves-of-salad'
        }
    ];
    var links = document.querySelectorAll('a');
    links.forEach(function (link) {
        var href = link.getAttribute('href');
        urls.forEach(function (url) {
            if (url.old == href) {
                link.setAttribute('href', url.new);
            }
        });
    });
})();
