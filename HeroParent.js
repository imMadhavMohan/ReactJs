import React, { Component } from 'react'
import Hero from '../Components/Hero'
import Erroboundry from '../Components/ErroBoundry'

export class HeroParent extends Component {
    render() {
        return (
            <div>
                <Erroboundry><Hero name='Batman' /></Erroboundry>
                <Erroboundry><Hero name='SpiderMan ' /></Erroboundry>
                <Erroboundry><Hero name='Joker ' /></Erroboundry>
                <Erroboundry><Hero name='Hanuman ' /></Erroboundry>
            </div>
        )
    }
}

export default HeroParent