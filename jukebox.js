
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var load = document.getElementById("load");
var skip = document.getElementById("skip");
var random = document.getElementById("random")

var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");

var timer = document.getElementById("timer");



var songList = [];
var currentSong = 0
class Jukebox{
	
	playSong(){
		songList[currentSong].play();
	}
	pauseSong(){
		songList[currentSong].pause();
	}

	stopSong(){
		songList[currentSong].pause();
		songList[currentSong].currentTime = 0.0;
	}

	loadSong1(){
		songList[currentSong].pause();
		songList[currentSong].currentTime = 0.0;
		currentSong = 0;
		songList[0].play();
	}
	loadSong2(){
		songList[currentSong].pause();
		songList[currentSong].currentTime = 0.0;
		currentSong = 1;
		songList[1].play();
	}
	loadSong3(){
		songList[currentSong].pause();
		songList[currentSong].currentTime = 0.0;
		currentSong = 2;
		songList[2].play();
	}
	skipSong(){
		songList[currentSong].pause();
		songList[currentSong].currentTime = 0.0;
		if(currentSong === songList.length -1){
			currentSong = 0;
			songList[currentSong].play();
		}
		else{
			currentSong++;
			songList[currentSong].play();
		}
		
		
	}

	randomSong(){
		songList[currentSong].pause();
		songList[currentSong].currentTime = 0.0;
		currentSong = (Math.floor(Math.random()*3));
		songList[currentSong].play();
	}
	
}



var jukeBox1 = new Jukebox();

var songA = new Audio("songs/post2.mp3");
var songB = new Audio("songs/pipeitup.mp3");
var songC = new Audio("songs/Till.mp3")

songA.addEventListener("timeupdate", function() {
    var timer = document.getElementById('timer')
        duration = parseInt( songA.duration )
        currentTime = parseInt( songA.currentTime )
        timeLeft = duration - currentTime
       
    
    
    s = timeLeft % 60;
    m = Math.floor( timeLeft / 60 ) % 60;

    timer.innerHTML = m + ":"  + s;

    if(s < 10){	    
     	timer.innerHTML =  m + ":" + "0" + s;
	}
	else {
		s
	}
	
    
    
   
    
}, false);

songB.addEventListener("timeupdate", function() {
    var timer = document.getElementById('timer'),
        duration = parseInt( songB.duration ),
        currentTime = parseInt( songB.currentTime ),
        timeLeft = duration - currentTime,
      
    
    
    s = timeLeft % 60;
    m = Math.floor( timeLeft / 60 ) % 60;

    timer.innerHTML = m + ":"  + s;
    
    if(s < 10){
		 timer.innerHTML ="0"+s
		}else {
			s
		}

    
}, false);

songC.addEventListener("timeupdate", function() {
    var timer = document.getElementById('timer'),
        duration = parseInt( songC.duration ),
        currentTime = parseInt( songC.currentTime ),
        timeLeft = duration - currentTime,
      
    
    
    s = timeLeft % 60;
    m = Math.floor( timeLeft / 60 ) % 60;

    timer.innerHTML = m + ":"  + s;
    
    if(s < 10){
		 timer.innerHTML =	"0"+s
		}else {
			s
		}

   
    
}, false);


play.addEventListener("click",function(){
	jukeBox1.playSong();
})


pause.addEventListener("click",function(){
	jukeBox1.pauseSong();
})


skip.addEventListener("click",function(){
	jukeBox1.skipSong();
})

song1.addEventListener("click",function(){
	jukeBox1.loadSong1();
})

song2.addEventListener("click",function(){
	jukeBox1.loadSong2();
})

song3.addEventListener("click",function(){
	jukeBox1.loadSong3();
})

random.addEventListener("click",function(){
	jukeBox1.randomSong();
})

songList.push(songA);
songList.push(songB);
songList.push(songC);



