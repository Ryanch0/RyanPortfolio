import React, { createContext, useRef } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    return (
        <ScrollContext.Provider value={{ section1Ref, section2Ref }}>
            {children}
        </ScrollContext.Provider>
    );
};
