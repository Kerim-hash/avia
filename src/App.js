import React, { useState, useEffect } from 'react'
import Filters from './components/Filters'
import TicketsList from './components/TicketsList'
import ticketsData from './tickets.json'
import './styles/main.css'
const App = () => {
  const currencyRates = {
    RUB: 1,
    USD: 0.013,
    EUR: 0.012,
  }
  const [currency, setCurrency] = useState('RUB')
  const [tickets, setTickets] = useState([])
  const [filteredTickets, setFilteredTickets] = useState([])
  const [stopsFilter, setStopsFilter] = useState([])

  const convertPrice = (price) => {
    return Math.round(price * currencyRates[currency])
  }

  useEffect(() => {
    // Загружаем данные
    setTickets(ticketsData.tickets)
    setFilteredTickets(ticketsData.tickets)
  }, [])

  useEffect(() => {
    // Применение фильтров
    if (stopsFilter.length === 0) {
      setFilteredTickets(tickets)
    } else {
      setFilteredTickets(
        tickets.filter((ticket) => stopsFilter.includes(ticket.stops))
      )
    }
  }, [stopsFilter, tickets])

  return (
    <div class="app-container">
      <img
        className="logo"
        width={40}
        height={40}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4aYx4Xzc74DnkZN8EBuXgdAyS4sr-4HaHA&s"
        alt="logo"
      />
      <div className="app-inner">
        <Filters
          stopsFilter={stopsFilter}
          setStopsFilter={setStopsFilter}
          currency={currency}
          setCurrency={setCurrency}
        />
        <TicketsList
          tickets={filteredTickets}
          convertPrice={convertPrice}
          currency={currency}
        />
      </div>
    </div>
  )
}

export default App
