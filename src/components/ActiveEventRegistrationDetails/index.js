// Write your code here
import './index.css'

const statusConstants = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeStatus} = props

  const renderNoActiveEventView = () => (
    <div className="no-active-event-container">
      <p className="no-active-para">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <div className="yet-to-card">
        <p className="yet-to-register-para">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art from.
        </p>
        <button type="button" className="yet-to-register-button">
          Register Here
        </button>
      </div>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registered-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-view-para">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="closed-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-view-img"
      />
      <h1 className="closed-view-heading">Registrations Are Closed Now!</h1>
      <p className="closed-view-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const eventsView = () => {
    switch (activeStatus) {
      case statusConstants.yetToRegister:
        return renderYetToRegisterView()
      case statusConstants.registered:
        return renderRegisteredView()
      case statusConstants.registrationClosed:
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return <>{eventsView()}</>
}

export default ActiveEventRegistrationDetails
