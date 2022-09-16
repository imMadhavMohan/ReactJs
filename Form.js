import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            comment: '',
            topic: 'react.js'
        };
        this.handleCmntChange = this.handleCmntChange.bind(this);
        this.handleChange = this.handleChange.bind(this); 
        this.handleSelectChange = this.handleSelectChange.bind(this);             
      }
    
      handleChange = event=>{
        this.setState({username: event.target.value});
      }
      
      handleCmntChange = event=>{
        this.setState({comment: event.target.value});
      }

      handleSelectChange = event=>{        
        this.setState({topic: event.target.value});
      }
      
      handleSubmit = event=>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username: </label>
                <input type="text" value={this.username} onChange={this.handleChange} placeholder='Enter username' />
            </div>
            <div>
                <label>Comment: </label>                
                <textarea onChange={this.handleCmntChange} placeholder='Enter comment' rows='6' colm='35'></textarea>
            </div>
            <div>
                <label>Topic Choose</label>
                <select value={this.state.topic} onChange={this.handleSelectChange}>
                    <option value='vue.js'>Vue</option>
                    <option value='angular.js'>Angulr</option>
                    <option value='react.js'>React</option>
                </select>
            </div>
            <input type='submit' value='submit'/>            
          </form>
        );
      }
}

export default Form