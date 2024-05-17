import React from 'react';

type BtnPropsType = {
    name: string
    onClick: () => void
    className: string
    disabled?: boolean
    }
export const Button = ({name, onClick, className, disabled}: BtnPropsType) => {
const onClickHandler = () => {
    onClick()
}
    return (
        <button
            onClick={onClickHandler}
            className={className}
            disabled={disabled}>{name}
        </button>
    );
};
