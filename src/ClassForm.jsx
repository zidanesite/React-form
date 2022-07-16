import React, { Component } from 'react'

export default class ClassForm extends Component {
  constructor(props){
    super();
    this.state = {
      students: [
        // {name: "Eric", email:"zidaney@gmail.com",  gen:24},
        {name: "Nana", email:"zidaney@gmail.com",  gen:14}
      ]
    }
  }

  handleRegister = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });

		// console.log(this.state);
		// console.log(this.state.name);
		// console.log(this.state.email);
		// console.log(this.state.gen);
	};

  handleSend = (e) => {
		e.preventDefault();
		this.setState({
			students: [
				...this.state.students,
				{ name: this.state.name, email: this.state.email, gen: this.state.gen },
			],
            
			name: "",
			email: "",
			gen: "",
		});
	};

  render() {
    return (
      <>
      <form>
        <h2>Register</h2>
        <label>Name:</label>
        <input 
        type="text" 
        name="name" 
        placeholder="Your Name"
        value={this.state.students.name}
				onChange={this.handleRegister}
        />

        <br/>

        <label>Email:</label>
        <input 
        type="email" 
        name="email" 
        placeholder="Your Email"
        value={this.state.students.email}
				onChange={this.handleRegister}
        />

        <br/>

        <label>Gen:</label>
        <input 
        type="number" 
        name="gen" 
        placeholder="Your Gen"
        value={this.state.students.gen}
				onChange={this.handleRegister}
        />

        <br/>

        <button onClick={this.handleSend}>Send</button>
      </form>


      {this.state.students.map((item, index) =>{
        return(
          <div key={index}>
            <h3>Name:{item.name}</h3>
            <h3>Email:{item.email}</h3>
            <h3>Gen:{item.gen}</h3>
          </div>

        )
      })}
      </>
    )
  }
}
