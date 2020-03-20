"use strict";

document.getElementById('body').style.backgroundColor = getRandomColor()
// getGitProfile("bitlowsky");
belay();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

async function getGitProfile(userName) {
    let response = await fetch('https://api.github.com/users/' + userName);
    let data = await response.json();

    document.getElementById("git-avatar").src = data.avatar_url;
    document.getElementById("git-name").innerText = data.name;
    document.getElementById("git-username").innerText = data.login;

    if (data.location) {
        document.getElementById("git-location").innerText = data.location;
    }
};

function belay() {
    let test = document.getElementById("git-avatar").getAttribute("src");
    if (!test) {
        let data = {
            "login": "bitlowsky",
            "avatar_url": "https://avatars2.githubusercontent.com/u/55452635?v=4",
            "url": "https://api.github.com/users/bitlowsky",
            "html_url": "https://github.com/bitlowsky",
            "name": "Dmitry Pigasin",
            "location": "Nizhny Novgorod, Russia",
            "bio": "I'm student",
        };
        document.getElementById("git-avatar").src = data.avatar_url;
        document.getElementById("git-name").innerText = data.name;
        document.getElementById("git-username").innerText = data.login;

        if (data.location) {
            document.getElementById("git-location").innerText = data.location;
        }
    }
}