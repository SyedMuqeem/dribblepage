import React from 'react'
import Calender from '../components/Calender'
import Sidenav from '../components/Sidenav'


const MainDashboard = ({fname,token,userid,image}) => {
    return (
        <>
        <Sidenav    token={token} userid={userid} fname={fname} image={image}/>
        <Calender   token={token} userid={userid} fname={fname} image={image}/>
        </>
    )
}

export default MainDashboard;
