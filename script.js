let mouseX;
let mouseY;

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

document.addEventListener("mousemove", () => {
    mouseX = event.clientX; // Gets Mouse X
    mouseY = event.clientY; // Gets Mouse Y
    console.log([mouseX, mouseY]); // Prints data
    document.querySelector(".a").style.fontWeight = scale (mouseY, 0, 726, 0, 999);
  });
 
