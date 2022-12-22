import React from "react"

interface AlertNotificationType  {
    alertType: string
    title: string
    text: string
}

const FailedAlertNotification: React.FC<AlertNotificationType> = ({alertType = "danger", title, text}) => {
    return (
    <div className={`alert alert-${alertType} text-center`} role="alert">
        <h3>Something went wrong!</h3> 
        <p>Incorrect password or email</p>
    </div>
    )
}

export default FailedAlertNotification