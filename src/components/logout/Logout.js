import React from 'react'
import { Link } from 'react-router-dom';

const Logout = ({fname, image}) => {
    return (
        <div className="zindexlogout">
                            <div> <img className="profilecicrle2" src={`data:image/jpeg;base64,${image}`}  alt="pic" width="100%"/></div>
                            <div>{fname}</div>
                            <div className="smalllogout1">
                              <Link  onClick={() => window.location.reload(false)}><button className="smalllogout">logout</button>
                              </Link>  
                            </div>
                            
                        </div>
    )
}

export default Logout;
