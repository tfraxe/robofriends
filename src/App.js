import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			robots: robots,
			searchField: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	render() {
		const robosFiltrados = this.state.robots.filter( elem => elem.name.toLowerCase().includes(this.state.searchField.toLowerCase()) );
		return ( 
		<div className="tc">
			<h1 className="tc"> Robamigo </h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList robots={robosFiltrados}/> 
		</div>
		);	
	}

	
}

export default App;