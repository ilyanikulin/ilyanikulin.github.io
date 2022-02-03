import React from 'react';
import classnames from 'classnames';
import bem from 'bem-ts';

import './index.scss';

export interface ButtonProps {
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
  submit?: boolean;
  primary?: boolean;
}

const b = bem('button');

const Button: React.FC<ButtonProps> = ({
  className = '',
  label = '',
  disabled = false,
  onClick,
  submit = false,
  primary = true,
}) => (
  <button
    type={submit ? 'submit' : 'button'}
    className={classnames(
      b({
        primary,
        disabled,
      }),
      className,
    )}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
