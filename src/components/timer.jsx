import React from 'react';
import { useTimer } from 'react-timer-hook';
import { Button } from 'reactstrap';

export default function GameTimer({ expiryTimestamp, onExpire }) {
    const {
        seconds,
        minutes,
        
    } = useTimer({ expiryTimestamp, onExpire });

    const restartTimer = () => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 5);
        restart(time)
    };

    const formatTime = (time) => {
        return time.toString().padStart(2, '0');
    };

    return (
        <div className='timer'>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '40px' }}>
                    <span>{formatTime(minutes)}</span>:<span>{formatTime(seconds)}</span>
                </div>
            </div>
        </div>
    );
}
