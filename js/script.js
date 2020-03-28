"use strict";

getGitProfile("bitlowsky");

selectTab("projects-tab")

if (!document.getElementById("git-avatar").getAttribute("src")) {
    fallback();
}

function selectTab(id) {
    let tags = document.getElementsByClassName("tab");

    for (const tag in tags) {
        if (tags.hasOwnProperty(tag)) {
            const element = tags[tag];
            if (element.id != id) {
                document.getElementById(element.id).style.border = "none";
                document.getElementById(element.id).style.color = "#8899a6";
            }
        }
    }
    document.getElementById(id).style.color = "#1da1f2";
    document.getElementById(id).style.borderBottom = "2px solid #1da1f2";
    hideExclude(id.replace("-tab", ''));
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