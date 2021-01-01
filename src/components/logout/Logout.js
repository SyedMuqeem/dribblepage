import React, { useState } from 'react'
import { Profiler } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { PackageContext } from '../../Screens/Login';

const Logout = ({fname, image}) => {

  const [profile, setProfile] = useState("false")
  if(profile===true)
  return  <Redirect to="/profile"/>
  else
    return (<PackageContext>
        {data =><div className="zindexlogout">
                            <div>
                               {/* <img className="profilecicrle2" src={`data:image/jpeg;base64,${image}`}  alt="pic" width="100%"/> */}
                              </div>
                            <div>{fname}{data.fname}</div>
                            <hr/>
                            <div onClick={() => (setProfile(true))}>profile</div>
                            <div className="smalllogout1">
                              <Link 
                                    onClick={data.isMissionAccepted}
                                  //  onClick={() =>window.location.reload(false) }
                              ><button className="smalllogout">logout</button>
                              </Link>  
                            </div>
                            {data.loading}{console.log("context data for login",data.data.loading)}
                        </div>}
                        </PackageContext>
    )
}

export default Logout;
