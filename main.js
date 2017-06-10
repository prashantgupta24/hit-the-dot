$(function() {
  //console.log('ready');
  let hitTheDot = hitTheDotGame;
  hitTheDot.radios = $('form input:radio'),

  $('#startstop').on('click', function () {
    hitTheDot.play();
  });

  $('#dmz').on('click', function () {
    if(hitTheDot.playing) {
      let score = $('#score').val() != 0 ? $('#score').val() : 0;
      $('#score').val(--score);
    }
  });

  hitTheDot.radios.on('click', function() {
    //console.log($(this).val());
    if (!hitTheDot.playing) {
      $(this).prop('checked', false);
    } else {
      let head = $(this).val();
      //console.log(head);
      let score = $('#score').val() != 0 ? $('#score').val() : 0;
      if (head == hitTheDot.randomBox) {
        event.stopPropagation();
        $('#score').val(++score);
        $(this).prop('checked', false);
        hitTheDot.placehead();
      } else {
        event.stopPropagation();
        $('#score').val(--score);
        $(this).prop('checked', false);
      }
    }
  });
});

let hitTheDotGame = {
  playing: false,
  defaultGameLength: 5,
  randomBox: 0,
  setIntFunction: function (){},
  play: function() {
    this.playing = this.playing ? false : true;
    //console.log('playing ' + this.playing);
    if (this.playing) {
      $('#score').val(0);
      this.startTimer();
      this.placehead();
    } else {
      this.resetPlay();
    }
  },
  placehead: function() {
    this.randomBox = Math.floor(Math.random() * this.radios.length);
    this.radios.eq(this.randomBox).prop('checked', true);
  },
  startTimer: function () {
    let time = this.defaultGameLength;
    this.decTime(time--);
    this.setIntFunction = setInterval(function() {
      hitTheDotGame.decTime(time--);
    }, 1000);
  },
  resetPlay: function() {
    alert('Your score was ' + $('#score').val());
    clearInterval(this.setIntFunction);
    this.playing = false;
    this.radios.each(function() {
      $(this).prop('checked', false);
    });
    $('#timeleft').val('');
  },
  decTime: function(time) {
    //console.log('decreasing time starting with ' + time);
    if (time == 0) {
      this.resetPlay();
    }
    $('#timeleft').val(time);
  }
};
