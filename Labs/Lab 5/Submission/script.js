var h1 = document.querySelector(".title");
var p = document.querySelector("#description");
var h3 = document.querySelector("#bossy");
var lis = document.querySelectorAll("li");
var body = document.querySelector("body");
var title = document.querySelector("title");

h1.textContent = "Hi. I am the new title now. HA!";
p.textContent = "Michael Laffan";
h3.textContent = "I would like you to complete the following tasks.";
title.textContent = "Look at me"

lis[0].style.color = "Blue";
lis[1].style.backgroundColor = "Pink";
body.style.backgroundColor = "Gray";
lis[3].style.textTransform = "uppercase";
lis[4].classList.add("title");