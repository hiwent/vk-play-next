// ==UserScript==
// @name         Play next
// @version      0.1
// @description  Autoclicker for the PlayNext button in audioplayer at vk.com
// @author       hiwent, https://github.com/hiwent
// @match        *INSERT HERE FULL LINK TO THE TARGET AUDIOLIST AT VK.COM, eg: https://vk.com/audios<yourVKid>*
// @downloadURL  https://github.com/hiwent/vk-play-next/blob/master/play-next.js
// @updateURL    https://github.com/hiwent/vk-play-next/blob/master/play-next.js
// @grant GM_getValue
// @grant unsafeWindow
// ==/UserScript==

var i=0;
var k=1000; // Here you can set the quantity of clicks
function next() {
    if(i<k){
        i++;
        document.getElementsByClassName("audio_page_player_next")[0].click();
    } else{
    clearInterval (timerVar);
    timerVar = "";
    }
}
var timerVar = setInterval(next, 5000); // Here you can set the time for pause between clicks. Here it's set to 5 sec.

