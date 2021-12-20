
import { useState } from "react";
import css from './Feedback.module.css'
import Section from '../Section/Section'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import Statistics from '../Statistics/Statistics';



// class Feedback extends Component {

//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//       }

//       handleIncrement = event => {
//           const {name} = event.target;
//           this.setState(prevState => {
//               return {
//                   [name]: prevState[name] + 1,
//               };
//           });
//       };

//     //   plusGood = () => {
//     //       this.setState(prevState => ({
//     //         good: prevState.good + 1,
//     //       }))
//     //   }

//     //   plusNeutral = () => {
//     //       this.setState(prevState => ({
//     //           neutral : prevState.neutral + 1,
//     //       }))
//     //   }

//     //   plusBad = () => {
//     //     this.setState(prevState => ({
//     //         bad : prevState.bad + 1,
//     //     }))
//     //   }

//       countTotalFeedback = () => {
//        return this.state.bad + this.state.good + this.state.neutral
//       }

//       positivePercentage = () => {
//         if(this.countTotalFeedback()) {
//             return (this.state.good / this.countTotalFeedback() * 100 ).toFixed()
//         } else {
//             return 0
//         }

//       };

//     render(){
//         return (
//           <div className={css.container}> 
//             <Section title={'Please leave feedback'}>
//             <FeedbackOptions
//             options={Object.keys(this.state)}
//             handleIncrement={this.handleIncrement}
//           />
//           </ Section>

//             <Section title={'Statistics'}>
//             <Statistics
//             Good={this.state.good}
//             Neutral={this.state.neutral}
//             Bad={this.state.bad}
//             Total={this.countTotalFeedback()}
//             positivePercentage={this.positivePercentage()}
//             />
//             </ Section>
//           </div>
//         );
//     }

// }
 const initialState = {
   good: 0,
   neutral: 0,
   bad: 0
 }
const Feedback = () => {

  const [state, setState] = useState(initialState)
  // const [number, setNumber] = useState(0);
  // const [good, setGood] = useState(0);
  // const [bad, setBad] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  

  
  const total = state.good + state.neutral + state.bad;

  const positivePercentage = Math.round(state.good / total * 100) ;


  // const handleOnClick = (name) => {
  //   if (name === 'good') {setGood(prevGood => prevGood + 1)}
  //   if (name === 'bad') {setBad(prevBad => prevBad + 1)}
  //   if (name === 'neutral') {setNeutral(prevNeutral => prevNeutral + 1)}
  // }
  
  const onButtonClick = (name) => {
    setState(prevState => ({...state,
    [name]: prevState[name] + 1,
    }))
  }

  const {good, neutral, bad} = state

  return (
    <div className={css.container}> 
      <Section title={'Please leave feedback'}>
      <FeedbackOptions
      options={{good, bad, neutral}}
      onClick={onButtonClick}
    />
    </ Section>

      <Section title={'Statistics'}>
      <Statistics
      Good={good}
      Neutral={neutral}
      Bad={bad}
      Total={total}
      positivePercentage={positivePercentage}
      />
      </ Section>
    </div>
  );
}


export default Feedback;