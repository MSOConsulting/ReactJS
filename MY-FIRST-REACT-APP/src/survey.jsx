import React, {Component} from 'react'

class Survey extends Component{
    constructor(props){
        super(props)
    }
    state = {
        intNature : 'even',
        counter: 0
    }
    handleNature = ()=>{
        this.setState({counter: this.state.counter+1},()=>{
            this.state.counter%2==0 ? this.setState({intNature:'even'}) : this.setState({intNature:'odd'})        
        })
    }
    render(){
        return(
            <div>
                {console.log('counter: ', this.state.counter)}
                <p><b>{this.state.intNature}</b></p>
                <p><b>{this.state.counter}</b></p>
                <button onClick={this.handleNature}>next</button>
            </div>
        )
    }
}

export default Survey