// Here we'll use the Post Api
import axios from 'axios'
import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       age: '',
       title: ''
        }
    this.changeHandle = this.changeHandle.bind(this)
    }  

    changeHandle = e =>{
        this.setState({[e.target.name]: e.target.value}) // access attribute
    }

    handleSubmit = e => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state) // 2nd arg is data that has to be sent
            .then(res=>{console.log(res)})
                .catch(e=>{
                    console.log(e)
                })
        console.log(this.state) // Print state Obj
    }

    render() {
    // destructure
    const { name, age, title } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Name: </label>
            <input type="text" name='name' value={name} onChange={this.changeHandle} placeholder='Enter name' />
            <br/>
            <label>Age: </label>
            <input type='number' name='age' value={age} onChange={this.changeHandle} placeholder='Enter age' />
            <br/>
            <label>Title: </label>
            <input type='text' name='title' value={title} onChange={this.changeHandle} placeholder='Enter title' />
            <br/>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm