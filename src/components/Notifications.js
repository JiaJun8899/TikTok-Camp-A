import React from 'react'

const Notifications = ({showNotification}) => {
  return (
    <div className={`notification-container${showNotification ? ' show': ""}` }>
        <p>The word has been guessed before</p>
    </div>
  )
}

export default Notifications