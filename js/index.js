function setVidHeight() {
  var vid = document.getElementById('watch');
  vid.style.height = window.innerHeight - 130 + 'px';
}

function toggleVisibility(id) {

  setVidHeight();

  var e = document.getElementById(id);
  if(e.style.display == 'block')
    e.style.display = 'none';
  else
    e.style.display = 'block';
}

function videoText(id) {
  var element = document.getElementById(id);
  if(element.innerHTML === 'Video') 
    element.innerHTML = 'Close!';
  else
     element.innerHTML = 'Video';
}