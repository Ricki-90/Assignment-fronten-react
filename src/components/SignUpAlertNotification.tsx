import React from "react"

interface AlertNotificationType  {
    alertType: string
    title: string
    text: string
}

const SignUpAlertNotification: React.FC<AlertNotificationType> = ({alertType = "success", title, text}) => {
    return (
    <div className={`alert alert-${alertType} text-center`} role="alert">
        <h3>Thanks you for your registration!</h3> 
        <p>You will receive an email about verification.</p>
    </div>
    )
}

export default SignUpAlertNotification