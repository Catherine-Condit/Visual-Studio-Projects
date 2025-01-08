﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Adding an event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("animateBox");
    box.style.animation = "moveBox 5s infinite";
});