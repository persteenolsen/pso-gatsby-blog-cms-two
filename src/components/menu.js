import React from "react"
import { Link } from 'gatsby'

import {
	navLinks,
	navLinkItem,
	navLinkText
} from '../components/layout.module.css'


export default function Menu() {
	return (

		<div>
		   
			<nav>
				<ul className={navLinks}>
                    <li className={navLinkItem}>
					Explore the Projects by {">>>"}
					</li>
					
					<li className={navLinkItem}>
						<Link activeStyle={{ fontWeight: "bold" }} className={navLinkText} to="/">Categories</Link> |
					</li>
                    					
					<li className={navLinkItem}>
						<Link activeStyle={{ fontWeight: "bold" }} className={navLinkText} to="/searchposts">Searching</Link> |
					</li>

					<li className={navLinkItem}>
						<Link activeStyle={{ fontWeight: "bold" }} className={navLinkText} to="/blog">Pagination</Link> |
					</li>
					
					<li className={navLinkItem}>
						<Link activeStyle={{ fontWeight: "bold" }} className={navLinkText} to="/listtags">Tags</Link> 
					</li>
                    
                    
					{/* 05-06-2025: Dont need the List of Posts anymore */} 
					{/*<li className={navLinkItem}>
						<Link activeStyle={{ fontWeight: "bold" }} className={navLinkText} to="/listposts">List</Link>
					</li> */} 


				</ul>
			</nav>

		</div>

	);
}


