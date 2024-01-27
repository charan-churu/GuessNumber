import React, { Component } from 'react'
import './guessNumber.css'
import Result from './Result'



export class GuessNumber extends Component {
    static defaultProps = {
        secret: Math.floor(Math.random() * 20) + 1
    }
    
    constructor(props) {
        super(props)
        this.state = { term: '',actualNumber:false}
   
 
        this.handleChange = this.handleChange.bind(this)
      
    }
 
   
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 
   
   
 
    render() {
        return (
            <div className='container'>
                <div className='head'>
                       <label htmlFor='term'>
                        Guess Number between 1 to 20
                    </label>
                </div>
                <input
                    id='term'
                    type='text'
                    name='term'
                    value={term}
                    onChange={this.handleChange}
                />
 
                <Result term={this.state.term}
                    secretNum={this.props.secret} />
                    
            </div>
        )
    }
}


export default GuessNumber

