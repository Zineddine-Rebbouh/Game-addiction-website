import React, { useEffect, useMemo, useState } from 'react'
import { CiTrash } from "react-icons/ci";
import { GrView } from "react-icons/gr";
import aizen from '../../../../../assets/images/aizen.jpg'

const Users = () => {

    const token = useMemo( () => localStorage.getItem( 'jwtToken' ), [] ); // Memoize token
    const [ users, setUsers ] = useState( [] );

    useEffect( () => {
        const fetchUsers = async () => {
            try
            {
                const res = await fetch( `http://localhost:3000/user/getUsers`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${ token }`
                    },
                    // Body should not include unnecessary parameters
                } );

                if ( res.ok )
                {
                    const usersData = await res.json();
                    console.log( usersData );
                    setUsers( usersData.users ); // Assuming the response contains a property named "users"
                } else
                {
                    console.error( 'Failed to fetch users' );
                }
            } catch ( error )
            {
                console.error( 'Error:', error );
            }
        };

        fetchUsers()

    }, [] )


    const deleteUser = async ( userId ) => {
        const res = await fetch( `http://localhost:3000/user/deleteUser/${ userId }`, {
            method: "delete",
            // Body should not include unnecessary parameters
        } );
        if ( res.ok )
        {
            window.location.reload()
        }

    }
    return (

        <div className="container mx-auto p-8 h-screen">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <td className="py-2 px-4 border-b font-bold text-lg">User</td>
                        <td className="py-2 px-4 border-b font-bold text-lg">Role</td>
                        <td className="py-2 px-4 border-b font-bold text-lg">Status</td>
                        <td className="py-2 px-4 border-b font-bold text-lg">Date of Birth</td>
                        <td className="py-2 px-4 border-b font-bold text-lg">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {/* { users.map( user => {
                        let userProfile = user?.photo?.replace( /\\/g, "/" );
                        userProfile = "http://localhost:3000/" + userProfile;
                        let brithday = user.BirthDay.split( 'T' )[ 0 ]
                        if ( user.role === 'Admin' )
                        {
                            return null;
                        }
                        return ( */}
                    <tr>
                        <td className="py-4 px-4 border-b">
                            <div className="flex items-center">
                                <img src={ aizen } alt={ `Profile of ` } className="h-12 w-12 rounded-full mr-4 flex justify-center items-center" />
                                <div>
                                    <p className="font-semibold text-lg capitalize">Mohamed Nadir</p>
                                </div>
                            </div>
                        </td>
                        <td className="py-2 px-4 border-b">Patient</td>
                        <td className="py-2 px-4 border-b">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full :bg-green-700 :text-green-100"> Approved </span>
                        </td>
                        <td className="py-2 px-4 border-b"> 12 - 01 - 2004</td>
                        <td className="py-2 px-4 border-b">
                            <button
                                className="bg-blue-500 text-white py-1 px-2 rounded mr-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                            >
                                <GrView size={ 25 } />
                            </button>
                            <button
                                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                            >
                                <CiTrash size={ 25 } />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-4 px-4 border-b">
                            <div className="flex items-center">
                                <img src={ aizen } alt={ `Profile of ` } className="h-12 w-12 rounded-full mr-4 flex justify-center items-center" />
                                <div>
                                    <p className="font-semibold text-lg capitalize">Mohamed Nadir</p>
                                </div>
                            </div>
                        </td>
                        <td className="py-2 px-4 border-b">Patient</td>
                        <td className="py-2 px-4 border-b">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full :bg-green-700 :text-green-100"> Approved </span>
                        </td>
                        <td className="py-2 px-4 border-b"> 12 - 01 - 2004</td>
                        <td className="py-2 px-4 border-b">
                            <button
                                className="bg-blue-500 text-white py-1 px-2 rounded mr-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                            >
                                <GrView size={ 25 } />
                            </button>
                            <button
                                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                            >
                                <CiTrash size={ 25 } />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-4 px-4 border-b">
                            <div className="flex items-center">
                                <img src={ aizen } alt={ `Profile of ` } className="h-12 w-12 rounded-full mr-4 flex justify-center items-center" />
                                <div>
                                    <p className="font-semibold text-lg capitalize">Mohamed Nadir</p>
                                </div>
                            </div>
                        </td>
                        <td className="py-2 px-4 border-b">Patient</td>
                        <td className="py-2 px-4 border-b">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full :bg-green-700 :text-green-100"> Approved </span>
                        </td>
                        <td className="py-2 px-4 border-b"> 12 - 01 - 2004</td>
                        <td className="py-2 px-4 border-b">
                            <button
                                className="bg-blue-500 text-white py-1 px-2 rounded mr-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                            >
                                <GrView size={ 25 } />
                            </button>
                            <button
                                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                            >
                                <CiTrash size={ 25 } />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-4 px-4 border-b">
                            <div className="flex items-center">
                                <img src={ aizen } alt={ `Profile of ` } className="h-12 w-12 rounded-full mr-4 flex justify-center items-center" />
                                <div>
                                    <p className="font-semibold text-lg capitalize">Mohamed Nadir</p>
                                </div>
                            </div>
                        </td>
                        <td className="py-2 px-4 border-b">Patient</td>
                        <td className="py-2 px-4 border-b">
                            <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full :bg-green-700 :text-green-100"> Approved </span>
                        </td>
                        <td className="py-2 px-4 border-b"> 12 - 01 - 2004</td>
                        <td className="py-2 px-4 border-b">
                            <button
                                className="bg-blue-500 text-white py-1 px-2 rounded mr-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                            >
                                <GrView size={ 25 } />
                            </button>
                            <button
                                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
                            >
                                <CiTrash size={ 25 } />
                            </button>
                        </td>
                    </tr>
                    {/* )
                    } ) } */}
                </tbody>
            </table>
        </div>
        // <div className="mt-4 mx-4">
        //     <div className="w-full overflow-hidden rounded-lg shadow-xs">
        //         <div className="w-full overflow-x-auto">
        //             <table className="w-full">
        //                 <thead className='w-full'>
        //                     <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b :border-gray-700 bg-gray-50 :text-gray-400 :bg-gray-800">
        //                         <th className="px-4 py-3">User</th>
        //                         <th className="px-4 py-3">Role</th>
        //                         <th className="px-4 py-3">Status</th>
        //                         <th className="px-4 py-3">Date</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody className="bg-white divide-y :divide-gray-700 :bg-gray-800">
        //                     {
        //                         users &&
        //                         users.map( ( user, index ) => (
        //                             <tr key={ user._id } className="bg-gray-50 :bg-gray-800 hover:bg-gray-100 :hover:bg-gray-900 text-gray-700 :text-gray-400">
        //                                 <td className="px-4 py-3">
        //                                     <div className="flex items-center text-sm">
        //                                         <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
        //                                             <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
        //                                             <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
        //                                         </div>
        //                                         <div>
        //                                             <p className="font-semibold">{ user.Firstname } { user.Lastname }</p>
        //                                         </div>
        //                                     </div>
        //                                 </td>
        //                                 <td className="px-4 py-3 text-sm">{ user.role }</td>
        //                                 <td className="px-4 py-3 text-xs">
        //                                     <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full :bg-green-700 :text-green-100"> Approved </span>
        //                                 </td>
        //                                 <td className="px-4 py-3 text-sm">{ user.updatedAt }</td>
        //                             </tr>
        //                         ) )
        //                     }
        //                 </tbody>
        //             </table>
        //         </div>
        //         <div className="w-full grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t :border-gray-700 bg-gray-50 sm:grid-cols-9 :text-gray-400 :bg-gray-800">
        //             <span className="flex items-center col-span-3"> Showing 21-30 of 100 </span>
        //             <span className="col-span-2"></span>
        //             <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
        //                 <nav aria-label="Table navigation">
        //                     <ul className="inline-flex items-center">
        //                         <li>
        //                             <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
        //                                 <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
        //                                     <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
        //                                 </svg>
        //                             </button>
        //                         </li>
        //                         <li>
        //                             <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button>
        //                         </li>
        //                         <li>
        //                             <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button>
        //                         </li>
        //                         <li>
        //                             <button className="px-3 py-1 text-white :text-gray-800 transition-colors duration-150 bg-blue-600 :bg-gray-100 border border-r-0 border-blue-600 :border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">3</button>
        //                         </li>
        //                         <li>
        //                             <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button>
        //                         </li>
        //                         <li>
        //                             <span className="px-3 py-1">...</span>
        //                         </li>
        //                         <li>
        //                             <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button>
        //                         </li>
        //                         <li>
        //                             <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button>
        //                         </li>
        //                         <li>
        //                             <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
        //                                 <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
        //                                     <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
        //                                 </svg>
        //                             </button>
        //                         </li>
        //                     </ul>
        //                 </nav>
        //             </span>
        //         </div>
        //     </div>
        // </div>

        /* {
            users &&
            users.map( ( user, index ) => (
                <div key={ user._id } className="w-full flex items-center bg-gray-50 :bg-gray-800 hover:bg-gray-100 :hover:bg-gray-900 text-gray-700 :text-gray-400">
                    <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                                <p className="font-semibold">{ user.Firstname } { user.Lastname }</p>
                            </div>
                        </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{ user.role }</td>
                    <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full :bg-green-700 :text-green-100"> Approved </span>
                    </td>
                    <td className="px-4 py-3 text-sm">{ user.updatedAt }</td>
                </div>
            ) )
        } */



    )
}

export default Users
