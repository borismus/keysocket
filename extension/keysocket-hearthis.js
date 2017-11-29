keySocket.init(
    "hearthis",
    {
        "play-pause": function(){
            if(document.querySelector(".play_track").className.search(/hidden/) > 0) {
	            document.querySelector('.fa-pause').click()
            } else {
	            document.querySelector('.fa-play').click()
            }
        },
	    "next": function(){
		    document.querySelector('.fa-fast-forward').click()
	    }
	    // prev is omitted
	    // stop is omitted
    }
);
