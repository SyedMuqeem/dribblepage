import Axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MainDashboard from './MainDashboard'

const Login = () => {

    //states
    const [details, setDetails] = useState({
        email:"" , password:""
    })
    const [token, setToken] = useState("")
    const [fname, setFname] = useState("")
    const [userid, setUserid] = useState("")
    const [loading, setLoading] = useState("");

//functions
        const login =() => {


            const FetchDetails = async () => {
                            try{
                                const data= await Axios.put("http://ec2-3-7-168-72.ap-south-1.compute.amazonaws.com:15010/user/get/password",{
                                        "email" : details.email,
                                        "password": details.password
                                        })     
                                        console.log(data);
                                        setToken(data.data?.token);
                                        setFname(data.data?.fname);
                                        setUserid(data.data?.userid);
                                        setLoading(data.status)
                            } catch (e){
                                console.log(e);
                                alert("wrong credentials")
                            } 
                            console.log("2",token);
                            console.log(fname);
                            console.log(userid);
                            console.log(loading);
                        }; 
                        FetchDetails();
        }






    return (
        <>
            {loading===200 ? (
                <MainDashboard token={token} fname={fname} userid={userid}/>
            ):(
                <div className="sign">
                <div className="loginimage"><img src="dribbleimage.png" alt="pic" height="100%"/></div>
                <div className="loginmain">
                    <div className="loginlink">not a member<Link>Signup now</Link></div>
                    <div className="loginform">
                        <div>
                            <h3>Sign in to Dribbble</h3>
                            <div>
                            <button className="loginGoogleButton">Sign in with Google</button>
                            <button className="twitter">twi</button>
                            </div>
                            <hr className="divider"></hr>
                            <div><b>Email</b></div>
                            <input className="logintype" type="text" placeholder="joy@google.com"
                                    onChange={e => setDetails({...details,email:e.target.value})}
                            ></input>
                            <div><b>Password</b><span className="loginforget"><Link>forget password</Link></span></div>
                            <input className="logintype" type="password" placeholder="pass"
                                onChange={e => setDetails({...details,password:e.target.value})}
                            ></input>
                            <div><button className="loginButton"
                                onClick={() => login() }
                            >Sign in</button></div>
                        </div>
                        
                    </div>
                </div>
            </div>
            )}
        </>
    )
}

export default Login;
