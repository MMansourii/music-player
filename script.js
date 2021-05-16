const play = document.getElementById('play');
const stop = document.getElementById('stop');
const next = document.getElementById('next');
const back = document.getElementById('back');
const lst = document.getElementById('lst');
const time = document.getElementById('time');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
let tracks =document.querySelectorAll('.tracks');
const list = document.querySelector('.list');
const lstPlay1 = document.querySelector('.lst-play1');
const lstPlay2 = document.querySelector('.lst-play2');
const lstPlay3 = document.querySelector('.lst-play3');

//next button


//function on play
function playMusic(){
    if(audio.paused){
        audio.play();
    }else{
        audio.pause();
    }
}
//update play icon
function updatePlayIcon(){
    if(audio.paused){
        play.innerHTML='<i class="fa fa-play fa2x"></i>';
    }else{
        play.innerHTML='<i class="fa fa-pause fa2x"></i>';
    }
}
//stop music
function stopMusic(){
    audio.currentTime=0;
    audio.pause();
    updatePlayIcon();
}
//set progress
function setProgress(){
    audio.currentTime=(+progress.value * audio.duration) / 100;
}

//update progress
function updateProgress(){
  progress.value= (audio.currentTime / audio.duration) * 100;

  let minute = Math.floor(audio.currentTime / 60);
  if(minute < 10 ){
      minute =  '0' + minute;
  }
  let second = Math.floor(audio.currentTime % 60);
  if(second < 10 ){
      second =  '0' + second;
  }
   time.innerText= minute +':'+second;
}
//next music function
var files=['audio1.mp3','audio2.mp3','audio3.mp3'];
var i=0;
function nextMusic(){

        if (i === files.length - 1) {
            i = 0;
        } else {
            i++;
        }

        // Change the audio element source
        audio.src = files[i];
        playMusic();
        updatePlayIcon();
}
//back music function
var j=0;
function backMusic(){

   if (j === files.length-1) {
       j--;
   } else {
       j+=2;
   }
   if(j===files.length){
       j=0;
   }

   // Change the audio element source
   audio.src = files[j];
   playMusic();
   updatePlayIcon();
}

//show the list 
function playList(){
    if(list.style.visibility === 'hidden'){
        list.style.visibility = 'visible';
    }else{
        list.style.visibility = 'hidden';
    }

}


//event on buttons
play.addEventListener('click',playMusic);
play.addEventListener('click',updatePlayIcon);

audio.addEventListener('timeupdate',updateProgress);

stop.addEventListener('click',stopMusic);

progress.addEventListener('change',setProgress);

next.addEventListener('click',nextMusic);
back.addEventListener('click',backMusic);
lst.addEventListener('click',playList);
lstPlay1.addEventListener('click', event =>{
        audio.src = files[0];
        playMusic();
    updatePlayIcon();
        
});
lstPlay2.addEventListener('click', event =>{
    audio.src = files[1];
    playMusic();
updatePlayIcon();
    
});
lstPlay3.addEventListener('click', event =>{
    audio.src = files[2];
    playMusic();
updatePlayIcon();
    
});