import React, { useEffect, useMemo, useState } from 'react'
import aizen from '../../../../../assets/images/aizen.jpg'
import call from '../../../../../assets/icons/viber.png'
import calendar from '../../../../../assets/icons/calendar.png'
import gmail from '../../../../../assets/icons/gmail.png'






const Overview = () => {



    // const createConversition = async ( id ) => {

    //     try
    //     {
    //         await fetch( `http://localhost:3000/conversitions/createConversition`, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify( {
    //                 user1: user._id,
    //                 user2: id
    //             } )
    //         } )
    //     } catch ( error )
    //     {
    //         console.log( error );
    //     }

    // }

    // const user = useMemo( () => getCurrentUser(), [] ); // Memoize user
    // const [ users, setUsers ] = useState( [] );
    // const token = useMemo( () => localStorage.getItem( 'jwtToken' ), [] ); // Memoize token

    // useEffect( () => {
    //     const fetchUsers = async () => {
    //         try
    //         {
    //             const res = await fetch( `http://localhost:3000/user/getUsers`, {
    //                 method: "GET",
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `Bearer ${ token }`
    //                 },
    //                 // Body should not include unnecessary parameters
    //             } );

    //             if ( res.ok )
    //             {
    //                 const usersData = await res.json();
    //                 console.log( usersData );
    //                 setUsers( usersData.users ); // Assuming the response contains a property named "users"
    //                 console.log( users );
    //             } else
    //             {
    //                 console.error( 'Failed to fetch users' );
    //             }
    //         } catch ( error )
    //         {
    //             console.error( 'Error:', error );
    //         }
    //     };

    //     fetchUsers()

    // }, [] )

    return (
        <div className=' h-full w-full rounded-lg mb-4'>
            {/* {
                users && users.map( ( item, index ) => {
                    let userProfile = item?.photo?.replace( /\\/g, "/" );
                    userProfile = "http://localhost:3000/" + userProfile;

                    if ( item.role === 'doctor' || item.role === 'Admin' || item.status === false )
                    {
                        return;
                    }
                    return ( */}
            <div className='h-[12rem] w-full bg-white flex items-center gap-5 px-10 my-7 rounded-lg' >
                <img src={ aizen } className='w-[160px] h-[160px] rounded-full' alt="" />
                <div className='w-full mx-3'>
                    <div className='flex justify-between items-center '>
                        <span className='font-bold text-xl'>Zinedine Rebbouh</span>
                        <button className='text-green-700 bg-green-100 rounded-lg w-50 px-3 py-2'>
                            Available patient : <strong>Yes</strong>
                        </button>
                    </div>
                    <div className='flex items-center gap-6 my-5'>
                        <div className='flex items-center gap-3 text-semibold'>
                            <img src={ call } alt="" className='w-6' />
                            <span className='font-semibold text-gray-500'>0562163159</span>
                        </div>
                        <div className='flex items-center gap-3 text-semibold'>
                            <img src={ gmail } alt="" className='w-6' />
                            <span className='font-semibold text-gray-500'>mkrym99999@gmail.com</span>
                        </div>
                        <div className='flex items-center gap-3 text-semibold'>
                            <img src={ calendar } alt="" className='w-6' />
                            <span className='font-semibold text-gray-500'>22-07-2003</span>
                        </div>
                    </div>
                    <div className='relative flex items-center gap-5'>
                        <div className='border-r-2 border-gray-400 pr-10'>
                            <span className='text-gray-400 font-semibold'>In contact with  </span>
                            <br></br>
                            <span className='text-gray-700 pl-1'>Joy sens</span>
                        </div>
                        <div className=' border-gray-400 px-10'>
                            <button class="hover:bg-blue-700 bg-blue-500 text-white font-bold py-2 px-4 rounded-full mx-10">
                                Message me
                            </button>
                            <button class="hover:bg-blue-700 bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                                View test result
                            </button>
                        </div>
                        <button class="absolute right-0 flex items-center hover:bg-gray-200 text-indigo-500 gap-2 font-bold py-2 px-4 rounded-full">
                            View test result
                            <svg class="-mr-1 h-5 w-5 text-indigo-500 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" onClick={ () => setHideDropList( !HideDropList ) }>
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='h-[12rem] w-full bg-white flex items-center gap-5 px-10 my-7 rounded-lg' >
                <img src={ aizen } className='w-[160px] h-[160px] rounded-full' alt="" />
                <div className='w-full mx-3'>
                    <div className='flex justify-between items-center '>
                        <span className='font-bold text-xl'>Zinedine Rebbouh</span>
                        <button className='text-green-700 bg-green-100 rounded-lg w-50 px-3 py-2'>
                            Available patient : <strong>Yes</strong>
                        </button>
                    </div>
                    <div className='flex items-center gap-6 my-5'>
                        <div className='flex items-center gap-3 text-semibold'>
                            <img src={ call } alt="" className='w-6' />
                            <span className='font-semibold text-gray-500'>0562163159</span>
                        </div>
                        <div className='flex items-center gap-3 text-semibold'>
                            <img src={ gmail } alt="" className='w-6' />
                            <span className='font-semibold text-gray-500'>mkrym99999@gmail.com</span>
                        </div>
                        <div className='flex items-center gap-3 text-semibold'>
                            <img src={ calendar } alt="" className='w-6' />
                            <span className='font-semibold text-gray-500'>22-07-2003</span>
                        </div>
                    </div>
                    <div className='relative flex items-center gap-5'>
                        <div className='border-r-2 border-gray-400 pr-10'>
                            <span className='text-gray-400 font-semibold'>In contact with  </span>
                            <br></br>
                            <span className='text-gray-700 pl-1'>Joy sens</span>
                        </div>
                        <div className=' border-gray-400 px-10'>
                            <button class="hover:bg-blue-700 bg-blue-500 text-white font-bold py-2 px-4 rounded-full mx-10">
                                Message me
                            </button>
                            <button class="hover:bg-blue-700 bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                                View test result
                            </button>
                        </div>
                        <button class="absolute right-0 flex items-center hover:bg-gray-200 text-indigo-500 gap-2 font-bold py-2 px-4 rounded-full">
                            View test result
                            <svg class="-mr-1 h-5 w-5 text-indigo-500 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" onClick={ () => setHideDropList( !HideDropList ) }>
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='h-[12rem] w-full bg-white flex items-center gap-5 px-10 my-7 rounded-lg' >
                <img src={ aizen } className='w-[160px] h-[160px] rounded-full' alt="" />
                <div className='w-full mx-3'>
                    <div className='flex justify-between items-center '>
                        <span className='font-bold text-xl'>Zinedine Rebbouh</span>
                        <button className='text-green-700 bg-green-100 rounded-lg w-50 px-3 py-2'>
                            Available patient : <strong>Yes</strong>
                        </button>
                    </div>
                    <div className='flex items-center gap-6 my-5'>
                        <div className='flex items-center gap-3 text-semibold'>
                            <img src={ call } alt="" className='w-6' />
                            <span className='font-semibold text-gray-500'>0562163159</span>
                        </div>
                        <div className='flex items-center gap-3 text-semibold'>
                            <img src={ gmail } alt="" className='w-6' />
                            <span className='font-semibold text-gray-500'>mkrym99999@gmail.com</span>
                        </div>
                        <div className='flex items-center gap-3 text-semibold'>
                            <img src={ calendar } alt="" className='w-6' />
                            <span className='font-semibold text-gray-500'>22-07-2003</span>
                        </div>
                    </div>
                    <div className='relative flex items-center gap-5'>
                        <div className='border-r-2 border-gray-400 pr-10'>
                            <span className='text-gray-400 font-semibold'>In contact with  </span>
                            <br></br>
                            <span className='text-gray-700 pl-1'>Joy sens</span>
                        </div>
                        <div className=' border-gray-400 px-10'>
                            <button class="hover:bg-blue-700 bg-blue-500 text-white font-bold py-2 px-4 rounded-full mx-10">
                                Message me
                            </button>
                            <button class="hover:bg-blue-700 bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
                                View test result
                            </button>
                        </div>
                        <button class="absolute right-0 flex items-center hover:bg-gray-200 text-indigo-500 gap-2 font-bold py-2 px-4 rounded-full">
                            View test result
                            <svg class="-mr-1 h-5 w-5 text-indigo-500 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" onClick={ () => setHideDropList( !HideDropList ) }>
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* )
                } )
            } */}
        </div >
    )
}

export default Overview
