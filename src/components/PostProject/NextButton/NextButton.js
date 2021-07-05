import React from 'react';
import './NextButton.css';
const NextButton = ({ setCounter }) => {
    
    return (
        <div className="press-next">
            <div className="row">
                <ul>
                    <button onClick={() => setCounter((counter) => counter + 1)}>Next</button>
                </ul>
            </div>
        </div>
    );
};

export default React.memo(NextButton);