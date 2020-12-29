import axios from "axios";
import React, { useEffect, useState } from "react";



import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";



const MonthViews = ({ userid,token}) => {
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
        { dataField: "jan", text: "Jan consuption"},
        { dataField: "feb", text: "Feb consuption"},
        { dataField: "mar", text: "Mar consuption"},
        { dataField: "apr", text: "Apr consuption"},
        { dataField: "may", text: "May consuption"},
        { dataField: "jun", text: "Jun consuption"},
        { dataField: "jul", text: "Jul consuption"},
        { dataField: "aug", text: "Aug consuption"},
        { dataField: "sep", text: "Sep consuption"},
        { dataField: "oct", text: "Oct consuption"},
        { dataField: "nov", text: "Nov consuption"},
        { dataField: "dec", text: "Dec consuption"},
        // { dataField: "sd", text:"Index"}
    ]

    useEffect(() => {getPlayerData()},[]);

    return(
        <div className="dashboard2 monthly">
            {loading ? (
                <BootstrapTable 
                keyField="name"
                data={players}
                columns={column}
                // pagination={paginationFactory()}    
            />) :(
                <div className="spinner"><ReactBootStrap.Spinner animation="border"/></div>
            )}
            
        </div>
    )
}

export default MonthViews;