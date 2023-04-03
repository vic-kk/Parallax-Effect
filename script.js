parallaxBox = document.getElementById('parallaxBox'),
layers = parallaxBox.getElementsByClassName('layer');

parallaxBox.onmousemove = (event) => {
  const xPos = (window.innerWidth/2 - event.clientX - parallaxBox.offsetLeft)/10;
  const yPos = (window.innerHeight/2 - event.clientY - parallaxBox.offsetTop)/10;
  
  for (var i = 0; i < layers.length; i++) {
    const speed = Number(layers[i].dataset.layerSpeed);
    layers[i].style.webkitTransform = `translate(${-xPos * speed}px, ${-yPos * speed / 2}px)`;
  }
}