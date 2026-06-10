import React, { useState } from 'react';
import { FaCertificate, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates } from '../config/content';

// ─── Preview Modal ────────────────────────────────────────────────────────────
function PreviewModal({ cert, onClose, isDarkMode, accentColor }) {
  React.useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(0,0,0,0.80)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`relative rounded-lg overflow-hidden shadow-2xl w-full max-w-3xl flex flex-col ${
            isDarkMode ? 'bg-light-navy' : 'bg-white'
          }`}
          style={{ maxHeight: '88vh' }}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`flex items-center justify-between px-5 py-4 border-b shrink-0 ${
            isDarkMode ? 'border-navy' : 'border-gray-200'
          }`}>
            <div className="min-w-0 pr-4">
              <h3 className={`font-sfmono font-semibold text-sm truncate ${
                isDarkMode ? 'text-lightest-slate' : 'text-gray-900'
              }`}>
                {cert.title}
              </h3>
              <p className={`text-xs mt-0.5 font-sfmono ${
                isDarkMode ? 'text-slate' : 'text-gray-500'
              }`}>
                {cert.issuer} · {cert.date}
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <a
                href={cert.src}
                download
                className={`text-xs font-sfmono flex items-center gap-1 transition-colors ${
                  isDarkMode ? 'text-green hover:text-green/80' : 'text-pink-400 hover:text-pink-500'
                }`}
              >
                Download <FaExternalLinkAlt className="text-[10px]" />
              </a>
              <button
                onClick={onClose}
                className={`transition-colors ${
                  isDarkMode ? 'text-slate hover:text-lightest-slate' : 'text-gray-400 hover:text-gray-700'
                }`}
                aria-label="Close preview"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Preview body */}
          <div className="flex-1 overflow-hidden" style={{ minHeight: 0 }}>
            {cert.type === 'image' ? (
              <img
                src={cert.src}
                alt={cert.title}
                className="w-full h-full object-contain"
                style={{ maxHeight: '75vh' }}
              />
            ) : (
              <iframe
                src={cert.src}
                title={cert.title}
                className="w-full border-0"
                style={{ height: '75vh' }}
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Certificate Card ─────────────────────────────────────────────────────────
function CertCard({ cert, isDarkMode, accentColor, hoverAccentColor, onPreview }) {
  return (
    <motion.div
      className={`p-6 rounded-md shadow-md flex flex-col justify-between transform transition-all duration-300 ease-in-out hover:-translate-y-2 cursor-pointer ${
        isDarkMode
          ? 'bg-light-navy hover:shadow-lg hover:shadow-navy/50'
          : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={() => onPreview(cert)}
    >
      {/* Thumbnail */}
      <div className={`w-full h-36 rounded mb-4 overflow-hidden flex items-center justify-center ${
        isDarkMode ? 'bg-navy' : 'bg-gray-100'
      }`}>
        {cert.type === 'image' ? (
          <img
            src={cert.src}
            alt={cert.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <iframe
            src={`${cert.src}#toolbar=0&navpanes=0&scrollbar=0`}
            title={cert.title}
            className="w-full h-full border-0 pointer-events-none"
          />
        )}
      </div>

      {/* Icon + Title + Link */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <FaCertificate className={`${accentColor} text-lg shrink-0`} />
          <h3 className={`text-sm font-semibold font-sfmono leading-snug ${
            isDarkMode ? 'text-lightest-slate' : 'text-gray-900'
          }`}>
            {cert.title}
          </h3>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onPreview(cert); }}
          className={`${isDarkMode ? 'text-slate' : 'text-gray-400'} ${hoverAccentColor} transition-colors shrink-0 mt-0.5`}
          aria-label={`Preview ${cert.title}`}
        >
          <FaExternalLinkAlt className="text-xs" />
        </button>
      </div>

      {/* Issuer · Date */}
      <p className={`text-xs font-sfmono mt-1 mb-3 ${
        isDarkMode ? 'text-slate' : 'text-gray-500'
      }`}>
        {cert.issuer} · {cert.date}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        {cert.tags.map((tag, i) => (
          <span
            key={i}
            className={`font-sfmono font-semibold text-[10px] ${
              isDarkMode ? 'text-slate' : 'text-gray-500'
            } ${hoverAccentColor}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
function Certificates({ isDarkMode, accentColor, hoverAccentColor }) {
  const [previewCert, setPreviewCert] = useState(null);

  return (
    <>
      <section
        id="certificates"
        className={`py-24 px-6 ${isDarkMode ? 'bg-navy' : 'bg-gray-50'} scroll-mt-20`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${
            isDarkMode ? 'text-lightest-slate' : 'text-gray-900'
          }`}>
            Featured Certificates
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <CertCard
                key={cert.id}
                cert={cert}
                isDarkMode={isDarkMode}
                accentColor={accentColor}
                hoverAccentColor={hoverAccentColor}
                onPreview={setPreviewCert}
              />
            ))}
          </div>
        </div>
      </section>

      {previewCert && (
        <PreviewModal
          cert={previewCert}
          onClose={() => setPreviewCert(null)}
          isDarkMode={isDarkMode}
          accentColor={accentColor}
        />
      )}
    </>
  );
}

export default Certificates;