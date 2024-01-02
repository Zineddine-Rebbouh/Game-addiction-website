import React from 'react'
import Sidenavigationbar from './sidenavigationbar';
import Navigationbar from './navigationbar'

const AdminDashboard = ( { passedComponent: Component } ) => {
    return (

        <div className="flex flex-col flex-shrink-0 w-full min-h-screen">

            <Navigationbar />

            <div className=' w-full flex'>
                <Sidenavigationbar />
                { Component && <Component /> }
            </div>

        </div >



    )
}

export default AdminDashboard;
