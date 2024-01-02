import React, { useMemo } from 'react'
import aizen from '../../../../assets/images/aizen.jpg'
import notification from '../../../../assets/icons/bell-1.png'
import magnifyingglass from '../../../../assets/icons/search-interface-symbol.png'
import { Link } from 'react-router-dom'

const navigation = () => {
    // const user = useMemo( () => getCurrentUser(), [] ); // Memoize user
    // let userProfile = user?.photo?.replace( /\\/g, "/" );
    // userProfile = "http://localhost:3000/" + userProfile;
    return (
        <div className='bg-white h-[100px] w-full rounded-lg py-2 mb-10 mt-3'>
            <div className='h-full flex justify-end items-center gap-3 mx-10'>
                <div className='bg-blue-500 rounded-full w-12 h-12 flex justify-center items-center'>
                    <img src={ notification } className='w-6 h-6 hover:bg-gray-100 rounded-lg' alt="" />
                </div>
                <div className='bg-blue-500 rounded-full w-12 h-12 flex justify-center items-center'>
                    <img src={ magnifyingglass } className='w-6 h-6 hover:bg-gray-100 rounded-lg' alt="" />
                </div>
                <Link to={ `/user/profile` } className="block">
                    <img src={ aizen } className="w-12 h-12 rounded-full" alt="user" />
                </Link>
            </div>
        </div>
    )
}

export default navigation
