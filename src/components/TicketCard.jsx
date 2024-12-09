import React from 'react'
import '../styles/ticket.css'
const TicketCard = ({ ticket, convertPrice, currency }) => (
  <div className="ticket-card">
    <div className="ticket-aside">
      <img
        width={200}
        height={40}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Turkish_Airlines_logo_2019_compact.svg/1280px-Turkish_Airlines_logo_2019_compact.svg.png"
        alt="Turkish_Airlines_logo_2019_compact"
      />
      <button>
        Купить за {convertPrice(ticket.price)} {currency}
      </button>
    </div>
    <div className="ticket-info">
      <div className="details">
        <p className="ticket-time">{ticket.departure_time}</p>
        <p className="ticket-city">
          {ticket.origin}, {ticket.origin_name}
        </p>
        <p>
          {ticket.departure_date} {ticket.departure_time}
        </p>
      </div>
      <h3 className="route">
        <p>
          {ticket.stops === 0
            ? 'Без пересадок'
            : `${ticket.stops} пересадк${ticket.stops > 1 ? 'и' : 'а'}`}
        </p>
        → → → → →
      </h3>
      <div className="details">
        <p className="ticket-time">{ticket.arrival_time}</p>
        <p className="ticket-city">
          {ticket.destination}, {ticket.destination_name}
        </p>
        <p>
          {ticket.arrival_date} {ticket.arrival_time}
        </p>
      </div>
    </div>
  </div>
)

export default TicketCard
