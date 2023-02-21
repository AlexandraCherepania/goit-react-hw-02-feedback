import React from "react";
import PropTypes from 'prop-types'



export const Feedback = ({ options, onLeaveFeedback }) => { 

    return <ul
        style={{
            display: 'flex',
            justifyContent: "center",
            gap: 30,
            listStyle: 'none',
            alignItems: 'center',
            padding: 0,
            margin: 0
        }}
    >
        {options.map(key => {
            return <li key={key}>
                <button
                    style={{
                        padding: 15,
                        textAlign: 'center',
                        backgroundColor: 'teal',
                        color: 'white',
                    }}
                    type="button"
                    name={key}
                    onClick={onLeaveFeedback}>{key}
                </button>
               
            </li>
        })}
    </ul>


}

Feedback.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

