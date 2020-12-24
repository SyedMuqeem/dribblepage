import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Calender = ({token,userid,fname}) => {


   const [fname1, setFname1] = useState(fname)
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);
    const getPlayerData = async () => {
        console.log(token);
        console.log(userid);
        try{
            const data = await axios.put(
                " http://ec2-3-7-168-72.ap-south-1.compute.amazonaws.com:15010/admin/history/tenants",{
                    "token" : token,
                    "userid": userid
                    }
            );
            console.log(data.data);
            setPlayers(data.data);
            setLoading(true)
        } catch (e){
            console.log("muqeem",e);
        }
        
    }

    const column = [
        { dataField: "tenantID", text: "Name or ID"},
        { dataField: "dec", text: "december consuption"},
        // { dataField: "sd", text:"Index"}
    ]

    useEffect(() => {getPlayerData()},[]);










    return (
        <div className="calendermain">
            <div className="calender1"><h2>Attendance calender</h2></div>
            <div className="calender2">
                <div className="profilecard">
                    <img className="profilecicrle" src="muqeem.jpg" alt="pic" width="100%"/>
                    <div className="username">{fname1}</div>
                </div>
                <div className="tooglerow">
                    <div>Current Session</div>
                    <div className="toogle">
                        <div className="tooglecircle"></div>
                    </div>
                    <div><b>0hrs 00min</b></div>
                    <div className="outsidework">Outside working Hours</div>
                </div>
            </div>
            <div className="calender3">3<hr/>4</div>
            <div className="calender4">4<hr/>5</div>
            <div className="calender5">
                <div>Recent Screenshot / video </div>
                <div className="calenderdates">
                    <div className="samplecomponent">January<hr/>water consumed<br/>by </div>
                    <div className="samplecomponent">Feb<hr/></div>
                    <div className="samplecomponent">Mar<hr/></div>
                    <div className="samplecomponent">April<hr/></div>
                    <div className="samplecomponent">May<hr/></div>
                    <div className="samplecomponent">June<hr/></div>
                    <div className="samplecomponent">July<hr/></div>
                    <div className="samplecomponent">August<hr/></div>
                    <div className="samplecomponent">Sep<hr/></div>
                    <div className="samplecomponent">October<hr/></div>
                    <div className="samplecomponent">November<hr/></div>
                    <div className="samplecomponent">December<hr/></div>
                </div>
            </div>
        </div>
    )
}

export default Calender;
