import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;




// const {
//     value: capacity,
//     isValid: capacityIsValid,
//     hasError: capacityIsInvalid,
//     valueChangeHandler: capacityChangeHandler,
//     inputBlurHandler: capacityBlurHandler,
//     reset: resetCapacity,
// } = useInput((capacity) =>
//     showingStatus === 'coming soon' ||
//     (capacity > 30 && capacity <= 60));

// const {
//     value: timeSlot,
//     isValid: timeSlotIsValid,
//     hasError: timeSlotIsInvalid,
//     valueChangeHandler: timeSlotChangeHandler,
//     inputBlurHandler: timeSlotBlurHandler,
//     reset: resetTimeSlot,
// } = useInput((timeSlot) =>
//     showingStatus === 'coming soon' ||
//     (timeSlot != "none"));

// const {
//     value: screenNumber,
//     isValid: screenNumberIsValid,
//     hasError: screenNumberIsInvalid,
//     valueChangeHandler: screenNumberChangeHandler,
//     inputBlurHandler: screenNumberBlurHandler,
//     reset: resetScreenNumber,
// } = useInput((screenNumber) =>
//     showingStatus === 'coming soon' ||
//     (screenNumber != "none"));

// const {
//     value: price,
//     isValid: priceIsValid,
//     hasError: priceIsInvalid,
//     valueChangeHandler: priceChangeHandler,
//     inputBlurHandler: priceBlurHandler,
//     reset: resetPrice,
// } = useInput((price) =>
//     showingStatus === 'coming soon' ||
//     (price != "none"));