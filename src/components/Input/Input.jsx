import React, {useState} from 'react';
import cx from 'classnames';

import classes from './Input.module.scss';

const Input = ({
                   className,
                   value,
                   name,
                   type = 'text',
                   state = 'default', // 'default' | 'success' | 'error'
                   placeholder,
                   message,
                   disabled,
                   autoFocus,
                   // onChange,
                   onBlur
               }) => {
    const [isFocused, setFocused] = useState(false);

    return (
        <>
            <input
                className={cx(
                    className,
                    classes.input,
                    state && classes[`input--state-${state}`],
                    isFocused && classes['input--focused']
                )}
                {...{value, type, name, placeholder, disabled, autoFocus}}
                // onChange={e => onChange && onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={e => {
                    setFocused(false);
                    onBlur && onBlur(e);
                }}
                autoComplete="off"
            />

            {!!message && <div className={classes.message}>{message}</div>}
        </>
    );
};

export default Input;
