import React from 'react';
import 'tachyons';

const Card = (props) => {

	return (
		
		<div className= 'bg-light-red dib br3 pa3 ma2 grow bw-2 shadow-5'>
			<img alt = 'robot dp' src ={`https://robohash.org/${props.id}?size=250x250`}/>
			<div className = 'bg-animate bg-light-red hover-bg-light-blue black'>
				<h2 className = 'tc'>{props.name}</h2>
				<p className = 'tc'>{props.username}</p>
				<p className = 'tc'>{props.email}</p>
			</div>
		</div>
	
	
	);
}

export default Card;