import React from "react"

interface AlertNotificationType  {
    alertType: string
    title: string
    text: string
}

const AlertNotification: React.FC<AlertNotificationType> = ({alertType = "warning", title, text}) => {
    return (
    <div className={`alert alert-${alertType} text-center`} role="alert">
        <h3>Thank you for your comments!</h3> 
        <p>We will contact you as soon as possible.</p>
    </div>
    )
}

export default AlertNotification