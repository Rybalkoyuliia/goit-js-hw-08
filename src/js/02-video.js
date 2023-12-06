import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const currentTime = 'videoplayer-current-time';

const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(currentTime, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
const nowTime = Number(localStorage.getItem(currentTime));
player.setCurrentTime(nowTime);
