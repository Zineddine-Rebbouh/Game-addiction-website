import React from 'react'
// import { FaLongArrowAltDown } from "react-icons/fa";
// import photo1 from '../../../assets/images/3809149.jpg'
// import photo2 from '../../../assets/images/3799016.jpg'
// import photo3 from '../../../assets/images/3771628.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import game from '../../../assets/images/game.webp'
// import backImage from '../assets/images/background-image.jpg'

const Container = () => {

    const navigate = useNavigate()

    return (
        <div className='w-full h-screen relative' >

            {/* first sections */ }
            <section className="relative flex items-center justify-between h-[830px]">
                <div className='text-black bg-white flex flex-col mx-10 px-10 py-12 w-[32rem] h-[40rem]'>
                    <div className='pt-[50px] px-10'>
                        <span className='text-blue-500 font-custom mt-4 text-7xl'>
                            Menatal
                            <span className='block text-blue-500 font-custom mt-4 text-7xl'>Health</span>
                            <span className='font-custom text-7xl'>is</span>
                        </span>
                        <span className='font-custom text-7xl'> Wealth</span>
                    </div>
                    <div className='flex gap-4 items-center'>
                        {/* <div className='bg-gray-200 rounded-full h-12 w-[70px] flex items-center justify-center'>
                            <FaLongArrowAltDown size={ 25 } />
                        </div> */}
                        <span className='font-custom py-10'>
                            Your Guardian against Video Game Addiction.
                            To live your life to the fullest , we're continuing to find ways to prevent game addiction for better mental health
                        </span>


                    </div>
                    <div>
                        <button onClick={ () => {
                            navigate( '/Auth/login' )
                        } } type="submit" class="flex items-center gap-3 rounded-md bg-blue-500 px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <span>
                                <FaArrowRightLong />
                            </span>
                            <span>
                                Get Started
                            </span>
                        </button>
                    </div>
                </div>
                {/* <div className='relative text-black bg-white flex flex-col mx-10 px-10 py-12 w-[32rem] h-[40rem]'>
                    <div className='flex flex-col gap-3 relative'>
                        <img className='absolute top-[-10px] left-[-20px]' width={ 200 } src={ photo2 } alt="p1" />
                        <img className='absolute top-[130px] left-[200px]' width={ 250 } src={ photo1 } alt="p2" />
                        <img className='absolute top-[300px] left-[-107px]' width={ 300 } src={ photo3 } alt="p3" />
                    </div>
                </div> */}

                {/* <div className='text-black absolute right-0 bg-white w-[45rem] h-full'>
                    <img src={ game } alt="" />
                </div> */}
            </section >


            {/* <section className=' relative min-h-[400px] background-image'>

            </section> */}



        </div >
    )
}

export default Container
