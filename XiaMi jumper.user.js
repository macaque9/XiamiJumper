// ==UserScript==
// @icon         https://www.google.com/s2/favicons?domain=h.xiami.com
// @name         Xiami Jump to PC webpage
// @namespace    http://www.arise.moe/
// @version      0.1
// @description  Jump to PC webpage from mobile H5.
// @author       Arin.
// @include      *://h.xiami.com/*
// @grant        none
// ==/UserScript==

(function() {
        if(window.location.href.indexOf("song")>0){//Song
			location.replace(
				location.href.replace('://h.xiami.com/song.html?id=', '://www.xiami.com/song/')
			)
        }
        else if(window.location.href.indexOf("collect")>0){ //Kollect
            location.replace(
				location.href.replace('://h.xiami.com/collect_detail.html?id=', '://www.xiami.com/collect/')
			)
        }
        else if(window.location.href.indexOf("album")>0){ //Disc
            location.replace(
				location.href.replace('://h.xiami.com/album_detail.html?id=', '://www.xiami.com/album/')
			)
        }
        else if(window.location.href.indexOf("artist")>0){ //Artist
            location.replace(
				location.href.replace('://h.xiami.com/artist_detail.html?id=', '://www.xiami.com/artist/')
			)
        }
        else {
        }
})();












