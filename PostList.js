import React, { Component } from 'react'
import axios from 'axios'

class postHttp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [], // array
         errmsg: ''
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').
            then(response=> {
              console.log(response) // will return a object
              this.setState({ posts: response.data}) // predefined in axios res.data
            }).
            catch(error=>{
              console.log(error)
              this.setState({errmsg: 'Eroor in retrieving data'})
            })
    }
    render() {
      const {posts, errmsg} = this.state
      // const posts = this.state.posts // passing obj to a obj var
      // const errmsg = this.state.errmsg
    return (
      <div>
        Post List- using Api
        {
          // if posts.length has elements then only run
          posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null
        }
        { errmsg? <div>{errmsg}</div>: null  }
      </div>
    )
  }
}

export default postHttp