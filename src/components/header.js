import React from "react"
import { useEffect, Fragment } from 'react'
import { Link } from 'gatsby'
import me from "/static/images-components/persteenolsen.jpg" 
//import {Helmet} from "react-helmet"

import {
  imageMe,
  headerNavLinks,
  headerNavLinkItem,
  headerNavLinkText,
  containerHeader
} from '../components/layout.module.css'

export default function Header() {
	
	
  useEffect(() => {

    if (window.netlifyIdentity) {
		//alert("UseEffect testing in Header ..." );
        window.netlifyIdentity.on('init', (user) => {
		//alert("UseEffect is getting called in Header ..." );
        if (!user) {
            window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/#/collections/blog/'
          })
        }
      })
    }
  }, [])
   
   return (
       
      <div className={containerHeader}>
	        
             <Fragment>
             <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
             </Fragment>
				
	  		 <ul className={headerNavLinks}>
				
				<li className={headerNavLinkItem}>
			         <Link className={headerNavLinkText} to="/"> 
					   <img className={imageMe} src={me} alt="Me" />
					 </Link>
				</li>
				
				<li className={headerNavLinkItem}>
				    <Link className={headerNavLinkText} to="/myinfo">Per Steen Olsen</Link>
				</li>
				
			</ul>
				
      </div>
   
  );
}


