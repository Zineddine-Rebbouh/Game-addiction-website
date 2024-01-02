import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom'
import aizen from '../../../../../assets/images/aizen.jpg'
import doctor from '../../../../../assets/icons/doctor.png'
import group from '../../../../../assets/icons/group.png'
import patient from '../../../../../assets/icons/patient.png'

const Overview = () => {

    const [ users, setUsers ] = useState( [] );
    const token = useMemo( () => localStorage.getItem( 'jwtToken' ), [] ); // Memoize token
    const [ taskText, setTaskText ] = useState( '' );
    const [ tasks, setTasks ] = useState( [] );
    const [ Notifications, setNotifications ] = useState( [] );

    // const handleSubmit = useCallback( async ( status ) => {
    //     await fetch( `http://localhost:3000/task/addtask`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${ token }`
    //         },
    //         body: JSON.stringify( {
    //             userId: user.userId,
    //             status: status,
    //             description: taskText
    //         } )
    //     } );
    //     window.location.reload()
    // }, [ taskText ] );



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
    //                 setUsers( usersData.users ); // Assuming the response contains a property named "users"
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

    // useEffect( () => {
    //     const getNotifcaitons = async () => {
    //         try
    //         {
    //             const res = await fetch( `http://localhost:3000/notifications/getNotifications`, {
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
    //                 setNotifications( usersData.notifications );
    //                 console.log( usersData ); // Assuming the response contains a property named "users"
    //             } else
    //             {
    //                 console.error( 'Failed to get notifcations' );
    //             }
    //         } catch ( error )
    //         {
    //             console.error( 'Error:', error );
    //         }
    //     };

    //     getNotifcaitons()

    // }, [] )


    // useEffect( () => {
    //     const fetchTasks = async () => {
    //         try
    //         {
    //             const res = await fetch( `http://localhost:3000/task/tasks/${ user.userId }`, {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `Bearer ${ token }`
    //                 },
    //             } );

    //             if ( res.ok )
    //             {
    //                 const tasksData = await res.json();
    //                 setTasks( tasksData.Tasks );
    //             } else
    //             {
    //                 console.error( 'Failed to fetch tasks' );
    //             }
    //         } catch ( error )
    //         {
    //             console.error( 'Error:', error );
    //         }
    //     };

    //     // Fetch tasks only if the user is logged in
    //     if ( user )
    //     {
    //         fetchTasks();
    //     }
    // }, [ user, token ] );

    // const handleChange = useCallback( ( e ) => {
    //     setTaskText( e.target.value );
    // }, [] );


    return (
        <div className="h-[160vh] w-full">
            <div className="grid grid-cols-1 mx-2 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4 w-full">
                <div className="bg-blue-500 :bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 :border-gray-600 text-white font-medium group">
                    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                        {/* <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 :text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> */ }
                        <img src={ group } className='h-10 w-10' alt="" />
                    </div>
                    <div className="text-right">
                        <p className="text-2xl">568</p>
                        <p>Total Users</p>
                    </div>
                </div>
                <div className="bg-blue-500 :bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 :border-gray-600 text-white font-medium group">
                    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                        <img src={ doctor } className='h-10 w-10' alt="" />
                        {/* <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 :text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg> */ }
                    </div>
                    <div className="text-right">
                        <p className="text-2xl">510</p>
                        <p>Total Patients</p>
                    </div>
                </div>
                <div className="bg-blue-500 :bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 :border-gray-600 text-white font-medium group">
                    <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                        <img src={ patient } className='h-10 w-10' alt="" />
                        {/* <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 :text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */ }
                    </div>
                    <div className="text-right">
                        <p className="text-2xl">58</p>
                        <p>Total Doctors</p>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">

                <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 :bg-gray-800 w-full shadow-lg rounded">
                    <div className="rounded-t mb-0 px-0 border-0">
                        <div className="flex flex-wrap items-center px-4 py-2">
                            <div className="relative w-full max-w-full flex-grow flex-1">
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center w-full bg-transparent border-collapse">
                                <thead>
                                    <tr>
                                        <th className="px-4 bg-gray-100 :bg-gray-600 text-gray-500 :text-gray-100 align-middle border border-solid border-gray-200 :border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Symptoms</th>
                                        <th className="px-4 bg-gray-100 :bg-gray-600 text-gray-500 :text-gray-100 align-middle border border-solid border-gray-200 :border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Total</th>
                                        <th className="px-4 bg-gray-100 :bg-gray-600 text-gray-500 :text-gray-100 align-middle border border-solid border-gray-200 :border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-gray-700 :text-gray-100">
                                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">Addiction</th>
                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">5,480</td>
                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2">70%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                                        <div style={ { width: '70%' } } className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 :text-gray-100">
                                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">Insomnia</th>
                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">3,380</td>
                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2">40%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                                        <div style={ { width: '40%' } }
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 :text-gray-100">
                                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">Anxiety</th>
                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">4,105</td>
                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2">45%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                                        <div style={ { width: '45%' } }
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 :text-gray-100">
                                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">Depression</th>
                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">4,985</td>
                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2">60%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                                        <div style={ { width: '60%' } }
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="text-gray-700 :text-gray-100">
                                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">Excessive Sleepiness</th>
                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">2,250</td>
                                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                                            <div className="flex items-center">
                                                <span className="mr-2">30%</span>
                                                <div className="relative w-full">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                                        <div style={ { width: '30%' } }
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col min-w-0 break-words bg-gray-50 :bg-gray-800 w-full shadow-lg rounded">
                    <div className="rounded-t mb-0 px-0 border-0">
                        <div className="flex flex-wrap items-center px-4 py-2">
                            <div className="relative w-full max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-gray-900 :text-gray-50">Recent Activities</h3>
                            </div>
                            <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                                <Link to={ `/Dashboard/Notification` } className="bg-blue-500 :bg-gray-100 text-white active:bg-blue-600 :text-gray-800 :active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</Link>
                            </div>
                        </div>
                        <div className="block w-full">
                            <div className="px-4 bg-gray-100 :bg-gray-600 text-gray-500 :text-gray-100 align-middle border border-solid border-gray-200 :border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Today
                            </div>
                            <ul className="my-1">
                                <li className="flex px-4">
                                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                                        <svg className="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36"><path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path></svg>
                                    </div>
                                    <div className="flex-grow flex items-center border-b border-gray-100 :border-gray-400 text-sm text-gray-600 :text-gray-100 py-2">
                                        <div className="flex-grow flex justify-between items-center">
                                            <div className="self-center">
                                                <Link className="font-medium text-gray-800 hover:text-gray-900 :text-gray-50 :hover:text-gray-100" href="#0" style={ { outline: 'none' } }> Mounder created account </Link>
                                            </div>
                                            <div className="flex-shrink-0 ml-2">
                                                <Link className="flex items-center font-medium text-blue-500 hover:text-blue-600 :text-blue-400 :hover:text-blue-500" href="#0" style={ { outline: 'none' } }>
                                                    View<span><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="transform transition-transform duration-500 ease-in-out"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex px-4">
                                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                                        <svg className="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36"><path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path></svg>
                                    </div>
                                    <div className="flex-grow flex items-center border-b border-gray-100 :border-gray-400 text-sm text-gray-600 :text-gray-100 py-2">
                                        <div className="flex-grow flex justify-between items-center">
                                            <div className="self-center">
                                                <Link className="font-medium text-gray-800 hover:text-gray-900 :text-gray-50 :hover:text-gray-100" href="#0" style={ { outline: 'none' } }> Mounder created account </Link>
                                            </div>
                                            <div className="flex-shrink-0 ml-2">
                                                <Link className="flex items-center font-medium text-blue-500 hover:text-blue-600 :text-blue-400 :hover:text-blue-500" href="#0" style={ { outline: 'none' } }>
                                                    View<span><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="transform transition-transform duration-500 ease-in-out"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex px-4">
                                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                                        <svg className="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36"><path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path></svg>
                                    </div>
                                    <div className="flex-grow flex items-center border-b border-gray-100 :border-gray-400 text-sm text-gray-600 :text-gray-100 py-2">
                                        <div className="flex-grow flex justify-between items-center">
                                            <div className="self-center">
                                                <Link className="font-medium text-gray-800 hover:text-gray-900 :text-gray-50 :hover:text-gray-100" href="#0" style={ { outline: 'none' } }> Mounder created account </Link>
                                            </div>
                                            <div className="flex-shrink-0 ml-2">
                                                <Link className="flex items-center font-medium text-blue-500 hover:text-blue-600 :text-blue-400 :hover:text-blue-500" href="#0" style={ { outline: 'none' } }>
                                                    View<span><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="transform transition-transform duration-500 ease-in-out"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="flex px-4">
                                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                                        <svg className="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36"><path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path></svg>
                                    </div>
                                    <div className="flex-grow flex items-center border-b border-gray-100 :border-gray-400 text-sm text-gray-600 :text-gray-100 py-2">
                                        <div className="flex-grow flex justify-between items-center">
                                            <div className="self-center">
                                                <Link className="font-medium text-gray-800 hover:text-gray-900 :text-gray-50 :hover:text-gray-100" href="#0" style={ { outline: 'none' } }> Mounder Created account </Link>
                                            </div>
                                            <div className="flex-shrink-0 ml-2">
                                                <Link className="flex items-center font-medium text-blue-500 hover:text-blue-600 :text-blue-400 :hover:text-blue-500" href="#0" style={ { outline: 'none' } }>
                                                    View<span><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="transform transition-transform duration-500 ease-in-out"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-black :text-white">
                <div className="md:col-span-2 xl:col-span-3">
                    <h3 className="text-lg font-semibold">Task summaries of recent sprints</h3>
                </div>
                <div className="md:col-span-2 xl:col-span-1">
                    <div className="rounded bg-gray-200 :bg-gray-800 p-3">
                        <div className="flex justify-between py-1 text-black :text-white">
                            <h3 className="text-sm font-semibold">Tasks in TO DO</h3>
                            <svg className="h-4 fill-current text-gray-600 :text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
                        </div>
                        <div className="text-sm text-black :text-gray-50 mt-2">
                            {
                                tasks && Array.isArray( tasks ) &&
                                tasks.map( ( task, index ) => {
                                    if ( task.status === 'TODO' )
                                    {
                                        return (
                                            <div className="bg-white :bg-gray-600 hover:bg-gray-50 :hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 :border-gray-900 cursor-pointer" key={ index }>
                                                { task.description }
                                            </div>
                                        );
                                    }
                                    return null; // If status is not 'TODO', return null (or you can omit this line)
                                } )
                            }

                            <form
                                // onSubmit={ ( e ) => {
                                //     e.preventDefault();
                                //     handleSubmit( 'TODO' );
                                // } }
                                className='flex items-center justify-center gap-2 my-2'>
                                <input
                                    name='taskTextTODO'
                                    // onChange={ handleChange }
                                    className="w-full rounded-lg text-lg px-2 py-2 text-gray-600 :text-gray-400"
                                    placeholder='Add a card'
                                />
                                <button type="submit" className='rounded-md bg-indigo-600 px-2 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"'>Add</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="rounded bg-gray-200 :bg-gray-800 p-3">
                        <div className="flex justify-between py-1 text-black :text-white">
                            <h3 className="text-sm font-semibold">Tasks in DEVELOPMENT</h3>
                            <svg className="h-4 fill-current text-gray-600 :text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
                        </div>
                        <div className="text-sm text-black :text-gray-50 mt-2">
                            {
                                tasks && Array.isArray( tasks ) &&
                                tasks.map( ( task, index ) => {
                                    if ( task.status === 'Developement' )
                                    {
                                        return (
                                            <div className="bg-white :bg-gray-600 hover:bg-gray-50 :hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 :border-gray-900 cursor-pointer" key={ index }>
                                                { task.description }
                                            </div>
                                        );
                                    }
                                    return null; // If status is not 'TODO', return null (or you can omit this line)
                                } )
                            }

                            <form
                                // onSubmit={ ( e ) => {
                                //     e.preventDefault();
                                //     handleSubmit( 'Developement' );
                                // } }
                                className='flex items-center justify-center gap-4  my-2'>
                                <input
                                    name='taskTextDEV'
                                    // onChange={ handleChange }
                                    className="w-full rounded-lg text-lg px-2 py-2 text-gray-600 :text-gray-400"
                                    placeholder='Add a card'
                                />
                                <button type="submit" className='rounded-md bg-indigo-600 px-2 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"'>Add</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="rounded bg-gray-200 :bg-gray-800 p-3">
                        <div className="flex justify-between py-1 text-black :text-white">
                            <h3 className="text-sm font-semibold">Tasks in QA</h3>
                            <svg className="h-4 fill-current text-gray-600 :text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" /></svg>
                        </div>
                        <div className="text-sm text-black :text-gray-50 mt-2">
                            {
                                tasks && Array.isArray( tasks ) &&
                                tasks.map( ( task, index ) => {
                                    if ( task.status === 'QA' )
                                    {
                                        return (
                                            <div className="bg-white :bg-gray-600 hover:bg-gray-50 :hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 :border-gray-900 cursor-pointer" key={ index }>
                                                { task.description }
                                            </div>
                                        );
                                    }
                                    return null; // If status is not 'TODO', return null (or you can omit this line)
                                } )
                            }

                            <form
                                // onSubmit={ ( e ) => {
                                //     e.preventDefault();
                                //     handleSubmit( 'QA' );
                                // } } 
                                className='flex items-center justify-center gap-4  my-2'>
                                <input
                                    name='taskTextQA'
                                    // onChange={ handleChange }
                                    className="w-full rounded-lg text-lg px-2 py-2 text-gray-600 :text-gray-400"
                                    placeholder='Add a card'
                                />
                                <button type="submit" className='rounded-md bg-indigo-600 px-2 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"'>Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 mx-4">
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b :border-gray-700 bg-gray-50 :text-gray-400 :bg-gray-800">
                                    <th className="px-4 py-3">User</th>
                                    <th className="px-4 py-3">Role</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y :divide-gray-700 :bg-gray-800">
                                {/* {
                                    users &&
                                    users.map( ( user, index ) => {
                                        let userProfile = user?.photo?.replace( /\\/g, "/" );
                                        userProfile = "http://localhost:3000/" + userProfile;
                                        if ( user.role === 'Admin' )
                                        {
                                            return null;
                                        }
                                        return ( */}
                                <tr className="bg-gray-50 :bg-gray-800 hover:bg-gray-100 :hover:bg-gray-900 text-gray-700 :text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-md">
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full" src={ aizen } alt="" loading="lazy" />
                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-md">Mohamed salah</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-md">medcin</td>
                                    <td className="px-4 py-3 text-md">
                                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full :bg-green-700 :text-green-100"> Approved </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm"> 22 - 07 - 2004  </td>
                                </tr>
                                <tr className="bg-gray-50 :bg-gray-800 hover:bg-gray-100 :hover:bg-gray-900 text-gray-700 :text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-md">
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full" src={ aizen } alt="" loading="lazy" />
                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-md">Riyad mahrez</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-md">patient</td>
                                    <td className="px-4 py-3 text-md">
                                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full :bg-green-700 :text-green-100"> Approved </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm"> 12 - 07 - 2004  </td>
                                </tr>
                                <tr className="bg-gray-50 :bg-gray-800 hover:bg-gray-100 :hover:bg-gray-900 text-gray-700 :text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-md">
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img className="object-cover w-full h-full rounded-full" src={ aizen } alt="" loading="lazy" />
                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-md">Mortada maazi</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-md">patient</td>
                                    <td className="px-4 py-3 text-md">
                                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full :bg-green-700 :text-green-100"> Approved </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm"> 12 - 06 - 2003  </td>
                                </tr>
                                {/* );
                                    } )
                                } */}

                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center justify-end px-4 py-3 font-semibold bg-gray-50">
                        <Link to={ '/Dashboard/users' } className='text-center rounded-lg bg-indigo-600 px-3 py-2 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"'> Show more </Link>
                    </div>
                </div>
            </div>

            <div className="mt-8 mx-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 mr-2 bg-gray-100 :bg-gray-800 sm:rounded-lg">
                        <h1 className="text-4xl sm:text-5xl text-gray-800 :text-white font-extrabold tracking-tight">Get in touch</h1>
                        <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 :text-gray-400 mt-2">Fill in the form to submit any query</p>

                        <div className="flex items-center mt-8 text-gray-600 :text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">Dhaka, Street, State, Postal Code</div>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600 :text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">+213 0562143510</div>
                        </div>

                        <div className="flex items-center mt-4 text-gray-600 :text-gray-400">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">mkrym99999@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Overview
