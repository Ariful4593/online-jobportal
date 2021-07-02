import React from 'react';
import './Budget.css';
const Budget = () => {
    return (
        <div className="budget">
            <div className="row">
                <h4>What is your estimate budget?</h4>
                <div className="col-md-2 mt-2 rate">
                    <select className="w-100" name="cars" id="cars">
                        <option value="volvo">USD</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="col-md-6 mt-2 limit">
                    <select className="w-100" name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Budget;