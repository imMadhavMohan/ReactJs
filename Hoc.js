import React, { Component } from 'react'

const updateCnt = (OriginalComp, arg, factor) => {
    class newComp extends Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
            this.increaseByone = this.increaseByone.bind(this)
        }
        increaseByone() {
            this.setState(
                { count: this.state.count + factor },
                () => { console.log(this.state.count) }
            )

            // this.setState(
            //   prev => (
            //     {
            //       count: prev.count + 1,
            //     }
            //   ));
        }
        render() {
            return (
                <div>
                    <h1>{arg} </h1>
                    <OriginalComp name='Maddy Mohan' cnt={this.state.count} increaseByone={this.increaseByone} {...this.props} />
                </div>
            )
        }
    }

    return newComp
}

export default updateCnt