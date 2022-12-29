function guessDayOfWeek() {
    // Generate a random date in 2023
    const randomYear = 2023;
    const randomMonth = Math.floor(Math.random() * 12) + 1;
    const randomDay = Math.floor(Math.random() * 28) + 1;
    const randomDate = new Date(randomYear, randomMonth, randomDay);
  
    // Format the date in dd-mmm-yyyy format
    const formattedDate = randomDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
  
    // Get the day of the week for the random date
    const dayOfWeek = randomDate.toLocaleString('en-US', { weekday: 'long' });
  
    // Display the date and prompt the user to input the day of the week
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = `What is the day of the week for ${formattedDate}?`;
    const input = document.createElement('input');
    input.type = 'text';
    input.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        // Check if the user's answer is correct
        if (input.value.toLowerCase() === dayOfWeek.toLowerCase()) {
          gameContainer.innerHTML = 'Correct!';
        } else {
          gameContainer.innerHTML = 'Incorrect';
          guessDayOfWeek();
        }
      }
    });
    gameContainer.appendChild(input);
  }
  
  guessDayOfWeek();
  