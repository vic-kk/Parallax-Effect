parallaxBox = document.getElementById('parallaxBox'),
layers = parallaxBox.getElementsByClassName('layer');

const getNewPosition = (event, moveAsCursor = false) => {
  const { clientX, clientY } = event;
  const calcAxis = (axisValue) => (window.innerWidth / 2 - axisValue - parallaxBox.offsetLeft) / 10;
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
  const position = getNewPosition(event, true);
  
  [...layers].forEach(layer => {
    const { dataset: { layerSpeed } } = layer;
    const speed = layerSpeed ? Number(layerSpeed) : .5;
    layer.style.webkitTransform = `translate(${position.x * speed}px, ${position.y * speed / 2}px)`;
  })
}

parallaxBox.onmousemove = updateMovement;