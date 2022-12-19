import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AlertNotification from '../components/AlertNotification'
import { validateEmail, validateText } from '../utilities/validation'

interface FormDataType {
    firstName: string
    lastName: string
    email: string
    password: string
}

const SignUpFormSection: React.FC = () => {
  const DEFALUT_VALUES: FormDataType ={firstName: '', lastName: '', email: '', password: ''}
  const [formData, setFormData] = useState<FormDataType>(DEFALUT_VALUES)
  const [errors, setErrors] = useState<FormDataType>(DEFALUT_VALUES)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [failedSubmit, setFailedSubmit] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target
    setFormData({...formData, [id]: value})

    if (id === 'firstName')
      setErrors({...errors, [id]: validateText(id, value)})

    if (id === 'lastName')
      setErrors({...errors, [id]: validateText(id, value)})

    if (id === 'email')
    setErrors({...errors, [id]: validateEmail(id, value)})

    if (id === 'password')
    setErrors({...errors, [id]: validateText(id, value)})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(false)
    setFailedSubmit(false)

    if (formData.firstName !== '' && formData.lastName !=='' && formData.email !=='' && formData.password !=='')
      if (errors.firstName == '' && errors.lastName =='' && errors.email =='' && formData.password !=='') {

        const res = await fetch('http://localhost:5000/api/authentication/signup', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })

        if (res.status === 200) {
          setSubmitted(true)
          setFormData(DEFALUT_VALUES)
        } else {
          setSubmitted(false)
          setFailedSubmit(true)
        }
      }
  }

  return (
    <section className="contact-form mt-5">
      <div className="container">
      <NavLink className="menu-link SignUp" to="/" end>Back to home</NavLink>
        
        { submitted ? (<AlertNotification alertType="success" title="Thank you for your register!" text="Welcome"/>) : (<></>)}
        { failedSubmit ? (<AlertNotification alertType="danger" title="Something went wrong!!" text="We couldn't register right now"/>) : (<></>)}

        <h2>Register here</h2>
        <form onSubmit={handleSubmit} noValidate>

            <input id="firstName" className={(errors.firstName ? 'error': '')} value={formData.firstName} onChange={(e) => handleChange(e)} type="text" placeholder="Your firstName" />
            <div className="errorMessage">{errors.firstName}</div>

            <input id="lastName" className={(errors.lastName ? 'error': '')} value={formData.lastName} onChange={(e) => handleChange(e)} type="text" placeholder="Your lastName" />
            <div className="errorMessage">{errors.lastName}</div>

            <input id="email" className={(errors.email ? 'error': '')} value={formData.email} onChange={(e) => handleChange(e)} type="email" placeholder="Your mail" />
            <div className="errorMessage">{errors.email}</div>

            <input id="password" className={(errors.password ? 'error': '')} value={formData.password} onChange={(e) => handleChange(e)} type="password" placeholder="Your password" />
            <div className="errorMessage">{errors.password}</div>

          <div className="formBtn">
            <button type="submit" className="btn-theme">Register now</button>
          </div>
        </form>    
      </div>
    </section>
  )
}

export default SignUpFormSection
