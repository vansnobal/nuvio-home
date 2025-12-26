import React, { useState } from 'react';
import { X, Mail, Check, Loader2, AlertCircle } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface SubscribeModalProps {
    isOpen: boolean;
    onClose: () => void;
    lang: string;
}

const SubscribeModal: React.FC<SubscribeModalProps> = ({ isOpen, onClose, lang }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const { t } = useTranslation();

    // TODO: Replace with your actual Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwK-aRa1mUjv9zc06gSeFowEStMmcYwpARMcb722S1aIIdgDLBv4u-FI66zTdIWzLVX/exec';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Using 'no-cors' mode because Google Apps Script doesn't support CORS preflight
            // This means we won't get a readable response, but the request will go through.
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, lang }),
            });

            // Since we can't check response in no-cors, assume success if no network error
            setStatus('success');
            setEmail('');

        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage(t('modal.error'));
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-white dark:bg-[#1E1E1E] rounded-2xl shadow-2xl border border-[#E2E0D8] dark:border-[#2D2D2D] p-6 md:p-8 transform transition-all animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="text-center mb-6 scale-[0.8] min-[350px]:scale-100 origin-center">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#60A5FA]">
                        <Mail size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-[#2D2D2D] dark:text-[#E2E0D8] mb-2 font-geometric">
                        {t('modal.title')}
                    </h2>
                    <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                        {t('modal.description')}
                    </p>
                </div>

                {status === 'success' ? (
                    <div className="text-center py-4 animate-in fade-in slide-in-from-bottom-2">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-400">
                            <Check size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-[#2D2D2D] dark:text-[#E2E0D8] mb-2">
                            {t('modal.successTitle')}
                        </h3>
                        <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-6">
                            {t('modal.successDesc')}
                        </p>
                        <button
                            onClick={onClose}
                            className="w-full py-3 bg-[#3C4A57] dark:bg-[#60A5FA] text-white dark:text-[#121212] rounded-xl font-medium hover:opacity-90 transition-opacity"
                        >
                            {t('modal.close')}
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={t('modal.placeholder')}
                                className="w-full px-4 py-3 rounded-xl border border-[#E2E0D8] dark:border-[#2D2D2D] bg-[#F8F7F2] dark:bg-[#121212] text-[#3C4A57] dark:text-[#E2E8F0] focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                            />
                        </div>

                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                                <AlertCircle size={16} />
                                <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full flex items-center justify-center gap-2 py-3 bg-[#3C4A57] dark:bg-[#60A5FA] text-white dark:text-[#121212] rounded-xl font-bold text-lg hover:bg-[#2C3E50] dark:hover:bg-[#3B82F6] disabled:opacity-70 disabled:cursor-not-allowed transition-all transform active:scale-95 shadow-lg"
                        >
                            {status === 'loading' ? (
                                <Loader2 size={24} className="animate-spin" />
                            ) : (
                                t('modal.submit')
                            )}
                        </button>

                        <p className="text-xs text-center text-[#9CA3AF] dark:text-[#6B7280]">
                            {t('modal.privacy')}
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SubscribeModal;
