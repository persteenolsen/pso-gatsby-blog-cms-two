import React from "react"
import { Link } from 'gatsby'
import { useSiteMetadata } from "../hooks/use-site-metadata"

import melisboa from "/static/images-pages/miradouro-lisboa.jpg"

import {
  
  headerNavLinkText,
  imageMeLisboa,
  container,
  heading
  } from '../components/layout.module.css'
  
 
// Webpack will resolve the .js extension and it is optional to use the .js extension
import Header from '../components/header';
import Menu from '../components/menu';
import Bottom from '../components/bottom';

const MyInfo = () => {
	
    const { title } = useSiteMetadata()
	
    return (
	
        <div className={container}>
		    
            <Header />			
			<Menu />				
			
			   <title>About me</title>
			
			   <h2 className={heading}>{title}</h2>
				
                <h4>Per Steen Olsen</h4>				
                <p>Web Developer</p>
		        <p>Denmark</p>
                <p><Link className={headerNavLinkText} to="https://dk.linkedin.com/in/per-steen-olsen">My Linkedin</Link></p> 
			   <p><a href="https://dk.linkedin.com/in/per-steen-olsen" target="_top">Linkedin</a></p>
			   <p>In my spare time I practise running, and I have been a member of a running club for many years</p>
               
			   <p>I have been to Portugal many times and passed excams in portuguese at a language school in Lisbon</p>
                              
			   <img className={imageMeLisboa} src={melisboa} alt="Me in Lisbon" />
               
                     <p>Further information about me can be found by the Categories</p>
			   			   		   
		    <Bottom />
			 
        </div>
    )
}

export default MyInfo
