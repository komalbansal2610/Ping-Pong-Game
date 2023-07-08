    // Game logic
    let score = 0;
    let highestScore = null;
    
    function handleKeyPress(event) {
      if (event.key === 'Enter') {
        startNewRound();
      }
      // Move rods horizontally with 'a' and 'd' keys
      if (event.key === 'a' || event.key === 'd') {
        moveRods(event.key);
      }
    }

    function startNewRound() {
      score = 0;
      resetRodsPosition();

      // Retrieve the highest score from local storage
      const storedHighestScore = localStorage.getItem('highestScore');
      if (storedHighestScore) {
        highestScore = JSON.parse(storedHighestScore);
        // Display alert with highest scorer's name and score
        alert(
          `Highest Score: ${highestScore.name} - ${highestScore.score}`
        );
      } else {
        // Indicate it's the first time playing
        alert('This is your first time playing.');
      }
    }

    function resetRodsPosition() {
      // Reset rods position to center
      const rod1 = document.getElementById('rod1');
      const rod2 = document.getElementById('rod2');
      const containerWidth = document.querySelector('#container').clientWidth;
    
      const initialPosition = containerWidth / 2;
      rod1.style.left = initialPosition - rod1.offsetWidth / 2 + 'px';
      rod2.style.left = initialPosition - rod2.offsetWidth / 2 + 'px';
    }

    function moveRods(key) {
      const rod1 = document.getElementById('rod1');
      const rod2 = document.getElementById('rod2');
      const container = document.getElementById('container');
      const containerWidth = container.offsetWidth;
      const currentPosition1 = parseInt(rod1.style.left) ;
      const currentPosition2 = parseInt(rod2.style.left) ;
      const step = 10; // Define the step size for rod movement

      // Move rods horizontally based on the key pressed
      if (key === 'a' && currentPosition1 - step >= container.style.left) {
        // Move rods to the left    
          rod1.style.left = currentPosition1 - step + 'px';
          rod2.style.left = currentPosition2 - step + 'px';
        }
       else if (key === 'd' && currentPosition1 + rod1.offsetWidth + step <= container.style.left+containerWidth) {
        // Move rods to the right
          rod1.style.left = currentPosition1 + step + 'px';
          rod2.style.left = currentPosition2 + step + 'px';
        }
    }
    window.addEventListener('keydown',handleKeyPress);