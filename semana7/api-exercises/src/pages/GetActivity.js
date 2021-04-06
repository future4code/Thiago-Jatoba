import React from 'react'
import {baseUrl} from '../Parameters'
import axios from 'axios'

export default class GetActivity extends React.Component{

    state = {
        activity: []
    }

    choosedActivity = async () => {
        try{
            const res = await axios.get (baseUrl)
            console.log(res.data)
            this.setState({activity: res.data})
        }catch (err){
            console.log(err)
        }
        
    }

    backHome = () => {
        this.setState({ activity: [] });
    }

    render() {
        const activitiesList =(
                <div key={this.state.activity.key}>
                    <div>
                        <h3>Activity: </h3>
                        <p> {this.state.activity.activity} </p>
                    </div>
                    <div>
                        <h2>Number of Participants: </h2>
                        <p> {this.state.activity.participants} </p>
                    </div>
                    <div>
                        <h2>Type: </h2>
                        <p> {this.state.activity.type} </p>
                    </div>
                </div>
        )

        if (this.state.activity.length === 0) {
            return (
                <div>
                    <h1>BORED?</h1>
                    <button onClick={this.choosedActivity}>"C'mon and random an Activity!" </button>
                </div>
            );
        } else if (this.state.activity.length !== 0) {
            return (
                <div>
                    <div>{activitiesList}</div>
                    <div>
                        <button onClick={this.backHome}>BACK to HOME</button>
                        <button onClick={this.choosedActivity}>GIVE ME ANOTHER ONE!</button>
                    </div>
                </div>
            );
        }
    }
}