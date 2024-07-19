let count = 0;
const counterDisplay = document.getElementById('counter');
let updateInterval; // For storing the timer interval

// Timer Functionality
function updateCounter() {
  count++;
  counterDisplay.textContent = count;
}

updateInterval = setInterval(updateCounter, 1000); // Update every second

// Plus and Minus Buttons
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

plusButton.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});

minusButton.addEventListener('click', () => {
  count--;
  counterDisplay.textContent = count;
});

// Like Functionality
const likeButton = document.getElementById('heart');

likeButton.addEventListener('click', () => {
  const likedNumber = count; // Store the current count (liked number)
  // Update UI for likes (implementation depends on your desired UI)
  console.log(`You liked the number: ${likedNumber}`);

  // Example like count display (update the <ul> element with class 'likes')
  const likesList = document.querySelector('.likes');
  const likeItem = document.createElement('li');
  likeItem.textContent = `Liked: ${likedNumber}`;
  likesList.appendChild(likeItem);
});

// Pause Functionality
let isPaused = false;
const pauseButton = document.getElementById('pause');

pauseButton.addEventListener('click', () => {
  isPaused = !isPaused;
  if (isPaused) {
    clearInterval(updateInterval); // Pause timer
    plusButton.disabled = true;
    minusButton.disabled = true;
    likeButton.disabled = true;
    pauseButton.textContent = 'Resume';
  } else {
    updateInterval = setInterval(updateCounter, 1000); // Resume timer
    plusButton.disabled = false;
    minusButton.disabled = false;
    likeButton.disabled = false;
    pauseButton.textContent = 'Pause';
  }
});

// Comment Functionality
const commentInput = document.getElementById('comment-input');
const submitButton = document.getElementById('submit');
const commentList = document.getElementById('list');

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission

  const commentText = commentInput.value;
  // Update UI for comments (add comment to the <div> with class 'comments')
  const commentItem = document.createElement('p');
  commentItem.textContent = commentText;
  commentList.appendChild(commentItem);

  commentInput.value = ''; // Clear comment input after submission
});
