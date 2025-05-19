import React from 'react';

const CountDown = () => {
    return (
        <div>
            {/* For TSX uncomment the commented types below */}
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 15 } /* as React.CSSProperties */} aria-live="polite" aria-label= >15</span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 10 } /* as React.CSSProperties */} aria-live="polite" aria-label= >10</span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 24 } /* as React.CSSProperties */} aria-live="polite" aria-label= >24</span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 59 } /* as React.CSSProperties */} aria-live="polite" aria-label= >59</span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default CountDown;