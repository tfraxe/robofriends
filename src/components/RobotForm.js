import React, {Component} from 'react';
import './RobotForm.css';

class RobotForm extends Component {
	constructor() {
		super();
		this.state = {
			inputFormName: '',
			inputFormUsername: '',
			inputFormEmail: ''
		}

	}


	handleChangeName = (event) => {
		this.setState({inputFormName: event.target.value});
	};


	handleChangeUsername = (event) => {
		this.setState({inputFormUsername: event.target.value});
	};


	handleChangeEmail = (event) => {
		this.setState({inputFormEmail: event.target.value});
	};


	render(props) {
		
		const handleSubmit = (event) => {
			this.props.onSubmit(event);
			this.setState({
				inputFormName: '',
				inputFormUsername: '',
				inputFormEmail: ''
			});
		};

		return (

				<form onSubmit={handleSubmit}>
					<label>
						Name:
						<input type="text" name="name" value={this.state.inputFormName} onChange={this.handleChangeName} className="pa1 ma3 ba b--green bg-lightest-blue" required/>
					</label>

					<label>
						Username:
						<input type="text" name="username" value={this.state.inputFormUsername} onChange={this.handleChangeUsername} className="pa1 ma3 ba b--green bg-lightest-blue" required/>
					</label>


					<label>
						E-mail:
						<input type="email" name="email" value={this.state.inputFormEmail} onChange={this.handleChangeEmail} className="pa1 ma3 ba b--green bg-lightest-blue" required/>
					</label>

					<input type="submit" value="Criar robô!" className="b ph3 pv2 input-reset ba b--black bg-lightest-blue grow pointer f6 dib" required/>

				</form>

			);
	}
}

export default RobotForm;