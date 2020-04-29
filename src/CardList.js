import React from 'react';
import Card from './Card';
import { robots } from './robots'

const CardList = ({robots}) => {

	const cardComponent = robots.map(robots =>{

		return <Card id = {robots.id} 
		username = {robots.username} 
		name={robots.name} 
		email = {robots.email} />
	})

return (

	<div>
			{cardComponent}
	</div>
);
	}

export default CardList;
