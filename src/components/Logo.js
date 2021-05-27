import React from 'react';
import Tilt from 'react-tilt';
import brain from '../assets/brain.png';

const Logo=()=>{
	return(
	<div className="ma3 mt0">
	<Tilt className="Tilt tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
	 <div className="Tilt-inner"> <img src={brain} alt='logo'/> </div>
	</Tilt>
		</div>
		);
}
export default Logo;