import React from 'react';
import styled from '@emotion/styled'
import logo from '../icon-original.jpg'
import { SwitchDarkMode } from '../helpers'

const Imagen = styled.img` 
  width: 40px;
  border-radius: 20px;
`;
const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg fixed-top" id="mainNav"> 
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <Imagen className="img-fluid" src={logo} alt="Text Miracles"/>
                    <span className="titleSite">Text Miracles</span>
                </a>
                <button className="switch" id="switch" onClick={ () => SwitchDarkMode()}>
					<span><i className="fas fa-sun"></i></span>
					<span><i className="fas fa-moon"></i></span>
				</button>
            </div>
        </nav>
     );
}
 
export default Header;