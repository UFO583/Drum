window.addEventListener('load', function() {
 // get the backgroundimg for control the background up and down when keydown
    let backgroundimg = document.querySelector(`.bc`);

    //sound play for keyboard
    function keyboardPlaySound(e) {
      let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      // if keycode is yee then creat a yee element
      if (e.keyCode === 89) {
        addElement();
      }
      // if (!audio) return;
      audio.currentTime = 0;
      audio.play();
      key.classList.add("playing");
      //add the moveup animation when the key is down
      backgroundimg.classList.add("moveup");
    }

    //sound play for mouseclick
    function mousePlaySound() {
      let index = this.getAttribute('data-key');
      let audio = document.querySelector(`audio[data-key="${index}"]`);
      let key = document.querySelector(`.key[data-key="${index}"]`);
      
      if (!audio) return;
      audio.currentTime = 0.001;
      audio.play();
      key.classList.add("playing");
      //add the moveup animation when the key is down
      backgroundimg.classList.add("moveup");
    }

    //remove all transition after transition end
    function removeTransition(e) {
      // if (e.propertyName !== 'transform') return;
      this.classList.remove('playing');
      //remove the moveup animation when it finish
      backgroundimg.classList.remove("moveup");
    }



    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', keyboardPlaySound);

    for (let i = 0; i <= keys.length - 1; i++) {
      keys[i].addEventListener('click', mousePlaySound);
    }


    // music background start here
    let musicbc = document.querySelectorAll(`.musicbc`);
     for (let i = 0; i <= musicbc.length - 1; i++) {
       musicbc[1].style.right = '0';
       musicbc[2].style.bottom = '0';
       musicbc[3].style.right = '0';
       musicbc[3].style.bottom = '0';
     }

    // mouse background start here
    let mousebc = document.querySelector(`.mousebc`);
    document.addEventListener('mousemove', (e) => {
      let x = e.pageX - 20;
      let y = e.pageY - 40;
      mousebc.style.left = `${x}px`;
      mousebc.style.top = `${y}px`;
    });

    // creating random yee~~~~~
    function addElement () {
      for (let i = 0; i <= 80; i++) {
      // creat a yee
      let yee = document.createElement('div');
      let body = document.querySelector('body');
      // set yee~~~ as the content of the new element yee
      yee.innerHTML = 'yee~~~';
      yee.classList.add("yee");
      // creat yee on random places
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
      yee.style.left = `${getRandomInt(1920)}px`;
      yee.style.top = `${getRandomInt(800)}px`;
      // put yee into body
        body.appendChild(yee);
      }
    }


    // Mission bit logo design
    let missionLogo = document.querySelector('.logo');
    let bestWindow = document.querySelector('.best');
    let bestClose = document.querySelector('.bestClose');
    let missionSound = document.querySelector('.missionbitSound');
    missionLogo.addEventListener('click', () => {
        missionSound.play();
        bestWindow.style.display = 'block';
    })
    bestClose.addEventListener('click', () => {
        missionSound.play();
        bestWindow.style.display = 'none';
    })
    
})