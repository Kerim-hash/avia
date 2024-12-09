import React from 'react'
import TicketCard from './TicketCard'

const TicketsList = ({ tickets, convertPrice, currency }) => (
  <div class="tickets">
    {tickets
      .sort((a, b) => a.price - b.price)
      .map((ticket, index) => (
        <TicketCard
          key={index}
          ticket={ticket}
          convertPrice={convertPrice}
          currency={currency}
        />
      ))}
  </div>
)

export default TicketsList
