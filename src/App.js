import React, { useState } from 'react';
import './index.css';

const App = () => {

  //
  const [weight , setWeight] = useState(0)
  const [height , setHeight] = useState(0)
  const [BMI , setBMI] = useState('')
  const [message, setMessage] =useState('')

  let imgSrc = ''

  // function  to calculator 

  const  calculateBMI= (e) =>{
    e.preventDefault();
    if (weight > 0 && height > 0 ) {
      let bmi = (weight / (height * height)).toFixed(2);
      setBMI(bmi);
      //
      if(bmi < 18.5){
        setMessage('you are underweight');
        imgSrc = 'path_to_underweight_image';
      }else if(bmi >= 18.5 && bmi < 24.9){
        setMessage('you have a normal weight');
        imgSrc = 'path_to_normal_weight_image';
      }else{
        setMessage('you are overweight');
        imgSrc = 'path_to_overweight_image';
      }
    };
  }
  return (
    <div>
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
      </div>
      <form onSubmit={calculateBMI}>
        <div>
          <label>Weight (Kgs)</label>
          <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
          />
        </div>
        <div>
          <label>Height (Metres)</label>
          <input 
            type="number" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
          />
        </div>
        <div>
          <button className='btn' type='submit'>Calculate</button>
        </div>
      </form>
      <div className='center'>
        <h3>Your BMI is: {BMI}</h3>
        <p>{message}</p>
      </div>
      <div className='img-container'>
        <img src={imgSrc} alt='' />
      </div>
    </div>
  );
}

export default App;