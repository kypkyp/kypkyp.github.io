function renew(){
  var random = Math.floor( Math.random() * 4 );

  var img = document.getElementById('Img');
  img.src = "./" + random + ".jpg";
}
