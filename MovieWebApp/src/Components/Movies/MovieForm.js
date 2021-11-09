import { useRef, useState } from 'react';
import classes from './MovieForm.module.css';
import Input from '../UI/Input';

const MovieForm = props =>{
    return (
        <form className={classes.form} 
        // onSubmit={submitHandler}
        >
            <Input
                // ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button style={{ marginBottom: '15px', marginTop: '7px'}} >+ Add</button>
            {/* {!amountIsValid && <p>Please eneter valid amount</p>} */}
        </form>
    );
};

export default MovieForm;