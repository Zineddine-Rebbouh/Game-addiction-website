import React, { useEffect, useMemo, useState } from 'react'
import aizen from '../../../../../assets/images/aizen.jpg'
import paperlcip from '../../../../../assets/icons/paper-clip.png'
import emoji from '../../../../../assets/icons/happy.png'
import { io } from 'socket.io-client';
import Conversition from '../conversition';

const Messages = () => {
    // const [ users, setUsers ] = useState( [] )
    // const [ selectedUser, setSelectedUser ] = useState( null );
    // const token = useMemo( () => localStorage.getItem( 'jwtToken' ), [] ); // Memoize token

    // const user = getCurrentUser()

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

    // const [ Conversitions, setConversitions ] = useState( '' )
    // useEffect( () => {
    //     // Connect to the Socket.IO server
    //     const getConversitions = async () => {
    //         const res = await fetch( '/conversitions/getConversitions?userId=' + user._id )
    //         setConversitions( res.json )
    //     }
    // }, [ token ] );


    // console.log( Conversitions );
    return (
        <div className='h-full w-full rounded-lg px-2 mb-4 bg-white flex gap-2'>
            <div className=' w-[24rem] border-2 border-gray-200 my-1 px-3 rounded-lg py-5'>
                <Conversition />
            </div>
            {/* { selectedUser ? ( */ }
            <div className="relative w-full border-2 rounded-lg my-1 ">
                <div className='flex items-center gap-4 px-10 py-8 border-b-2 border-gray-200'>
                    <img src={ aizen } className="w-[70px] h-[70px] rounded-full" />
                    <div>
                        <p className='font-semibold text-lg'> Zineddine Rebbouh</p>
                        <span className='text-gray-500 '>zinedinerabouh@gmail.com</span>
                    </div>
                </div>
                <div>
                    <div className='relative px-5 py-2 flex items-center justify-end'>
                        <p className='py-3 px-2 bg-blue-500 rounded-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <img className='right-0 mx-5 w-10 h-10 rounded-full' src={ aizen } alt='user-profile' />
                    </div>
                    <div className='relative px-5 py-2 flex items-center justify-end'>
                        <p className='py-3 px-2 bg-blue-500 rounded-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <img className='right-0 mx-5 w-10 h-10 rounded-full' src={ aizen } alt='user-profile' />
                    </div>
                    <div className='relative px-5 py-2 flex items-center justify-start'>
                        <img className='right-0 mx-5 w-10 h-10 rounded-full' src={ aizen } alt='user-profile' />
                        <p className='py-3 px-2 bg-gray-200 rounded-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className='relative px-5 py-2 flex items-center justify-start'>
                        <img className='right-0 mx-5 w-10 h-10 rounded-full' src={ aizen } alt='user-profile' />
                        <p className='py-3 px-2 bg-gray-200 rounded-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className='relative px-5 py-2 flex items-center justify-end'>
                        <p className='py-3 px-2 bg-blue-500 rounded-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <img className='right-0 mx-5 w-10 h-10 rounded-full' src={ aizen } alt='user-profile' />
                    </div>
                    <div className='relative px-5 py-2 flex items-center justify-start'>
                        <img className='right-0 mx-5 w-10 h-10 rounded-full' src={ aizen } alt='user-profile' />
                        <p className='py-3 px-2 bg-gray-200 rounded-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>
                    <div className='relative px-5 py-2 flex items-center justify-end'>
                        <p className='py-3 px-2 bg-blue-500 rounded-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        <img className='right-0 mx-5 w-10 h-10 rounded-full' src={ aizen } alt='user-profile' />
                    </div>
                </div>
                <div className='absolute bottom-0 w-full p-2 flex items-center gap-2'>
                    <input type="text" className='border-2 py-3 w-full px-4 rounded-lg text-black' placeholder='Enter Message . . . ' />
                    <img src={ paperlcip } className='h-11 w-11 rounded-full' alt="" />
                    <img src={ emoji } className='h-11 w-11 rounded-full' alt="" />
                </div>
            </div>

            {/* ) : (
                <div className='w-full border-2 rounded-lg px-2 my-1 text-center font-bold text-4xl'>
                    <p className='my-10'>NO USER SELECTED</p>
                </div>
            ) } */}

        </div >
    )
}

export default Messages
