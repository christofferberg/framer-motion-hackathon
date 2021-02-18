import Image from 'next/image'
import { BiPhone } from 'react-icons/bi'

const DrawerHeader = () => {
  return (
    <div className={'w-full border-b px-4 py-2 flex items-center'}>
      <div className={'w-2/12 p-2'}>
        <Image src="/icon.svg" height={90} width={90} />
      </div>

      <div className="flex inline items-center ml-auto">
        <BiPhone className={'text-4xl mr-2'} />
        <div>
          <p>Har du brug for hjælp?</p>
          <a className={'font-medium'} href="#">
            Ring til os på 70 10 90 70
          </a>
        </div>
      </div>
    </div>
  )
}
export default DrawerHeader
