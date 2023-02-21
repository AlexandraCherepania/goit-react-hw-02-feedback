import React, { Component } from 'react'
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics'
import { Feedback } from "./Feedback/Feedback";
import {Notification} from "./Notification/Notification"

class App extends Component { 

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleIncrement = (e) => {
    this.setState((prevState) => ({
      
      [e.target.name]: prevState[e.target.name] + 1,

       
    }))
    console.log("Console: ", e.target.name)
  };
  
  countTotalFeedback = () => {
    const {good, neutral, bad } =  this.state
  
    return good + neutral + bad
    
  }

  handltPositive = () => {
    const {good, neutral, bad } =  this.state
    return (good * 100 / (good + neutral + bad)).toFixed(2)
  }

  render() {
    const { good , neutral , bad} = this.state
  
      return <div
      style={{
      textAlign: 'center',
      fontSize: 24,
      color: '#010101'
      }}>
       

        <Section title = "Please leave your feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}>
            
            </Feedback>
       </Section>
     

         
        <Section title='Statistick'>
          {this.countTotalFeedback() > 0
          ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.handltPositive()}>
          </Statistics>
          : <Notification message='There is no feedback' />}
           </Section>
         
        </div>
       
     
   }
}

export default App;



