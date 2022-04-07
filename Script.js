console.log("welcome to spotify");

//Initilize the Variables
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItem = Array.from( document.getElementsByClassName('songItem')); 

let songs=[
    {songName: "Boyfriend", filePath:"songs/1.mp3" ,coverPath:"cover/Cover2.png"},
    {songName: "Oo bolega sala", filePath:"songs/2.mp3" ,coverPath:"cover/Cover2.png"},
    {songName: "srivali", filePath:"songs/3.mp3" ,coverPath:"cover/Cover3.png"},
    {songName: "song name", filePath:"songs/1.mp3" ,coverPath:"cover/Cover3.png"},
    {songName: "song name", filePath:"songs/2.mp3" ,coverPath:"cover/Cover2.png"},
    {songName: "song name", filePath:"songs/3.mp3" ,coverPath:"cover/Cover3.png"},
    {songName: "song name", filePath:"songs/1.mp3" ,coverPath:"cover/Cover2.png"},
    {songName: "song name", filePath:"songs/2.mp3" ,coverPath:"cover/Cover2.png"},
    {songName: "song name", filePath:"songs/3.mp3" ,coverPath:"cover/Cover3.png"},
    {songName: "song name", filePath:"songs/1.mp3" ,coverPath:"cover/Cover3.png"},

    
]

songItem.forEach((Element,i)=>{
    // console.log(Element,i)
    Element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    
    Element.getElementsByClassName("songName")[0].innerText= songs[i].songName;

})

// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }

})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    
    //update seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progress;
})

myProgressBar.addEventListener('change',()=>{
 audioElement.currentTime = myProgressBar.value* audioElement.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
       Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
  makeAllPlays();
  songIndex =parseInt(e.target.id);
  e.target.classList.remove('fa-play-circle');
  e.target.classList.add('fa-pause-circle');
  audioElement.src =`songs/${songIndex+1}.mp3`;
  masterSongName.innerText= songs[songIndex].songName;
  audioElement.currentTime =0;
  audioElement.play();
  gif.style.opacity=1;
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>3){
        songIndex=0;
    }
    else{
        songIndex +=1;   
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;   
    }
    audioElement.src =`songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;

    audioElement.currentTime =0;
    audioElement.play();
    
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})