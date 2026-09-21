import { useEffect, useRef } from 'react';

/**
 * Custom hook to intercept mobile browser (Chrome/Safari/Android) back buttons and gestures.
 * 
 * - When `isOpen` becomes true, a history state entry is pushed to the browser history stack.
 * - When the user presses the phone/browser back button or performs an edge-swipe back gesture,
 *   the browser's `popstate` event fires and triggers `onClose`, closing the modal without exiting Chrome.
 * - When the modal is closed via on-screen UI buttons ("X", "← Back to Events", backdrop, Escape key),
 *   the pushed history entry is cleanly reverted via `window.history.back()`.
 * 
 * @param {boolean} isOpen - Whether the modal is currently open.
 * @param {() => void} onClose - Function to close the modal.
 * @param {string} [modalName='modal'] - Unique identifier for the modal state.
 */
export function useModalHistory(isOpen, onClose, modalName = 'modal') {
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const modalKey = `consortium_${modalName}_${Date.now()}`;
    let isPushed = false;
    let isPoppedByBrowser = false;

    try {
      window.history.pushState({ modalKey }, '', window.location.href);
      isPushed = true;
    } catch {
      // Fallback in case pushState is restricted
    }

    const handlePopState = () => {
      // Browser back button / swipe back gesture was pressed in the mobile browser
      isPoppedByBrowser = true;
      if (onCloseRef.current) {
        onCloseRef.current();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);

      // If closed via UI rather than the browser back button,
      // and our pushed state is still the active history entry, pop it cleanly.
      if (isPushed && !isPoppedByBrowser && window.history.state?.modalKey === modalKey) {
        try {
          window.history.back();
        } catch {
          // Fallback if history.back fails
        }
      }
    };
  }, [isOpen, modalName]);
}

export default useModalHistory;
