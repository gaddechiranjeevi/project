import { useState } from "react"


const Circle=()=>{    
    const [count, setcount] = useState(1);
    const [buttonColor, setButtonColor] = useState('aqua');
    const [previousColor, setPreviousColor] = useState('#ffe600');

  const handleButtonClick = () => {
    setPreviousColor(buttonColor);
    setButtonColor(getRandomColor());
  };

  const getRandomColor = () => {
    const colors = ['yellow','red', 'green', 'blue','orange', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

    return(
        <div className="first">
        <div onClick={()=>setcount(count+1)} style={{backgroundColor : previousColor}} className="circle">
            <h1>{count}</h1>
            <p><u>Click to increase counter</u></p>
        </div>
        <div>
            <button onClick={handleButtonClick} className="button" style={{backgroundColor: buttonColor}}>Change Color</button>
        </div>
        </div>
    )
}

export default Circle;