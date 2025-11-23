import React, { useState } from 'react';
import './DecodePage6183.css';
import RobotPage from './RobotDecode6183';
import Outreach6183 from './Outreach6183';

const tabs = [
    { key: 'ROBOT', label: 'Robot' },
    { key: 'OUTREACH', label: 'Outreach' },
];

const DecodePage6183 = () => {
    const [selectedTab, setTab] = useState('ROBOT');

    return (
        <div className="main-6183-decode">
            <h1>DECODE</h1>
            <p className="date">September 6th 2025 - Present</p>

            {/* Tabs */}
            <div className="tab-container-6183-decode" role="tablist" aria-label="Decode tabs">
                {tabs.map((t) => (
                    <button
                        key={t.key}
                        role="tab"
                        aria-selected={selectedTab === t.key}
                        className={`tab-6183-decode ${selectedTab === t.key ? 'selected' : ''}`}
                        onClick={() => setTab(t.key)}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="tab-content-6183">
                {selectedTab === 'ROBOT' && <RobotPage />}
                {selectedTab === 'OUTREACH' && <Outreach6183 />}
            </div>
        </div>
    );
};

export default DecodePage6183;
