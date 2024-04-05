import { useState } from 'react'

function useForm(steps){
    const [currentStep, setCurrentStep] = useState(0);

    function atualizarStep(i, e){
        if(e) e.preventDefault();

        if(i < 0 || i >= steps.length) return;

        setCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        atualizarStep,
        isFirstStep: currentStep === 0 ? true : false,
        isLastStep: currentStep + 1 == steps.length ? true : false
    }
}

export default useForm