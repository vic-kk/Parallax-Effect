const parallaxBox = document.getElementById('parallaxBox');
const layers = [...parallaxBox.getElementsByClassName('layer')];

const getMovePosition = (event, moveAsCursor = false) => {
  const { clientX, clientY } = event;
  const { innerWidth, innerHeight} = window;
  const axisMovement = (axisValue, axisLenght) => (axisLenght / 2 - axisValue) / 10;
  const newPositions = {
    x: axisMovement(clientX, innerWidth),
    y: axisMovement(clientY, innerHeight) / 2,
  }
  if (moveAsCursor) return {
    x: -newPositions.x,
    y: -newPositions.y,
  }
  return newPositions;
}

const updateMovement = (event) => {
  const move = getMovePosition(event, true);
  layers.forEach(layer => {
    const { dataset: { layerSpeed } } = layer;
    const speed = layerSpeed ? Number(layerSpeed) : .5;
    layer.style.webkitTransform = `translate(${move.x * speed}px, ${move.y * speed}px)`;
  })
}

parallaxBox.onmousemove = updateMovement;
