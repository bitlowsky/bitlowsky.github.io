"use strict";

getGitProfile(data);

async function getGitProfile(data) {
    let response = await fetch('https://api.github.com/users/' + userName);
    let data = await response.json();

    document.getElementById("git-avatar").src = data.avatar_url;
    document.getElementById("git-name").innerText = data.name;
    document.getElementById("git-username").innerText = data.login;

    if (data.location) {
        document.getElementById("git-location").innerText = data.location;
    }

    if (data.bio) {
        document.getElementById("git-bio").innerHTML = "<h2>bio</h2>";
        document.getElementById("git-bio").onclick = function () {
            document.getElementById("git-bio").innerText = data.bio;
        }
    }

};