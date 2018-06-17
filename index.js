function makeSound(clicked_id) {
//console.log(clicked_id);
	const audio1 = document.getElementById("audio_"+clicked_id);
	const key1 = document.getElementById(clicked_id);
	//console.log(audio1);
	//console.log(key1);
	if(!audio1) return;
	key1.classList.add('playing');
	audio1.currentTime = 0;
    audio1.play();
  }


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  
  function playSound(e) {
	 console.log(e);
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  
	console.log(audio);
	console.log(key);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);