import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import FailedAlertNotificationIn from '../components/FailedAlertNotificationIn'
import SignInAlertNotification from '../components/SignInAlertNotification'
import { validateEmail, validateText } from '../utilities/validation'

interface userFromType {
  email: string
  password: string
}

const SignInFormSection: React.FC = ()  => {
  const DEFALUT_VALUES: userFromType ={email: '', password: ''}
  const [formUser, setFormUser] = useState<userFromType>(DEFALUT_VALUES)
  const [errors, setErrors] = useState<userFromType>(DEFALUT_VALUES)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [failedSubmit, setFailedSubmit] = useState<boolean>(false)
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {id, value} = e.target
      setFormUser({...formUser, [id]: value})

      if (id === 'email')
      setErrors({...errors, [id]: validateEmail(id, value)})

      if (id === 'password')
      setErrors({...errors, [id]: validateText(id, value)})
    }

    const handelSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setSubmitted(false)
      setFailedSubmit(false)


      const result = await fetch('http://localhost:5000/api/authentication/signin', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formUser)
      })

      const data = await result.json()
      console.log(data)
      localStorage.setItem('accessToken', data.accessToken)


      if (result.status === 200) {
        setSubmitted(true)
        setFormUser(DEFALUT_VALUES)
      } else {
        setSubmitted(false)
        setFailedSubmit(true)
      }
    }

  return (
  <section className="contact-form mt-5 Page-xl">
    <div className="container">

      { submitted ? (<SignInAlertNotification alertType="success" title="Welcome in!" text=" "/>) : (<></>)}
      { failedSubmit ? (<FailedAlertNotificationIn alertType="danger" title="Something went wrong!" text="We can't log you in"/>) : (<></>)}
      
      <h2>Sign in here</h2>
      <form onSubmit={handelSubmit}>
        <div>
            <input id="email" className={(errors.email ? 'error': '')} value={formUser.email} onChange={(e) => handleChange(e)} type="email" placeholder="Your mail" />
            <div className="errorMessage">{errors.email}</div>
            <input id="password" className={(errors.email ? 'error': '')} value={formUser.password} onChange={(e) => handleChange(e)} type="password" placeholder="Your password" />
            <div className="errorMessage">{errors.password}</div>
          <div className="formBtn">
            <button type="submit" className="btn-theme">Sign in</button>
          </div>
        </div>
        <div className="d-flex justify-content-center">
        <NavLink className="menu-link SignUp" to="/SignUpFormSection" end>Register here</NavLink>
        </div>
      </form>    
    </div>
  </section>
  )
}

export default SignInFormSection
