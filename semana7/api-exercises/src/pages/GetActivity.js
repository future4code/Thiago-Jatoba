import React from 'react'
import {baseUrl} from '../Parameters'
import axios from 'axios'

export default class GetActivity extends React.Component{

    state = {
        activity: { }
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
    
    render (){
        return(
            <div>
                <button onClick={this.choosedActivity}>Tcharaaaaammmm!</button>
                <label>Your Chosen Activity:</label>
                <h3>{this.state.activity.activity}</h3>
            </div>
        )
    }
}