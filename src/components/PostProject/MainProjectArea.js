import React from 'react';
import GetStepContent from './GetStepContent/GetStepContent';
import StepContent from "@material-ui/core/StepContent";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { useState } from 'react';
function getSteps() {
    return ["Select campaign settings", "Create an ad group", "Create an ad"];
}
const MainProjectArea = () => {
    const steps = getSteps();
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    return (
        <div>
            <Stepper activeStep={activeStep} orientation="vertical">
                {
                    steps.map((data, index) => (

                        <Step key={data}>
                            <StepContent>
                                <div >
                                    <p>{GetStepContent(index)}</p>
                                    <button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</button>

                                </div>
                            </StepContent>
                        </Step>
                    ))
                }
            </Stepper>
            {
                activeStep === steps.length && <div>
                    <p>All steps completed - you&apos;re finished</p>
                    <button>Reset</button>
                </div>
            }
        </div>
    );
};

export default MainProjectArea;