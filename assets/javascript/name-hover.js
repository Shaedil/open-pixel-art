// Wait until the window has loaded to add the event handler
window.onload = () => {
  // Add a mouse move event handler to the canvas
  document.getElementById('canvas').onmousemove = pixelHover;
};

/**
 * Print the contributer of a pixel on the canvas
 * @param  {Event} evt MouseEvent from onmousemove event
 */
function pixelHover(evt) {
  // Get the element under the mouse (or tap)
  mousedOverEl = document.elementFromPoint(evt.clientX, evt.clientY);

  // Check if the moused over element is a RECT
  if (mousedOverEl.nodeName == 'rect') {
    // If it is a rect then get the "name" attribute
    rectName = mousedOverEl.getAttribute('name');
    // Then get the "style" attribute
    rectColor = mousedOverEl.getAttribute('style').substring(6);
    // Check if there is a name associated with that block then set
    // the contributer name span to the name
    if (rectName != null) {
      document.getElementById('contributer-name').textContent = rectName;
      // Check if the pixel's color attribute has enough contrast and prints
      // rectName in that color
      if (parseInt(rectColor, 16) < 0xffffff/2) {
        document.getElementById('contributer-name').style.color = rectColor;
      }
    } else {
      // If there is no associated name then set the text to nothing
      document.getElementById('contributer-name').textContent = '';
    }
  } else {
    // If the element is not a rect set the text to nothing
    document.getElementById('contributer-name').textContent = '';
  }
}
