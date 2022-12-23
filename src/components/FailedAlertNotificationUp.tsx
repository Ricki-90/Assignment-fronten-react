import React from "react"

interface AlertNotificationType  {
    alertType: string
    title: string
    text: string
}

const FailedAlertNotificationUp: React.FC<AlertNotificationType> = ({alertType = "danger", title, text}) => {
    return (
    <div className={`alert alert-${alertType} text-center`} role="alert">
        <h3>User already exits</h3> 
        <p>Try diffrent password or email</p>
    </div>
    )
}

export default FailedAlertNotificationUp