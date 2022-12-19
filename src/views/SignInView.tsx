import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import SignInFormSection from '../sections/SignInFormSection'

const SignInView: React.FC = () => {
  return (
    <>
      <MainMenuSection />
      <SignInFormSection />
      <FooterSection />
    </>
  )
}

export default SignInView