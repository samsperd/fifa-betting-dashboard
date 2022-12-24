import React, { useState } from 'react';

const ExampleComponent = () => {
  // Declare a state variable called "currentId" with an initial value of the first id in the array
  const [currentId, setCurrentId] = useState(ids[0]);

  // Declare a variable called "currentIndex" to keep track of the current index in the array
  let currentIndex = ids.indexOf(currentId);

  // Create a function to handle the next button click
  const handleNextClick = () => {
    // Increment the current index
    currentIndex++;

    // If the current index is greater than the length of the array, set it back to 0 (to loop back to the beginning)
    if (currentIndex >= ids.length) {
      currentIndex = 0;
    }

    // Set the new current id to the id at the current index
    setCurrentId(ids[currentIndex]);

    // Log the new current id to the console
    console.log(currentId);
  }

  // Create a function to handle the previous button click
  const handlePrevClick = () => {
    // Decrement the current index
    currentIndex--;

    // If the current index is less than 0, set it to the last index in the array (to loop back to the end)
    if (currentIndex < 0) {
      currentIndex = ids.length - 1;
    }

    // Set the new current id to the id at the current index
    setCurrentId(ids[currentIndex]);

    // Log the new current id to the console
    console.log(currentId);
  }

  return (
    <div>
      {/* Render the current id */}
      <div>{currentId}</div>

      {/* Render the next and previous buttons with the appropriate click handlers */}
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handlePrevClick}>Previous</button>
    </div>
  );
}