'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, MessageSquare } from 'lucide-react';

/**
 * LiveAvatar Component
 * 
 * A premium floating widget that integrates the Live AI Avatar iframe.
 * Features:
 * - Responsive interaction panel (desktop/mobile)
 * - Smooth Framer Motion animations
 * - Raynaters brand alignment (accent color #D3FBA3)
 * - Microphone support for the AI Avatar
 */
export default function LiveAvatar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-4 w-[calc(100vw-48px)] sm:w-[420px] overflow-hidden rounded-none border border-border bg-surface/95 backdrop-blur-xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/30">
                  <Bot className="h-4 w-4 text-signal" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-text-primary">Raynaters AI Helper</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                    <span className="text-[11px] text-text-secondary uppercase tracking-wider">Live Now</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-none p-2 text-text-muted transition-colors hover:bg-surface-hover hover:text-text-primary"
                aria-label="Close AI Helper"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Iframe Container - 16:9 Aspect Ratio */}
            <div className="relative aspect-video w-full bg-bg">
              <iframe
                src="https://embed.liveavatar.com/v1/031c4eb0-73d7-45de-b7b8-ce78547376db?orientation=horizontal"
                allow="microphone"
                title="LiveAvatar Embed"
                className="absolute inset-0 h-full w-full border-none"
              />
            </div>
            
            {/* Context Footer */}
            <div className="p-3 text-center border-t border-border/50">
              <p className="text-[11px] text-text-muted">
                Agentic Intelligence by Raynaters Tech
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-accent text-ink shadow-lg"
        aria-label={isOpen ? "Close AI Helper" : "Open AI Helper"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="bot"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <MessageSquare className="h-6 w-6 fill-current" />
              {/* Pulse effect */}
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-accent/30 duration-1000" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
