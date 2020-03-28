"use strict";

// getGitProfile("bitlowsky");
hideExclude("projects");

if (!document.getElementById("git-avatar").getAttribute("src")) {
    fallback();
}

function hideExclude(id) {
    let tags = document.getElementsByClassName("content");

    for (const tag in tags) {
        if (tags.hasOwnProperty(tag)) {
            const element = tags[tag];
            if (element.id != id) {
                document.getElementById(element.id).style.display = "none";
            }
        }
    }
    document.getElementById(id).style.display = "block";
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

    if (data.bio) {
        document.getElementById("git-bio").innerText = data.bio;
    }
};

function fallback() {
    let data = {
        "login": "bitlowsky",
        "avatar_url": "https://avatars2.githubusercontent.com/u/55452635?v=4",
        "url": "https://api.github.com/users/bitlowsky",
        "html_url": "https://github.com/bitlowsky",
        "name": "Dmitry Pigasin",
        "location": "Nizhny Novgorod, Russia",
        "bio": "I'm student",
        "blog": "https://bitlowsky.github.io"
    };

    document.getElementById("git-avatar").src = data.avatar_url;
    document.getElementById("git-name").innerText = data.name;
    document.getElementById("git-username").innerText = data.login;

    if (data.location) {
        document.getElementById("git-location").innerText = data.location;
    }

    if (data.bio) {
        document.getElementById("git-bio").innerText = data.bio;
    }
}