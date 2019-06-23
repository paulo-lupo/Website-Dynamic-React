import React, { Component } from 'react'
// import Drawer from './Drawer';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops'

export class Header extends Component {
    render() {
        return (
            <Spring
                from={{opacity: 0, marginTop: +500}}
                to={{opacity: 1, marginTop: 0}}
            >
            { props => (
                <div style={props}>       
                    <div>
                        <header className="navbar">
                            <div className="container-width" >
                                <div  className="logo-container">
                                <Link to='/' href="https://www.paulolupo.live">
                                    <div id="logo-button" className="logo">
                                    </div>
                                </Link>
                                </div>
                                
                                <a href="https://www.paulolupo.live/resume/">
                                <Link to='/Resume' id="contactMe" className="menu-item">Resume
                                </Link>
                                </a>
                                <a href="https://www.paulolupo.live/links/">
                                <Link to='/Links' id="links" className="menu-item">Links
                                </Link>
                                </a>
                                <a href="https://www.paulolupo.live/projects/">
                                <Link to='/Projects'id="projects" className="menu-item">Projects
                                </Link>
                                </a>
                            </div>
                            {/* <div className='draw'><Drawer className='draw'/></div> */}
                        </header>
                    </div>
                </div>
            )}
            </Spring>
        )
    }
}

export default Header
