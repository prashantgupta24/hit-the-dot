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
  console.log(radios.length);
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

  //var radios = $("form").find("tr").find("input").filter(":radio");
  //$( "input[type=checkbox]" ).on( "click", countChecked );
  //var radios = $("form input:radio");
  //radios[4].prop("checked", true);

//  console.log(radios);

   //var radio = radios[4];
  // console.log(radio);
  // radio.attr("checked", true);
// var i=0;
//   radios.each(function(){
//     if(i==4){
//       $(this).prop('checked', true);
//     }
//     i++;
//   })


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
  var i=0;
    radios.each(function(){
      if(i==random){
        $(this).prop('checked', true);
      }
      i++;
    })
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
