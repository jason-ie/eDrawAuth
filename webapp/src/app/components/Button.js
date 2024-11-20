// src/app/components/Button.js
import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({
    children,
    onClick,
    variant = 'contained',
    color = 'primary',
    className,
    ...props
}) => {
    return (
        <MuiButton
            onClick={onClick}
            variant={variant}
            color={color}
            className={className}
            {...props}
        >
            {children}
        </MuiButton>
    );
};

export default Button;
