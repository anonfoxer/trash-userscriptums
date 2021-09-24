// ==UserScript==
// @name         CleanPsst
// @namespace    https://github.com/anonfoxer
// @version      0.1
// @description  removes the "reccomended" audios from a Psstaudio post, say goodbye to garbage recs.
// @author       anonfoxer
// @match        https://psstaudio.com/post/*
// @icon         https://www.google.com/s2/favicons?domain=psstaudio.com
// @grant        none
// ==/UserScript==


document.getElementsByClassName("row mt-2")[0].style.visibility = "hidden";
