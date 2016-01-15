$(document).ready(function() {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	function moveRectangles(mouseXY) {
		for (i = 0; i < 10; i++) {
			// context.clearRect(0, 0, canvas.width, canvas.height);
			context.fillStyle = 'rgb(' +
				Math.floor(Math.random() * 256) + ',' +
				Math.floor(Math.random() * 256) + ',' +
				Math.floor(Math.random() * 256) + ')';
			context.fillRect(mouseXY['x']+(Math.random()*i), mouseXY['y']+(Math.random()*i), (Math.random()*i*i), (Math.random()*i*i));
			context.fillRect(mouseXY['x']-(Math.random()*i), mouseXY['y']-(Math.random()*i), (Math.random()*i*i), (Math.random()*i*i));
		}
	}

	function getMousePos(canvas, evt) {
        var boundBox = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - boundBox.left,
          y: evt.clientY - boundBox.top
        };
      }

      canvas.addEventListener('mousedown', function(evt) {
      	var mdown = true;
        var mouseXY = getMousePos(canvas, evt);
        moveRectangles(mouseXY);
        
      }, false);
});