import React from 'react';
import { X, Monitor } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface MobileAlertModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileAlertModal: React.FC<MobileAlertModalProps> = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-sm bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-2xl border border-[#E2E0D8] dark:border-[#2D2D2D] p-6 transform transition-all animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="text-center">
                    <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#60A5FA]">
                        <Monitor size={32} />
                    </div>

                    <h3 className="text-xl font-bold text-[#2D2D2D] dark:text-[#E2E0D8] mb-3 font-geometric">
                        Desktop Only
                    </h3>

                    <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-8 leading-relaxed whitespace-pre-line">
                        {t('hero.mobileAlert')}
                    </p>

                    <button
                        onClick={onClose}
                        className="w-full py-3 bg-[#3C4A57] dark:bg-[#60A5FA] text-white dark:text-[#121212] rounded-xl font-bold hover:bg-[#2C3E50] dark:hover:bg-[#3B82F6] transition-all transform active:scale-95"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileAlertModal;
