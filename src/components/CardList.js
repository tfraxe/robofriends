import React from 'react';
import Card from './Card';
const CardList = ( { robots } ) => {

	const cardComponent = robots.map( (robot, index) => <Card key = {index} id={index} name={robot.name} username={robot.username} email={robot.email}/>)

	return (
		<div>
			{ cardComponent }
		</div>
		);
};

export default CardList;