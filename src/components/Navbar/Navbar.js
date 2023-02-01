import React  from 'react'

import { NavLink, Link} from 'react-router-dom'
import '../../App.scss'

export default function Navbar(props) {


	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
			<div className="container">
			<Link href="/" passHref data-testid="Header-logo-link">
        <div className="flex w-14 h-7 relative flex-shrink-0 m-auto pl-16 cursor-pointer">
		<img
          alt=""
       
          src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png"
          width="150"
          height="150"
          className="d-inline-block align-top"
        />{' '} 
        </div>
      </Link>
		
	 <Link href="/" passHref data-testid="Header-heading-link" className="navbar-brand fs-3 ubuntu">
        <div className="flex-shrink pl-2 cursor-pointer">
          <h1
            className="hidden md:inline-flex md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 dark:text-gray-100"
            data-testid="Header-heading"
          >
            The <span className="text-blue-600 dark:text-blue-300">Rick</span>{" "}
            <span className="text-green-600 dark:text-green-300">&</span>{" "}
            <span className="text-yellow-600 dark:text-yellow-300">Morty</span>{" "}
            
          </h1>
        </div>
      </Link>
	  
				
				<style jsx>{`
					button[aria-expanded='false'] > .close {
						display: none;
					}
					button[aria-expanded='true'] > .open {
						display: none;
					}
				`}</style>
				<button
					className="navbar-toggler border-0"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="fas fa-bars open text-dark"></span>
					<span className="fas fa-times close text-dark"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
					<div className="navbar-nav fs-5">
					 
						<NavLink to="/episodes" className="nav-link">
							Episode
						</NavLink>
						
						<NavLink to="/" className="nav-link">
							Characters
						</NavLink>
						<NavLink activeClassName="active" className="nav-link" to="/location">
							Location
						</NavLink>
					</div>
				</div>
				<div className="flex-grow"></div>
	
			</div>
			

		</nav>
  );
}



