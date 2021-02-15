import clsx from 'clsx'
import dynamic from 'next/dynamic'
import s from './Layout.module.css'
import { LoadingDots, Modal, Sidebar } from '@components/ui'
import { closeModal, closeSidebar, useUI } from '@features/ui/uiSlice'
import { Footer, Navbar } from '@components/common'
import { FunctionComponent } from 'react'
import { useAppDispatch } from '@app/store'

const Loading = () => (
  <div className="flex items-center justify-center p-3 w-80 h-80 text-center">
    <LoadingDots />
  </div>
)

const dynamicProps = {
  loading: () => <Loading />,
}

const HackathonBrief = dynamic(
  () => import('@components/modals/HackathonBrief'),
  dynamicProps
)

const Layout: FunctionComponent = ({ children }) => {
  const dispatch = useAppDispatch()
  const { displaySidebar, displayModal, modalView } = useUI()

  return (
    <div className={clsx(s.root)}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      <Modal open={displayModal} onClose={() => dispatch(closeModal())}>
        {modalView === 'hackathon_brief' && <HackathonBrief />}
      </Modal>

      <Sidebar open={displaySidebar} onClose={() => dispatch(closeSidebar())}>
        <p>Hello from sidebar</p>
      </Sidebar>
    </div>
  )
}

export default Layout
