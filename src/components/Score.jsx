import { Component } from "react";

export default class Score extends Component {

    render() {
        console.log(this.props)

        let scores = this.props.scores.map((score,idx) => {
            return(<li key={idx}>date: {score.date}, score: {score.score}</li>)
        })
        return(
            <>
            {scores}
            </>
        )
    }
}