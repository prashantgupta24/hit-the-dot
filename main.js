$(function(){
  console.log('ready');
  $("form input:radio").on("click", function(){
    if(!playing) {
      $(this).prop("checked", false);
    } else{
      console.log($(this).val());
    }
  })
});

var playing = false;
var defaultGameLength = 20;
var setIntFunction;

var play = function(){
  playing = playing? false:true;
  console.log("playing " + playing);
  var time = defaultGameLength;

  // setIntFunction = setInterval(function(){
  //   decTime(time--)
  // }, 1000);
  //var radios = $("form").find("tr").find("input").filter(":radio");
  //$( "input[type=checkbox]" ).on( "click", countChecked );
  var radios = $("form input:radio");
  //radios[4].prop("checked", true);

  //console.log(radios);



}

var decTime = function(time){
  console.log('decreasing time starting with ' + time);
  if(time == 0) {
      clearInterval(setIntFunction);
  }
  $("#timeleft").val(time);
}

// var hithead = function(head){
//   //console.log(head);
// }

var placehead = function(){
  var random = Math.floor(Math.random() * 10)+1;

  document.dmz.elements[id].checked=false;
}
