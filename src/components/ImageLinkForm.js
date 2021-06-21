import React from 'react';

const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
	return(
		<div className="ma3 mt0">
			<p className="f3">
			{'This Magic Brain will detect faces in your picture. Give it a try.'}
			</p>
			<div className="center">
			<div className=" form center glow pa4 br3 shadow-3">
				<input type="text" className="f4 pa2 w-70 center" onChange={onInputChange}/ >
				<button 
				className="w-30 grow f4 link ph3 bg-light-purple pv2 dib white but"
					onClick={onButtonSubmit}
				>Detect</button>
			</div>	
			</div>	
		</div>
		);
}
export default ImageLinkForm;