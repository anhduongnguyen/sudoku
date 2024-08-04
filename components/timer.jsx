import React from 'react';
import { useTimer } from 'react-timer-hook';
import { Button } from 'reactstrap';

export default function GameTimer({ expiryTimestamp, onExpire }) {
    const {
        seconds,
        minutes,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire });

    const restartTimer = () => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
    };


    return (
        <div className='timer'>
            <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '40px' }}>
                    <span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <Button size="sm" onClick={start}>Start</Button>
                <Button size="sm" onClick={pause}>Pause</Button>
                <Button size="sm" onClick={resume}>Resume</Button>
                <Button size="sm" onClick={restartTimer}>Restart</Button>
            </div>
        </div>
    );
}