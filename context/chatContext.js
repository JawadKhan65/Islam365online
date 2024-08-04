'use client';
import { useState, createContext, useContext } from "react";

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

export const ChatContextProvider = ({ children }) => {
    const [msg, setMsg] = useState([]);
    const [reference, setReference] = useState('');
    const [get, setGet] = useState(false);

    const addMessagetoView = (newMsg) => {
        setGet(false)
        setMsg(prevMsgs => [...prevMsgs, newMsg]);
        setGet(true)
    };

    const clearMessages = () => {
        setMsg([]);
    };

    return (
        <ChatContext.Provider value={{ msg, get, reference, setReference, addMessagetoView, clearMessages }}>
            {children}
        </ChatContext.Provider>
    );
};

export { ChatContext };
