import React from 'react'
import '../styles/filter.css'
const Filters = ({ stopsFilter, setStopsFilter, currency, setCurrency }) => {
  const handleCurrencyChange = (value) => {
    setCurrency(value)
  }
  const handleFilterChange = (stopCount) => {
    if (stopsFilter.includes(stopCount)) {
      setStopsFilter(stopsFilter.filter((count) => count !== stopCount))
    } else {
      setStopsFilter([...stopsFilter, stopCount])
    }
  }

  return (
    <div class="filters-container">
      <div className="currency-selector">
        <h4>Валюта</h4>
        <div className="currency-options">
          <button
            className={`currency-button ${currency === 'RUB' ? 'active' : ''}`}
            onClick={() => handleCurrencyChange('RUB')}
          >
            RUB
          </button>
          <button
            className={`currency-button ${currency === 'USD' ? 'active' : ''}`}
            onClick={() => handleCurrencyChange('USD')}
          >
            USD
          </button>
          <button
            className={`currency-button ${currency === 'EUR' ? 'active' : ''}`}
            onClick={() => handleCurrencyChange('EUR')}
          >
            EUR
          </button>
        </div>
      </div>
      <h4>Количество пересадок</h4>
      <label>
        <input
          type="checkbox"
          onChange={() => handleFilterChange(0)}
          checked={stopsFilter.includes(0)}
        />
        Без пересадок
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => handleFilterChange(1)}
          checked={stopsFilter.includes(1)}
        />
        1 пересадка
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => handleFilterChange(2)}
          checked={stopsFilter.includes(2)}
        />
        2 пересадки
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => handleFilterChange(3)}
          checked={stopsFilter.includes(3)}
        />
        3 пересадки
      </label>
    </div>
  )
}

export default Filters
