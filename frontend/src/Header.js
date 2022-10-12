import React from 'react'
import "./Header.css"
import {BrowserRouter as Router, Switch, Route, Routes,Link} from "react-router-dom";
function Header() {
  return (
    <div>
        <div className='headerdiv'>
        <p><strong>Gro</strong>cerry</p>
        <div className='inputcart'>
           <div className='inputdiv'><input type="text" placeholder='search for grocceries' />
          <Link to={'/cart'}> 
          <img className='cartimage' src="data:image/png;base64,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" alt="" />
          </Link></div> 
            
        </div>
        </div>
    </div>
  )
}

export default Header