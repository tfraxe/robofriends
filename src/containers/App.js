import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import RobotForm from '../components/RobotForm';
import { robots } from '../components/robots';
import './App.css';

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	};

	handleSubmit = (event) => {
		const new_robot = {
			id: 1,
			name: event.target[0].value,
			username: event.target[1].value,
			email: event.target[2].value
		};

		console.log(new_robot);

		this.setState({robots: this.state.robots.concat([new_robot])})

		event.preventDefault();
	};

	render() {
		const robosFiltrados = this.state.robots.filter( elem => elem.name.toLowerCase().includes(this.state.searchField.toLowerCase()) );
		if(this.state.robots.length === 0) {
			return <h1> LOADING ... </h1>
		}
		else {
			return ( 
				<div className="tc">
				<h1 className="f1"> Robamigo </h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
						<CardList robots={robosFiltrados}/> 
				</Scroll>

				<RobotForm onSubmit={this.handleSubmit}/>
				</div>
			);		
		}
		
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => {
			return response.json();
		})
		.then(users => {
			this.setState({robots: robots.concat(users)});
		})
	}

	
}

export default App;