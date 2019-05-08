class Helper {
  // class=playPauseAndUpdate parameter=song
    playPauseAndUpdate(song) {
        const duration = player.getDuration();
        $('#time-control .total-time').text(duration);
        player.playPause(song);
    }
    $('#time-control .total-time').text(totalTime);
  };
}
const helper = new Helper();
