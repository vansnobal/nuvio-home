import React from 'react';
import { useTranslation } from '../context/LanguageContext';

interface FontWrapperProps {
    children: React.ReactNode;
}

const FontWrapper: React.FC<FontWrapperProps> = ({ children }) => {
    const { language } = useTranslation();

    // If language is English, apply Playfair Display (font-serif-elegant).
    // Otherwise, use default (which is Inter/sans-serif).
    const fontClass = language === 'en' ? 'font-serif-elegant' : '';

    return (
        <div className={`min-h-screen flex flex-col paper-texture ${fontClass}`}>
            {children}
        </div>
    );
};

export default FontWrapper;
