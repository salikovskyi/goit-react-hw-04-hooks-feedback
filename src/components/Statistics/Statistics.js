import PropTypes from 'prop-types';

import Notification from '../Notification/Notification'
import css from './Statistics.module.css'



export default function Statistics({Good, Bad, Neutral, Total, positivePercentage}) {
    if(Total) {
    return(
        <div>
            <p className={css.text}>Good: {Good}</p>
            <p className={css.text}>Neutral: {Neutral}</p>
            <p className={css.text}>Bad: {Bad}</p>
            <p className={css.text}>Total: {Total}</p>
            <p className={css.text}>Positive feedback: {positivePercentage} %</p>
        </div>
    )
    } else {
        return <Notification message='There is no feedback' />
    }
}

Statistics.propTypes = {
    Good: PropTypes.number,
    Neutral: PropTypes.number,
    Bad: PropTypes.number,
    Total: PropTypes.number,
}