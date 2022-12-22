import React from "react"

interface AlertNotificationType  {
    alertType: string
    title: string
    text: string
}

const SignInAlertNotification: React.FC<AlertNotificationType> = ({alertType = "success", title, text}) => {
    return (
    <div className={`alert alert-${alertType} text-center`} role="alert">
        <h3>Welcome in!</h3> 
    </div>
    )
}

export default SignInAlertNotification