import React from 'react'
import Sidenavigationbar from '../../main/DoctorDashboard/Sidebar';
import Navigationbar from '../DoctorDashboard/navigation'

const DoctorDashboard = ( { passedComponent: Component } ) => {
    return (

        <div className="h-screen flex flex-shrink-0 w-full bg-gray-100">
            <Sidenavigationbar />
            <div className='flex flex-col w-full h-screen border-gray-200 mx-5'>
                <Navigationbar />
                { Component && <Component /> }
            </div>

        </div >



    )
}

export default DoctorDashboard;
