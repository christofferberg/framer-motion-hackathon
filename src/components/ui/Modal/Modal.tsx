import FocusLock from 'react-focus-lock'
import Portal from '@reach/portal'
import s from './Modal.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Close } from '@components/icons'
import { FunctionComponent, useRef, useEffect, useCallback } from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import { useClickAway } from 'react-use'

interface Props {
  className?: string
  children?: any
  open?: boolean
  onClose: () => void
  onEnter?: () => void | null
}

const Modal: FunctionComponent<Props> = ({
  children,
  open,
  onClose,
  onEnter = null,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  // Click away
  useClickAway(ref, onClose)

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        return onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (ref.current) {
      if (open) {
        window.addEventListener('keydown', handleKey)
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [open, handleKey])

  return (
    <Portal>
      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className={s.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            />

            <RemoveScroll>
              <div className={s.modal}>
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className={s.modalContent}
                  role="dialog"
                  ref={ref}
                >
                  <FocusLock returnFocus>
                    <button
                      onClick={onClose}
                      aria-label="Close panel"
                      className="absolute right-0 top-0 m-3 hover:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <Close size={24} />
                    </button>

                    {children}
                  </FocusLock>
                </motion.div>
              </div>
            </RemoveScroll>
          </>
        ) : null}
      </AnimatePresence>
    </Portal>
  )
}

export default Modal
