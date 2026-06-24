import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
  return (
    <>
    <div className='h-[100vh] , w-[100vw], bg-gradient-to-b from-[#1E0B4B] via-[#5B21B6] to-[#8B5CF6] cursor-default'>
        <div className='p-[30px] '>


    <div className='flex justify-between'>   
    <h1 className='font-greatvibes text-[60px] text-white '>Chemora</h1>
       
    <h1 className='font-greatvibes text-[50px] text-white , '>Chemistry&ensp;Beyond&ensp;Textbooks</h1>
    </div>
    


<div className='ml-[18%]'>

<iframe className='w-[65vw] h-[65vh] m-0 ' src="https://lottie.host/embed/86c1ea36-9fc8-49ab-8fc6-2cc5f4def015/3Qj6YAKa2i.lottie"></iframe>
</div>



  

        </div>

<Navbar/>
</div>   
    </>
  )
}

export default HomePage