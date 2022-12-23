import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SignUpAlertNotification from '../components/SignUpAlertNotification'
import FailedAlertNotificationUp from '../components/FailedAlertNotificationUp'
import { validateEmail, validateText } from '../utilities/validation'

interface userFromType {
  firstName: string
  lastName: string
  email: string
  password: string
}

const SignUpFormSection: React.FC = () => {
  const DEFALUT_VALUES: userFromType ={firstName: '', lastName: '', email: '', password: ''}
  const [formUser, setFormUser] = useState<userFromType>(DEFALUT_VALUES)
  const [errors, setErrors] = useState<userFromType>(DEFALUT_VALUES)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [failedSubmit, setFailedSubmit] = useState<boolean>(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target
    setFormUser({...formUser, [id]: value})

    if (id === 'firstName')
    setErrors({...errors, [id]: validateText(id, value)})

    if (id === 'lastName')
    setErrors({...errors, [id]: validateText(id, value)})

    if (id === 'email')
    setErrors({...errors, [id]: validateEmail(id, value)})

    if (id === 'password')
    setErrors({...errors, [id]: validateText(id, value)})
  }

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(false)
    setFailedSubmit(false)

    if (formUser.firstName !== '' && formUser.lastName !=='' && formUser.email !=='' && formUser.password !=='')
      if (errors.firstName == '' && errors.lastName =='' && errors.email =='' && errors.password =='') {

        const result = await fetch('http://localhost:5000/api/authentication/signup', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formUser)
        })

        if (result.status === 201) {
          setSubmitted(true)
          setFormUser(DEFALUT_VALUES)
        } else {
          setSubmitted(false)
          setFailedSubmit(true)
        }
    }
  }  
  
  return (
  <section className="contact-form mt-5">
    <div className="container">

      { submitted ? (<SignUpAlertNotification alertType="success" title="Thanks you for your registration!" text="You will receive an email about verification."/>) : (<></>)}
      { failedSubmit ? (<FailedAlertNotificationUp alertType="danger" title="Something went wrong!!" text="We couldn't register right now"/>) : (<></>)}

      <h2>Register here</h2>
      <form onSubmit={handelSubmit}>
        <div>
          <input id="firstName" className={(errors.firstName ? 'error': '')} value={formUser.firstName} onChange={(e) => handleChange(e)} type="text" placeholder="Your firstName" />
          <div className="errorMessage">{errors.firstName}</div>
          <input id="lastName" className={(errors.lastName ? 'error': '')} value={formUser.lastName} onChange={(e) => handleChange(e)} type="text" placeholder="Your lastName" />
          <div className="errorMessage">{errors.lastName}</div>
          <input id="email" className={(errors.email ? 'error': '')} value={formUser.email} onChange={(e) => handleChange(e)} type="email" placeholder="Your mail" />
          <div className="errorMessage">{errors.email}</div>
          <input id="password" className={(errors.password ? 'error': '')} value={formUser.password} onChange={(e) => handleChange(e)} type="password" placeholder="Your password" />
          <div className="errorMessage">{errors.password}</div>
          <div className="formBtn">
            <button type="submit" className="btn-theme">Register now</button>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <NavLink className="menu-link SignUp" to="/" end>Back to home</NavLink>
        </div>
      </form>    
    </div>
  </section>
  )
}

export default SignUpFormSection
