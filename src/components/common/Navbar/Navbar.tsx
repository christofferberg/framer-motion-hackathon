import clsx from 'clsx'
import Link from '@components/ui/Link'
import s from './Navbar.module.css'
import { ColorMode, Info } from '@components/icons'
import { FunctionComponent, useState } from 'react'
import { Logo, Container, Button } from '@components/ui'
import { useMount } from 'react-use'
import { useTheme } from 'next-themes'
import { useAppDispatch } from '@app/store'
import { openModal } from '@features/ui/uiSlice'

const Navbar: FunctionComponent = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const rootClassName = clsx(s.root)
  const { theme, setTheme } = useTheme()

  // Set mounted boolean
  useMount(() => setMounted(true))

  const toggleColorMode = () => {
    if (mounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <div className={rootClassName}>
      <Container>
        <div className="relative flex flex-row items-center justify-between">
          <Link href="/" aria-label="Logo">
            <Logo size={40} />
          </Link>

          <div className="flex flex-row items-center space-x-3">
            <Button
              size="sm"
              onClick={() => dispatch(openModal('hackathon_brief'))}
            >
              Hackathon brief
            </Button>

            <button onClick={toggleColorMode}>
              <ColorMode size={28} />
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
