import Axios from 'axios'
import React, { useState } from 'react'
// redux
import { connect } from 'react-redux'
// 
import { Link } from 'react-router-dom'
import { changeName } from '../action/changeName'
import MainDashboard from './MainDashboard'
// context
export const PackageContext = React.createContext();

const Login = (props) => {

    //states
    const [details, setDetails] = useState({
        email:"" , password:""
    })
    const [token, setToken] = useState("")
    const [fname, setFname] = useState("")
    const [userid, setUserid] = useState("")
    const [loading, setLoading] = useState("");
    const [image, setImage] = useState("")
    // context data
    const [mission, setMission] = useState({
        token: token,
        fname: "",
        userid: userid,
        image: image,
        loading:""
    })

//functions
        const login =() => {

            const FetchDetails = async () => {
                            try{
                                const data= await Axios.put("https://api.perisync.com/user/get/password",{
                                        "email" : details.email,
                                        "password": details.password
                                        })     
                                        console.log(data);
                                        setToken(data.data?.token);
                                        setFname(data.data?.fname);
                                        setUserid(data.data?.userid);
                                        setImage(data.data?.image?.image);
                                        setLoading(data.status);
                                        setMission({...mission,loading:data.status,fname:data.data?.fname});
                            } catch (e){
                                console.log(e);
                                alert("wrong credentials")
                            } 
                            console.log("2",token);
                            console.log(fname);
                            console.log(userid);
                            console.log(loading);
                            console.log("image:---",image);
                        }; 
                        FetchDetails();
        }




    return (
        <PackageContext.Provider
        value={{
            data:mission,
            isMissionAccepted: () => {
                setMission({...mission,loading:"1"})
            }
           
        }}>
            {mission.loading===200 ? (
                <MainDashboard token={token} fname={fname} userid={userid} image={image}/>
            ):(
                <div className="sign">
                    {/* <PackageContext.Provider
                            value={{
                                data:mission
                               
                            }}
                    >

                    </PackageContext.Provider> */}
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


                            {/* reducer example */}
                            <div>name:{props.myname}</div>
                            <button onClick={() => {props.changeName("muqeem")}}>change it</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            )}
        </PackageContext.Provider>
    )
}


// reducers
const mapStateToProps = (state) => {
    return{
        myname:state.name
    }
}

const mapDispatchToProps = (dispatch)=>{
    
    return{
        changeName:(name) => {dispatch({type:'CHANGE_NAME',  payload:name})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Login);
