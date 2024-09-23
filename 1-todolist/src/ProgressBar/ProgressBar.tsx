import React from 'react';
import './ProgressBar.css';

type ProgressBarPropsType = {
    progress: number;
}

const ProgressBar:React.FC<ProgressBarPropsType> = ({ progress }) => {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
};

export default ProgressBar;