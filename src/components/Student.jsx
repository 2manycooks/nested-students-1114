import react, {Component} from 'react'
import Score from './Score'

export default class Student extends Component {

   

    render() {
        return(
            <>
            <h1> Name: {this.props.name}</h1>

            <p>bio: {this.props.bio}</p>

            <p> scores:</p>

            <Score scores={this.props.scores}/>
            </>
            
        )
    }
}