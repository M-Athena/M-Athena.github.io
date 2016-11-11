
var Speed = randomIntFromInterval(50,50);
var direction = 0;

$(document).keydown(function(e) {
    switch(e.which) {
      case 32:
        
        break;
        case 37: // left
        $('#sprite').css('background','url("http://i.imgur.com/iJr6ON2.gif")');
        $('#sprite').animate({
        'left' : '-='+Speed+"px" //moves left
        }, 'linear');
        var direction = 0;
        break;

        case 38: // up
        $('#sprite').css('background','url("http://i.imgur.com/Keu3EGO.gif")');
   $('#sprite').css('width','300px');
           $('#sprite').css('height','320px');
        setTimeout(function(){
        $('#sprite').css('background','url("http://i.imgur.com/1V272zn.png")')}
        , 100);
        
        $('#sprite').animate({
          'marginTop' : "-200px"
        }, 'fast', 'linear');

        setTimeout(function(){
        $('#sprite').animate({
          'marginTop' : "8px"
        }, 'fast', 'linear');
        }, 300);
     setTimeout(function(){
        $('#sprite').css('background','url("http://i.imgur.com/hHBpvHW.png")')}
        , 450); 
        setTimeout(function(){
        $('#sprite').css('background','url("http://i.imgur.com/VgdZLz0.gif")')}
        , 600);
        //In the air   
        break;

        case 39: // right
        $('#sprite').css('background','url("http://i.imgur.com/ilT30G8.gif")'); //Runninprite
        $('#sprite').animate({
        'left' : '+='+Speed+"px" //moves right
        }, 'fast', 'linear');
        break;
        
        case 40: // down
      if (direction = 1) {  $('#sprite').css('background','url("http://i.imgur.com/hHBpvHW.png")');
                  }
        else {
          $('#sprite').css('background','url("http://i.imgur.com/GUGFPCW.png")');
        }
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
$(document).keyup(function(e) {
    switch(e.which) {
        case 37:
        $('#sprite').stop;
        $('#sprite').css('background','url("http://i.imgur.com/TBzjENY.gif")');
      break;
        
      case 39:
        $('#sprite').stop;
  $('#sprite').css('background','url("http://i.imgur.com/VgdZLz0.gif")');
        
                 break;
      case 40:
        $('#sprite').stop;
        
        $('#sprite').css('background','url("http://i.imgur.com/VgdZLz0.gif")');
        break;
        default: return; // exit this handler for other keys
    }
     // prevent the default action (scroll / move caret)
}); 
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}