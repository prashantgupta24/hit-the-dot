$(function() {
  //console.log('ready');
  let playing = false;
  let defaultGameLength = 5;
  let setIntFunction;
  let random;

  $('#startstop').on('click', function () {
    play();
  });

  $('#dmz').on('click', function () {
    //console.log('clicked!!');
    if(playing) {
      let score = $('#score').val() != 0 ? $('#score').val() : 0;
      $('#score').val(--score);
    }
  });

  let radios = $('form input:radio').on('click', function() {
    if (!playing) {
      $(this).prop('checked', false);
    } else {
      let head = $(this).val();
      //console.log(head);
      let score = $('#score').val() != 0 ? $('#score').val() : 0;
      if (head == random) {
        event.stopPropagation();
        $('#score').val(++score);
        $(this).prop('checked', false);
        placehead();
      } else {
        event.stopPropagation();
        $('#score').val(--score);
        $(this).prop('checked', false);
      }
    }
  });

  let play = function() {
    playing = playing ? false : true;
    //console.log('playing ' + playing);
    if (playing) {
      let time = defaultGameLength;
      $('#score').val(0);
      decTime(time--);
      setIntFunction = setInterval(function() {
        decTime(time--);
      }, 1000);

      placehead();
    } else {
      resetPlay();
    }
  };

  let decTime = function(time) {
    //console.log('decreasing time starting with ' + time);
    if (time == 0) {
      resetPlay();
    }
    $('#timeleft').val(time);
  };

  let placehead = function() {
    random = Math.floor(Math.random() * radios.length);
    //console.log(radios);
    radios.eq(random).prop('checked', true);
  };

  let resetPlay = function() {
    alert('Your score was ' + $('#score').val());
    clearInterval(setIntFunction);
    playing = false;
    radios.each(function() {
      $(this).prop('checked', false);
    });
    $('#timeleft').val('');
  };
});
