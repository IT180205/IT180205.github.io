let i = 1.0;
function keyListener(e){
    if (!e){
     e = window.event; 
   }
   if (e.keyCode == 32){
    document.body.style = `background-color: ${randomColor()}`;
    console.log("test");
   }
   if(e.keyCode == 40){
    if(i > 0.09){i -= 0.1;}
    
    document.body.style.opacity = i;
    console.log(i);
   }
   if(e.keyCode == 38){
    if(i < 1){i += 0.1;}
    
    document.body.style.opacity = i;
    console.log(i);
   }
 } 

 function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function init() {
    document.onkeydown = keyListener;
  }


