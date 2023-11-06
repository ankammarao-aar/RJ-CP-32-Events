// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItemDetails, activeEventId, isActive} = props
  const {id, imageUrl, name, location} = eventItemDetails

  const onClickEvent = () => {
    activeEventId(id)
  }

  const changeColor = isActive ? 'event-img' : 'img'

  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={changeColor} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
