import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import Submenu from './Submenu';
import Axios from 'axios'
import { SidebarData } from './SidebarData';

const Nav = styled.div`
        background: #633c70;
        height:80px
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
`;
const NavIcon = styled(Link)`
        margin-left: 2rem;
        font-size: 2rem;
        height:80px;


`;
const NavIcon2 = styled(Link)`
        margin-left: 2rem;
        font-size: 1.5rem;
        height:80px;
        float:right;
        padding-right:20px;


`;

const SidebarNav = styled.nav`
    background: #633c70;
    width:250px;
    height: 100vh;
    display: flex;
    justify-content:center;
    position: fixed;
    top:0;
    left: ${({sidebar})=> (sidebar ? '0': '-100%')};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width:100%;
`;


   
const Sidenav = ({token,userid}) => {

    const [menuDetails, setMenuDetails] = useState([])
    const [sidebar, setSidebar] = useState(true)
    const showSidebar =() => setSidebar(!sidebar)

    const hitapi =() => {
    const FetchDetails = async () => {
        try{
            const data= await Axios.put("http://ec2-3-7-168-72.ap-south-1.compute.amazonaws.com:15010/show/menu",{
                "token": token,
                "userid":userid,
                "type":"WEB"
                    })     
                    console.log(data.data);
                    setMenuDetails(data.data)
                    
        } catch (e){
            console.log(e);
            alert("wrong credentials")
        } 
        console.log("2",);
    }; 
   
    FetchDetails();
}
useEffect(()=>{
    
    hitapi();
},[])


    return (
        <>
            
            <Nav>
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar}/>
                    <NavIcon2>hee</NavIcon2>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                    <SidebarWrap >
                        <NavIcon to="#">
                            <FaIcons.FaBars onClick={showSidebar}/>
                        </NavIcon>
                        {menuDetails.map((item,index) => {
                            return<Submenu item={item} key={index}/>
                        })}
                    </SidebarWrap>
            </SidebarNav>
            


        </>
    )
}

export default Sidenav;
