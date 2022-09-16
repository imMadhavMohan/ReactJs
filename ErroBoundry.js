import React, { Component } from 'react'

class ErroBoundry extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false,
         errorInfo: null
      }
    }

    static getDerivedStateFromError(){
        return {
            hasError: true
        }         
    }

    // componentDidCatch(error, errorInfo){
    //     this.setState({
    //         hasError: error,
    //         errorInfo: errorInfo.toString()
    //     })
    // }

  render() {    
    if(this.state.hasError)        
        return (
            <>
                <h1>Error has Occured</h1>
                {/* <p>{this.state.errorInfo}</p> */}
            </>    
        )
    return this.props.children
  }
}

export default ErroBoundry