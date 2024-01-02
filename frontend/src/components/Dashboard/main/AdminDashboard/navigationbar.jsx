import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import aizen from '../../../../assets/images/aizen.jpg'

const navigationbar = () => {

    // const navigate = useNavigate()
    // const [ user, setUser ] = useState( '' )

    // useEffect( () => {
    //     setUser( getCurrentUser() );
    // }, [] ); // Empty dependency array ensures this effect runs once after the initial render


    // var userProfile = user?.photo?.replace( /\\/g, "/" )
    // userProfile = "http://localhost:3000/" + userProfile


    // const logout = () => {
    //     localStorage.removeItem( 'jwtToken' );
    //     setUser( null )
    //     navigate( '/' )
    //     window.location.reload()
    // };
    // useEffect( () => {
    //     setUser( getCurrentUser() );
    // }, [] );

    return (

        <div className=" w-full flex items-center justify-between py-3 text-white bg-blue-900 border-b border-gray-400">
            <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 border-none gap-3" >
                <img className="w-10 h-10 md:w-10 md:h-10 mr-2 overflow-hidden rounded-full" src={ aizen } />
                <span className="hidden md:block">Hello Admin</span>
            </div>
            <div className="flex justify-between items-center header-right">
                <div className="bg-white rounded flex items-center w-full max-w-xl mx-4 p-2 shadow-sm border border-gray-200">
                    <button className="outline-none focus:outline-none">
                        <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                    <input type="search" name="" id="" placeholder="Search" className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
                </div>
                <ul className="flex items-center">
                    <li>
                        <div className="block w-px h-6 mx-3 bg-gray-400 :bg-gray-700"></div>
                    </li>
                    <li>
                        <button className="flex items-center mr-4 hover:text-blue-100">
                            <span className="inline-flex mr-1">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                            </span>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default navigationbar
