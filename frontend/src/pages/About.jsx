import React from 'react'
import photoProfile from '../assets/icons/user.png'
import { FaRocket } from "react-icons/fa";
import Ourteam from '../assets/images/portrait-business-partners-greeting-one-another-by-handshaking-way-office.jpg'
import logo1 from '../assets/logo/gamepad.png'
import logo2 from '../assets/logo/ghost.png'
import logo3 from '../assets/logo/joomla.png'
import logo4 from '../assets/logo/xing.png'

import icon1 from '../assets/icons/project-management.png'
import icon2 from '../assets/icons/learn.png'
import icon3 from '../assets/icons/teamwork.png'
import icon4 from '../assets/icons/trophy.png'
// import teamWorkPhoto from '../assets/images/group-people-working-out-business-plan-office.jpg'

const About = () => {

    const Cards = [
        {

            name: 'Zineddine Rebbouh',
            image: photoProfile
        },
        {

            name: 'Saad Mounder',
            image: photoProfile
        },
        {

            name: 'Sadallah ElMahdi ',
            image: photoProfile
        },
        {

            name: 'Remache Zoubir',
            image: photoProfile
        },
        {

            name: 'Saidou Abderrahmene ',
            image: photoProfile
        },
        {
            name: 'Sedrati Mortada',
            image: photoProfile
        },
    ]


    return (
        // <div className='w-full h-screen relative'>
        //     <div className='flex'>
        //         <div className='flex flex-2'>
        //             <span className='text-3xl font-bold text-black'>We’re a passionate group of people working from around the world to build the future of ecommerce.</span>
        //         </div>
        //         <div className='flex-2'>

        //         </div>
        //     </div>
        // </div>
        <div className='w-full relative'>
            <div className='w-full flex justify-evenly items-center gap-20 pb-10 px-[20rem] background-image2 '>
                <div className='w-[860px] h-[13rem]'>
                    <div className='w-full'>Home / About us</div>
                    <span className=' text-blue-500 font-bold text-6xl '>
                        Who We Are ?
                    </span>
                </div>
                <div className='flex flex-col items-start gap-4 px-8 pt-8'>

                    <div className="px-4 w-[40rem]">
                        <h1 className="text-5xl font-bold mb-4 uppercase">About Us.</h1>

                    </div>
                    <div className='px-4'>
                        <p className="text-lg">
                            At GameGuard, Empowering Lives Through Responsible Gaming , we believe in fostering a positive and balanced relationship with gaming. Our mission is to empower individuals to enjoy the world of gaming responsibly, promoting mental well-being and healthy habits.
                        </p>
                        <p className="text-lg mt-4">
                            We are passionate about creating a platform that not only offers valuable insights into gaming behaviors but also provides support and resources to individuals and their communities. Join us on this journey as we redefine the gaming experience with a focus on well-being and responsible gaming practices.
                        </p>
                    </div>


                </div>
            </div>

            <div id="smooth-content" className='w-full px-[20rem] py-10'>
                <div className=' w-full h-[22rem] bg-background-image'>

                </div>
            </div>

            <div id="smooth-content" className='w-full flex items-center justify-between px-[20rem] '>
                <div className='w-[25rem] h-full  flex items-center text-center'>
                    <span className='font-custom3 text-3xl'>"Support responsible play in the realm of gaming. Welcome to the GameGuard"</span>
                </div>
                <div className='h-full '>
                    <img className='w-[40rem] h-[20rem]' src={ Ourteam } alt="our-team" />
                </div>
            </div>

            <div id="smooth-content" className='flex flex-col items-start w-full py-8 px-[20em]'>
                <div className='pb-10'>
                    <span className='text-4xl font-bold text-black'>Our team</span>
                </div>
                <div className='pl-2'>
                    <p className="text-lg text-gray-700">
                        At GameGuard, our dedicated team of passionate individuals works together to redefine the gaming experience and promote responsible gaming. Get to know the faces behind the scenes who are committed to creating a positive impact in the gaming community.
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        Each team member brings a unique set of skills and experiences, contributing to the success of our platform. We believe in the power of collaboration and innovation to make a difference in the world of gaming.
                    </p>
                </div>
                <div className='flex justify-center items-center gap-7 my-10 py-5' >
                    {
                        Cards.map( ( card, index ) => (
                            <div key={ card.name } className='flex flex-1 flex-col items-center justify-center gap-5 min-w-[70px] mx-auto px-12'>
                                <img src={ card.image } className='w-20 rounded-full' alt="photo-profile" />
                                <span className='text-lg text-center'>{ card.name }</span>
                            </div>
                        ) )
                    }
                </div>
            </div>


            <div id="smooth-content" className='flex flex-col h-full items-start w-full mb-10'>
                <div className='px-[20rem]'>
                    <div className='py-10'>
                        <span className='text-4xl font-bold text-black'>Our values</span>
                    </div>
                    <div className='pl-2'>
                        <p className="text-lg text-gray-700">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos voluptatum ducimus odio eveniet nulla est quibusdam iusto dicta. In necessitatibus provident sunt nostrum? Aperiam eligendi facere eos sequi dolores quidem.
                        </p>
                    </div>
                    <div className='flex items-center justify-between gap-10 my-10 mx-4'>
                        <div className='flex flex-col justify-between items-center gap-7 my-1'>
                            <div className='flex items-start justify-center gap-4 my-2'>
                                <img src={ icon3 } />

                                <span>
                                    <strong className='text-2xl'>
                                        We are together
                                    </strong>
                                    <br />
                                    Knowing we are most powerful when we come together, we cultivate strong relationships internally and externally. Our relationships are founded on trust and transparency.
                                </span>
                            </div>
                            <div className='flex items-start justify-center gap-4 my-2'>
                                <img src={ icon4 } />

                                <span>
                                    <strong className='text-2xl'>Together we make an impact
                                    </strong>
                                    <br />
                                    At the end of the day, we make an impact. We set ambitious goals focused on growth and sustainability and we own our results.
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-7 my-1 md:flex-col'>
                            <div className='flex items-start justify-center gap-4 my-2'>
                                <img src={ icon2 } />
                                <span>
                                    <strong className='text-2xl'>
                                        Together we adapt and learn
                                    </strong>
                                    <br />
                                    Reflecting on and learning from our experiences, we continuously improve our ability to adapt and grow in a sustainable way.
                                </span>
                            </div>
                            <div className='flex items-start justify-center gap-4 my-2'>
                                <img src={ icon1 } />

                                <span>
                                    <strong className='text-2xl'>
                                        Together we innovate
                                    </strong>
                                    <br />
                                    Innovation is in our name. We experiment and create, never compromising on quality.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="smooth-content" className='flex items-center flex-wrap flex-col w-full h-[37rem] py-8 px-[20rem]'>
                <div className='background-gradient-color w-full h-full rounded-[1.5rem] text-center flex flex-col items-center flex-wrap' >
                    <div className='mt-10 p-10'>
                        <span className='text-white text-5xl font-bold space-x-2 '>Our customers love us</span>
                    </div>
                    <div className='w-[30rem]'>
                        <span className='text-gray-200 text-xl '>
                            Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit occaecat labore proident cillum in nisi adipisicing officia excepteur tempor deserunt.
                        </span>
                    </div>
                    <div className='text-white py-5'>
                        <span className='text-white text-3xl font-bold'>Trusted by the world’s most innovative teams</span>
                        <div className='mt-10'>
                            <ul className='flex items-center justify-between gap-10'>
                                <li className='flex flex-col items-center justify-center gap-4'>
                                    <img src={ logo1 } className='h-12 w-12' />
                                    <span className='font-bold text-xl'>Gaming Innovations
                                    </span>
                                </li>
                                <li className='flex flex-col items-center justify-center gap-4'>
                                    <img src={ logo2 } className='h-12 w-12' />

                                    <span className='font-bold text-xl'>
                                        TechPlay Studios
                                    </span>
                                </li>
                                <li className='flex flex-col items-center justify-center gap-4'>
                                    <img src={ logo3 } className='h-12 w-12 ' />

                                    <span className='font-bold text-xl'>
                                        Digital Entertainment Hub
                                    </span>
                                </li>
                                <li className='flex flex-col items-center justify-center gap-4'>

                                    <img src={ logo4 } className='h-12 w-12' />

                                    <span className='font-bold text-xl'>
                                        Global Gaming Solutions
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="0.5" d="M0,256L30,229.3C60,203,120,149,180,128C240,107,300,117,360,138.7C420,160,480,192,540,176C600,160,660,96,720,106.7C780,117,840,203,900,208C960,213,1020,139,1080,122.7C1140,107,1200,149,1260,149.3C1320,149,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg> */}
        </div >
    )
}

export default About
