import clsx from 'clsx'
import FocusLock from 'react-focus-lock'
import s from './MainMenu.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { closeMainMenu, toggleMainMenu, useUI } from '@features/ui/uiSlice'
import { FunctionComponent, useEffect, useRef } from 'react'
import { Link } from '@components/ui'
import { MenuGrid } from '@components/icons'
import { useAppDispatch } from '@app/store'
import { useClickAway, useKey } from 'react-use'
import { useRouter } from 'next/router'

interface Props {}

interface MenuItem {
  id: number
  title: string
  href: string
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    title: 'Example one',
    href: '/example-one',
  },
  {
    id: 2,
    title: 'Example two',
    href: '/example-two',
  },
  {
    id: 3,
    title: 'Example three',
    href: '/example-three',
  },
  {
    id: 4,
    title: 'Example four',
    href: '/example-four',
  },
]

const MainMenu: FunctionComponent<Props> = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)
  const { displayMainMenu } = useUI()

  const onClose = () => dispatch(closeMainMenu())
  const onToggle = () => dispatch(toggleMainMenu())

  // Close menu on Escape  press
  useKey('Escape', onClose)

  // Close menu on click outside
  useClickAway(ref, ({ target }) => {
    if (buttonRef.current !== target) onClose()
  })

  // Close menu on route change
  useEffect(() => {
    router.events.on('routeChangeComplete', onClose)

    return () => {
      router.events.off('routeChangeComplete', onClose)
    }
  }, [])

  const variants = {
    hide: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <>
      <button ref={buttonRef} onClick={onToggle}>
        <MenuGrid className="pointer-events-none" size={28} />
      </button>

      <AnimatePresence>
        {displayMainMenu && (
          <div
            ref={ref}
            className="absolute z-0 right-0 top-0 flex mt-10 md:mt-14"
          >
            <motion.div
              variants={variants}
              initial="hide"
              animate="show"
              exit="hide"
              transition={{ duration: 0.2 }}
              style={{ width: '100%', transformOrigin: 'top right' }}
            >
              <FocusLock returnFocus>
                <div className="flex justify-end">
                  <div
                    ref={ref}
                    className={clsx(
                      s.menu,
                      'md:text-md relative w-full text-sm bg-primary border border-accents-2 rounded outline-none shadow-lg'
                    )}
                  >
                    <div className="w-full">
                      <span className="block px-5 py-3 text-accents-5 font-bold border-b border-accents-2 uppercase">
                        Examples
                      </span>

                      <div className="flex flex-col my-1">
                        {menuItems.map(({ id, title, href }) => (
                          <Link
                            key={id}
                            href={href}
                            activeClassName="text-purple-500 dark:text-purple-300"
                          >
                            <span className="block px-5 py-2 w-full text-left text-current font-medium hover:bg-accents-1 transition">
                              {title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FocusLock>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MainMenu
