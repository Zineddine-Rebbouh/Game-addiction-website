import React, { useState, useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import aizen from '../assets/images/aizen.jpg'
const Profile = () => {
    const navigate = useNavigate();

    const random = 'https://source.unsplash.com/1600x900/?anime';
    const [ user, setuser ] = useState( '' )

    useEffect( () => {
        setuser( getCurrentUser() );

    }, [] ); //


    var userProfile = user?.photo?.replace( /\\/g, "/" )
    userProfile = "http://localhost:3000/" + userProfile

    // const FetchUserPins = async () => {
    //     const result = await fetch( 'http://localhost:8000/auth/user-info/' + userId, {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     } );
    //     const info = await result.json();
    //     const userInfo = info.data

    //     console.log( userInfo )

    //     if ( text === 'Created' )
    //     {
    //         setPins( userInfo.pins );
    //     } else
    //     {
    //         setPins( userInfo.saves );
    //     }
    // };

    // console.log( user );

    const logout = () => {
        localStorage.removeItem( 'jwtToken' );
        setuser( null )
        navigate( '/' )
        window.location.reload()
    };

    console.log( user );

    // useEffect( () => {
    //     setUser( fetchUser() ); // Assuming fetchUser() returns user data
    //     FetchUserPins();
    // }, [ userId, text ] );

    // if ( !user ) return (
    //     navigate( '/Auth' )
    // )


    return (
        <div className='relative pb-2 h-[120vh] justify-center items-center'>
            <div className='flex flex-col pb-5 '>
                <div className='relative flex flex-col mb-7'>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={ random }
                            className='w-full h-[30rem] 2xl:h-[20rem] shadow-lg object-cover' alt="banner-profile" />
                        <img src={ userProfile } className='rounded-full w-20 h-20 -mt-10 shadow-xl object-cover' alt="" />
                        <h1 className='font-bold text-2xl text-center mt-3'>{ user.Firstname } { user.Lastname }</h1>
                        <div className='absolute top-0 z-1 left-0 p-2'>
                            <a href='/' type='button'
                                className='bg-white p-2 rounded-full cursor-pointer shadow-md outline-none '
                            >
                                <RiArrowGoBackFill fontSize={ 25 } />
                            </a>
                        </div>
                        <div className='absolute top-0 z-1 right-0 p-2'>
                            {/* { userId === user._id && ( */ }
                            <div>
                                <button type='button'
                                    className='bg-white p-2 rounded-full cursor-pointer shadow-md outline-none '
                                    onClick={ logout }
                                >
                                    <HiOutlineLogout color='red' fontSize={ 25 }></HiOutlineLogout>
                                </button>
                            </div>
                            {/* )
                            } */}
                        </div>
                    </div>
                </div>

                <div class="flex flex-col w-full order-first sm:order-none sm:-mt-10 px-[20rem]">

                    <div class="py-3">
                        <h2 class="text-lg font-poppins font-bold text-top-color">User information :  </h2>
                        <div class="border-2 w-20 border-top-color my-3"></div>
                        {/* <p>To get a career opportunity which would help me to utilize my academic background to assist
                                    me to gain experience, employ my excellent skills, and enable me to make positive
                                    contribution.</p> */}
                        <div className='w-full my-10 flex items-center gap-3 justify-between'>
                            <h2 class="text-lg font-poppins text-gray-700 font-bold text-top-color">First Name </h2>

                            <input id="email" name="email" type="email" autocomplete="email" required class=" w-4/5 rounded-md border-0 py-1.5 text-gray-950 bg-gray-200  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 text-xl" placeholder='' value={ `${ user.Firstname }` } readOnly />

                        </div>

                        <div className='my-10 flex items-center gap-3 justify-between'>
                            <h2 class="text-lg font-poppins text-gray-700 font-bold text-top-color">Last Name </h2>

                            <input id="email" name="email" type="email" autocomplete="email" required class=" w-4/5 rounded-md border-0 py-1.5 text-gray-950 bg-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 text-xl" placeholder='Lite' value={ `${ user.Lastname }` } readOnly />

                        </div>

                        <div className='my-10 flex items-center gap-3 justify-between'>
                            <h2 class="text-lg font-poppins text-gray-700 font-bold text-top-color">Email </h2>

                            <input id="email" name="email" type="email" autocomplete="email" required class=" w-4/5 rounded-md border-0 py-1.5 text-gray-950 bg-gray-200  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 text-xl" placeholder='mkrym99999@gmail.com' value={ `${ user.email }` } readOnly />

                        </div>

                        <div className='my-10 flex items-center gap-3 justify-between'>
                            <h2 class="text-lg font-poppins text-gray-700 font-bold text-top-color">Gender </h2>

                            <input id="email" name="email" type="email" autocomplete="email" required class=" w-4/5 rounded-md border-0 py-1.5 text-gray-950 bg-gray-200  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 text-xl" placeholder='Male' value={ `${ user.gender }` } readOnly />

                        </div>

                        <div className='my-10 flex items-center gap-3 justify-between'>
                            <h2 class="text-lg font-poppins text-gray-700 font-bold text-top-color">Birthday </h2>

                            <input id="email" name="email" type="email" autocomplete="email" required class=" w-4/5 rounded-md border-0 py-1.5 text-gray-950 bg-gray-200  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-4 text-xl" placeholder='22 / 07 / 2003' value={ `${ user.brithday }` } readOnly />
                        </div>

                        <div className=''>
                            <button type="submit" class="w-full rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Profile
