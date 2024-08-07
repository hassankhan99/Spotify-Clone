let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let masterSongsName = document.getElementById('masterSongsName');
let gif = document.getElementById('gif');
let MyProgresBar = document.getElementById('MyProgresBar');
let songs = [
    { songName: 'salam-e-Ishq', filePath: 'songs/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Tum Hi Ho', filePath: 'songs/2.mp3', coverPath: 'covers/2.jpg' },
    { songName: 'Channa Mereya', filePath: 'songs/3.mp3', coverPath: 'covers/3.jpg' },
    { songName: 'Raabta', filePath: 'songs/4.mp3', coverPath: 'covers/4.jpg' },
    { songName: 'Tera Ban Jaunga', filePath: 'songs/5.mp3', coverPath: 'covers/5.jpg' },
    { songName: 'Tujhe Kitna Chahne Lage', filePath: 'songs/6.mp3', coverPath: 'covers/6.jpg' },
    { songName: 'Kabira', filePath: 'songs/7.mp3', coverPath: 'covers/7.jpg' },
    { songName: 'Janam Janam', filePath: 'songs/8.mp3', coverPath: 'covers/8.jpg' },
    { songName: 'Ae Dil Hai Mushkil', filePath: 'songs/9.mp3', coverPath: 'covers/9.jpg' },
    { songName: 'Zalima', filePath: 'songs/10.mp3', coverPath: 'covers/10.jpg' },
];

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    MyProgresBar.value = progress;
});

MyProgresBar.addEventListener('change', () => {
    audioElement.currentTime = MyProgresBar.value * audioElement.duration / 100;
});

const makePlays = () => {
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
};

Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element, index) => {
    element.addEventListener('click', (e) => {
        console.log('Song item clicked:', e.target);
        makePlays();
        songIndex = index;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongsName.innerText = songs[songIndex].songName;
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    });
});
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongsName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9; 
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongsName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
});

audioElement.addEventListener('ended', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    playSong();
});

function playSong() {
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
}


