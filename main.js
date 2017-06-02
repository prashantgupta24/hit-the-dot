var playing = false;
var defaultGameLength = 5;
var setIntFunction;
var radios;
var random;

$(function(){
  console.log('ready');
  radios = $("form input:radio").on("click", function(){
    if(!playing) {
      $(this).prop("checked", false);
    } else{
      var head = $(this).val();
      //console.log(head);
      var score = $("#score").val() != 0 ? $("#score").val():0;
      if(head==random){
        $("#score").val(++score);
        $(this).prop("checked", false);
        placehead();
      }
      else {
        $("#score").val(--score);
        $(this).prop("checked", false);
      }
    }
  });
});

var play = function(){
  playing = playing? false:true;
  console.log("playing " + playing);
  if(playing){
    var time = defaultGameLength;
    $("#score").val(0);
    decTime(time--);
    setIntFunction = setInterval(function(){
      decTime(time--)
    }, 1000);

    placehead();
  }
  else {
    resetPlay();
  }
}

var decTime = function(time){
  //console.log('decreasing time starting with ' + time);
  if(time == 0) {
      resetPlay();
  }
  $("#timeleft").val(time);
}

var placehead = function(){
  random = Math.floor(Math.random() * radios.length);
  //console.log(random);
  radios.eq(random).prop('checked', true);
  d
}

var resetPlay = function(){
  alert("Your score was " + $("#score").val());
  clearInterval(setIntFunction);
  playing = false;
  radios.each(function(){
      $(this).prop('checked', false);
  });
   $("#timeleft").val('');
}
