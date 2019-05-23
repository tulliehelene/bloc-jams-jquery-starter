// class Helper {
//   // class=playPauseAndUpdate parameter=song
//     playPauseAndUpdate(song) {
//         const duration = player.getDuration();
//         $('#time-control .total-time').text(duration);
//         player.playPause(song);
//     }
// <<<<<<< HEAD
//     $('#time-control .total-time').text(totalTime);
//   };
// =======
// >>>>>>> check11
// }
// const helper = new Helper();


class Helper {
  // class=playPauseAndUpdate parameter=song
    playPauseAndUpdate(song) {
        //const duration = player.getDuration(); <== told to remove - Anna Sanderson
        const totalTime = player.currentlyPlaying.duration;
        $('#time-control .total-time').text(duration);
        player.playPause(song);
    }
}

const helper = new Helper();


// Adding nonsensical code to the end of this file to make it different to master - please ignore
