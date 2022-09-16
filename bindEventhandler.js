import React, {Component} from 'react';

// Bind mmethod just help to point to the current  class instances
// arrow fun => bydefault points to the class instances so won't need of this

class Bindeventhandler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: 'Hi Madhav Mohan'            
        }

        // 2nd way inside constructor
        // this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            msg:"Bye-Bye"
        })
    }

    render() {
        return (
          <div>
            <h1>{this.state.msg}</h1>
            {/* 1st way*/}
            {/*<button onClick={this.clickHandler.bind(this)}>Click me maddy</button>*/}

            {/* 2nd way*/}
            {/*<button onClick={this.clickHandler}>Click me maddy</button>*/}
            
            {/* 3rd way*/}
            <button onClick={() => this.clickHandler()}>Click me maddy</button>
          </div>
        );
    }
}

export default Bindeventhandler