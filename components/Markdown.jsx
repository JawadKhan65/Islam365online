'use client'
import React from 'react';
import ReactMarkdown from 'react-markdown';
import TypingAnimation from './TypingAnimation';

const MarkdownRenderer = ({ content }) => {
    return (
        <div className="markdown-content overflow-scroll">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
