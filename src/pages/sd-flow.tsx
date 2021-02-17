import { Button, Container } from '@components/ui'
import { setStep, useSdFlow } from '@features/sdFlow/sdFlowSlice'
import { AnimateSharedLayout } from 'framer-motion'
import { BecomeMember, BecomeMemberNav } from '@features/sdFlow/BecomeMember'
import {
  ChildrenInformation,
  ChildrenInformationNav,
} from '@features/sdFlow/ChildrenInformation'
import { Layout } from '@components/common'
import {
  PersonalInformation,
  PersonalInformationNav,
} from '@features/sdFlow/PersonalInformation'
import { useAppDispatch } from '@app/store'
import { SideInfo } from '@features/sdFlow/SideInfo'

export default function SdFlow(): JSX.Element {
  const dispatch = useAppDispatch()
  const { activeStep } = useSdFlow()

  return (
    <div className="relative h-screen">
      <SideInfo />

      <Container>
        <AnimateSharedLayout type="crossfade">
          {activeStep === 'become_member' && (
            <div>
              <BecomeMember />
              <BecomeMemberNav key="become_member" />
            </div>
          )}

          {activeStep === 'personal_information' && (
            <div>
              <PersonalInformation />
              <PersonalInformationNav key="personal_information" />
            </div>
          )}

          {activeStep === 'children_information' && (
            <div>
              <ChildrenInformation />
              <ChildrenInformationNav key="children_information" />
            </div>
          )}
        </AnimateSharedLayout>
      </Container>
    </div>
  )
}

SdFlow.Layout = Layout
