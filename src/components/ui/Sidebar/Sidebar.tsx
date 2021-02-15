import Portal from '@reach/portal'
import s from './Sidebar.module.css'
import { FunctionComponent, MutableRefObject, useRef } from 'react'
import { RemoveScroll } from 'react-remove-scroll'

interface Props {
  children: any
  open: boolean
  onClose: () => void
}

const Sidebar: FunctionComponent<Props> = ({
  children,
  open = false,
  onClose,
}) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>

  return (
    <Portal>
      {open ? (
        <RemoveScroll>
          <div className={s.root} ref={ref}>
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
                onClick={onClose}
              />
              <section className="absolute inset-y-0 right-0 flex pl-10 max-w-full outline-none sm:pl-16">
                <div className="h-full md:w-screen md:max-w-md">
                  <div className="flex flex-col h-full text-base bg-accents-1 shadow-xl overflow-y-auto">
                    {children}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </RemoveScroll>
      ) : null}
    </Portal>
  )
}

export default Sidebar
