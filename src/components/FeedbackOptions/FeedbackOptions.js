import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'



export default function FeedbackOptions({options, onClick}){
    // console.log(options)
    const element = Object.keys(options).map((option, idx) => (
        <button className={css.button}
        key={idx}
        name={option}
        onClick={() => {onClick(option)}}
        type="button">
            {option}
        </button>
    ))
return (
   
    <section className={css.section_button}>
        {element}
    </section>
)

}

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired
    }),
    onClick: PropTypes.func.isRequired,
  };