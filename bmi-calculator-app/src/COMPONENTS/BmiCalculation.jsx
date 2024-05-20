import React, { useCallback, useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const BmiCalculation = () => {


const [height, setHeight] = useState();
const [weight, setWeight] = useState();
const [bmi, setBmi] = useState();


const handleHeight = (e) => {
    setHeight(e.target.value);
}

const handleWeight = (e) => {
    setWeight(e.target.value);
}

// useEffect (() => {
    
//     if (bmi < 18.5) {
//         toast("You are underweight");
//     }

//     else if (18.5 >= bmi && bmi <= 24.9) { // 23.41
//         toast("you are healthy");
//     }

//     else if (25 >= bmi && bmi <=29.9){// 27
//         toast("You are overweight");
//     }

//     else if (30 >= bmi && bmi <=34.9){ //32
//         toast("You are obese");
//     }
//     else {
//         toast("You are unhealthy");
//     }
// },[bmi]);

const handleSubmit = (e) => {

    e.preventDefault();

  if ( height <= 0 || weight <= 0) {

        toast("Please enter a valid input");
    }

    else {
        
        let weightCon = weight * 2.20;
    
        let bmiCalculate = ((weightCon * 703) / (height * height));

        setBmi("Your BMI: " +bmiCalculate.toFixed(2));
        

    }

 


}


  return (

    <div className='mx-4'>
      
       
      <form action="#" onSubmit={handleSubmit} className='bg-transparent border-2 border-pink-700 rounded-lg mx-auto pt-6 pb-12 w-[full] px-4 md:w-[600px]'>



    <div className='flex  gap-20 justify-center items-center mt-10'>

           <div className='flex flex-col gap-4 items-center justify-center'>

           <div>

                <label htmlFor="height" className='text-[20px] font-semibold text-white'>Height</label>

            </div>

            <div>

                <input className='bg-transparent text-white focus:outline-none border-b-4 border-[tomato] text-center' 
                type="number" name="" id="" placeholder='Enter your height (inch)' required
                value={height}
                onChange={handleHeight}
                
                />

            </div>

           </div>


           <div className='flex flex-col gap-4 items-center justify-center'>


                <div>

                    <label htmlFor="weight" className='text-[20px] font-semibold text-white'>Weight</label>

                </div>

                <div>

                    <input className='bg-transparent text-white focus:outline-none border-b-4 border-[tomato] text-center' 
                    type="number" name="" id="" placeholder='Enter your weight (kg)'required
                    value={weight}
                    onChange={handleWeight}
                    
                    />

                </div>
           
        
        </div>

    </div>

    {/* <p className='text-white text-center text-[20px] font-semibold mt-10'>Your BMI is: {bmi}</p> */}
    
    <p className='text-center text-[17px] font-semibold mt-10 text-[#448cca]'>{bmi}</p>
    
    
    

    <div className='flex justify-center items-center gap-6 mt-10'>
    
      <button className='bg-[tomato] h-[40px] w-[120px] rounded-md hover:bg-[#339e91] text-white text-[18px] font-semibold'>Calculate</button>
      <button className='bg-red-500 h-[40px] w-[120px] rounded-md hover:bg-[red] text-white text-[18px] font-semibold' onClick={() => {setHeight(''); setWeight('');}}>Reset</button>
      <ToastContainer />
    </div>

          

        

      </form>

    </div>
  )
}

export default BmiCalculation
