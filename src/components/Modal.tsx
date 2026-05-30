import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          />
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl bg-zinc-900 border border-white/10 rounded-2xl p-0 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] z-[70]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-[80] p-2 bg-black/50 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            {children}
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};
