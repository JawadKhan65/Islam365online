// TypingContext.js
'use client';

import React, { createContext, useContext, useState } from 'react';

const TypingContext = createContext();

export const useTypingContext = () => useContext(TypingContext);

export const TypingProvider = ({ children }) => {
    const [firstComplete, setFirstComplete] = useState(false);

    const handleFirstComplete = () => {
        setFirstComplete(true);
    };

    return (
        <TypingContext.Provider value={{ firstComplete, handleFirstComplete }}>
            {children}
        </TypingContext.Provider>
    );
};
