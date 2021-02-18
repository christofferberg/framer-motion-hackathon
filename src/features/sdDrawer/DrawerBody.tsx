import { Input } from '@components/ui'

const DrawerBody = () => {
  return (
    <div className={'px-2 md:px-6 mt-24'}>
      <h1 className={'text-4xl font-bold'}>Fortæl os om dig selv</h1>
      <p className={'mt-2 text-lg'}>
        For at kunne tilbyde dig de rette dækninger skal vi vide lidt mere om
        dig. Indtast dit navn og din alder
      </p>
      <Input
        className={'mt-5'}
        name={'fornavn'}
        label={'Fornavn'}
        placeholder={'Jens'}
      />

      <Input
        className={'mt-5'}
        name={'efternavn'}
        label={'Efternavn'}
        placeholder={'Jensen'}
      />

      <Input
        name={'alder'}
        label={'din alder'}
        type={'number'}
        inputMode={'numeric'}
        placeholder={'45'}
        className={'mt-5'}
      />
      <div className={'w-full flex justify-center my-8 gap-5 mb-20'}>
        <button className={'rounded-full border-2 border-black px-5 py-2'}>
          Gå tilbage
        </button>
        <button
          className={'rounded-full bg-red-500 px-5 py-2 text-white font-bold'}
        >
          Næste →
        </button>
      </div>
    </div>
  )
}
export default DrawerBody
