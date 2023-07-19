import React, { cloneElement } from 'react';
import cx from 'classnames';

import classes from './Button.module.scss';

const Button = ({
 title,
 size = 'md',
 block,
 variant,
 type = 'button',
 disabled,
 onClick
}) => {
  const resultProps = {
     className: cx(
       classes.wrapper,
       classes[`wrapper--size-${size}`],
       classes[`wrapper--variant-${variant}`],
       block && classes[`wrapper--block`],
     ),
     onClick,
     disabled
  };

  return cloneElement(<button type={type} />, resultProps, title);
};

export default Button;
