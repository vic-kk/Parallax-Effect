parallaxBox = document.getElementById('parallaxBox'),
layers = parallaxBox.getElementsByClassName('layer');

const getNewPositions = (event, moveAsCursor = false) => {
  const { clientX, clientY } = event;
  const calcAxis = (axis) => (window.innerWidth / 2 - axis - parallaxBox.offsetLeft) / 10;
  const newPositions = {
    x: calcAxis(clientX),
    y: calcAxis(clientY),
  }
  if (moveAsCursor) return {
    x: -newPositions.x,
    y: -newPositions.y,
  }
  return newPositions;
}

const updateMovement = (event) => {
  const positions = getNewPositions(event, true);
  for (var i = 0; i < layers.length; i++) {
    const speed = Number(layers[i].dataset.layerSpeed);
    layers[i].style.webkitTransform = `translate(${positions.x * speed}px, ${positions.y * speed / 2}px)`;
  }
}

parallaxBox.onmousemove = updateMovement;