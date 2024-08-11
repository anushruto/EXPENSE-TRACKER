import React, { useState } from 'react';  
const button = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

    // const [color, setColor] = useState('blue');  

    // const handleClick = () => {  
    //     setColor(prevColor => (prevColor === 'blue' ? 'black' : 'blue'));  
    // };  
  return (
    <div>


  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Get Started
  </span>
</button>

<br></br>



<div
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
      onClick={handleClick}
    >
      <span
        className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md ${
          isClicked ? 'opacity-0 text-white' : 'group-hover:bg-opacity-0 text-gray-900 dark:text-white'
        }`}
      >
        Get Started
      </span>
    </div>

<br></br>




{/* <button onClick={handleClick} style={{ backgroundColor: color }}>  
            Click me  
        </button> */}


</div>

  )
}

export default button