'use client'
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const TypeWriterContainer = styled.div`
  font-family: 'open sans', sans-serif;
  font-size: clamp(1.7vh, 2.8vw, 3.1vh); /* Responsive font size */
  display: flex;
  align-items: start;
  width: 100%;
  max-width: 70vw;
  margin-top: 5px;
  font-weight: semi-bold;
  text-align: justify;
  padding-top:"30vh";
`;

const TypingText = styled.span`
  white-space: pre-wrap; /* Preserve whitespaces and wrap text */
`;

const Cursor = styled.span`
  font-weight: bold;
  animation: ${blink} 0.7s infinite;
`;

const TypingAnimation = ({ text, onComplete = () => { } }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
    setShow(false);
    onComplete();
  }, [index, text]);

  return (
    <TypeWriterContainer>
      <TypingText>{displayedText} {show && <Cursor>|</Cursor>}</TypingText>
    </TypeWriterContainer>
  );
};

export default TypingAnimation;
