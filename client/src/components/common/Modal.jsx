import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "../../utils/cn";

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "max-w-3xl",
  fullScreen = false,
  className = "",
  showCloseButton = true,
  ariaLabel = "Dialog",
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Focus modal container
      modalRef.current?.focus();
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  if (fullScreen) {
    return (
      <div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        className="fixed inset-0 z-50 bg-white overflow-y-auto outline-none animate-in fade-in duration-200"
      >
        {children}
      </div>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className={cn(
          "bg-white rounded-2xl shadow-2xl w-full overflow-hidden flex flex-col max-h-[90vh] outline-none animate-in zoom-in-95 duration-200",
          maxWidth,
          className
        )}
      >
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            {showCloseButton ? (
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            ) : <div />}
            {title && <h2 className="text-base font-semibold text-gray-900">{title}</h2>}
            <div className="w-8" />
          </div>
        )}
        <div className="p-6 overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
}
