import React, { FunctionComponent, useEffect, useState } from 'react';
import '@/scss/app.scss';
import './styles.scss';

export const Popup: FunctionComponent = () => {
    // Renders the component tree
    return (
        <div className="container popup-container">
            <div className="bg-gray-200 p-4">
                <p>hello</p>
            </div>
        </div>
    );
};
