(function () {
    var urls = [
        {
            old: 'https://www.kongregate.com/games/qubecity/nutty-twins',
            new: 'https://supernapie.com/games/nutty-twins'
        },
        {
            old: 'https://html5.gamedistribution.com/88386bb30c2a4f1085d645959365f6fe/',
            new: 'https://supernapie.com/games/fish-hop'
        },
        {
            old: 'https://supernapie.itch.io/esciit',
            new: 'https://supernapie.com/games/esciit'
        },
        {
            old: 'https://quinten.github.io/acid-sink/',
            new: 'https://supernapie.com/games/acid-sink'
        },
        {
            old: 'https://quinten.github.io/ibe/',
            new: 'https://supernapie.com/games/ibe'
        },
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
        },
        {
            old: 'https://supernapie.itch.io/voidcrab',
            new: 'https://supernapie.com/games/voidcrab'
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
