var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new stopWatch(timer);

function start() {
  watch.start();
  toggleBtn.textContent = 'Pause';
}

function stop() {
  watch.stop();
  toggleBtn.textContent = 'Start';
}

toggleBtn.addEventListener('click', function() {
  (watch.isOn) ? stop() : start();
});

resetBtn.addEventListener('click', function() {
  if (!watch.isOn) {
    watch.reset();
  }
});