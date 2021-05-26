import React from 'react';
import Title from 'react-vanilla-tilt';

const Logo=()=>{
	return(
		<div className="ma3 mt0">
			<Title options={{ scale: 2, max: 25 }} style={{height:150,width:150}}>
			  <div className="Title-inner br2 shadow-2 tc">
			    a
			  </div>
			</Title>
		</div>
		);
}
export default Logo;