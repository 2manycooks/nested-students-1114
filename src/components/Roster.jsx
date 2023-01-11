import react, {Component} from 'react'
import Student from './Student'

export default class Roster extends Component {
    render() {

        console.log(this.props)

        const studentArray = []
        
        this.props.roster.forEach((student, idx) => {
            studentArray.push(
                <Student 
                key={idx}
                name={student.name}
                bio={student.bio}
                scores={student.scores}
                />
            )
        })
        return(
           <>
           {studentArray}
           </>
        )
    }
    
}