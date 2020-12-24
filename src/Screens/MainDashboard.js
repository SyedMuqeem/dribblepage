import React from 'react'
import Calender from '../components/Calender'
import Sidenav from '../components/Sidenav'

const MainDashboard = ({fname,token,userid}) => {
    return (
        <>
        <Sidenav   token={token} userid={userid}/>
        <Calender   token={token} userid={userid} fname={fname}/>
        </>
    )
}

export default MainDashboard;
