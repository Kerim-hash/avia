import React from 'react'
import '../styles/filter.css'

const Filters = ({ stopsFilter, setStopsFilter, currency, setCurrency }) => {
  const stopOptions = [0, 1, 2, 3]

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

  const handleSelectAll = () => {
    if (stopsFilter.length === stopOptions.length) {
      setStopsFilter([]) // Сбросить все фильтры
    } else {
      setStopsFilter(stopOptions) // Выбрать все фильтры
    }
  }

  const handleSelectOnly = (stopCount) => {
    setStopsFilter([stopCount]) // Выбрать только один фильтр
  }

  return (
    <div className="filters-container">
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
          onChange={handleSelectAll}
          checked={stopsFilter.length === stopOptions.length}
        />
        Все
      </label>
      {stopOptions.map((stopCount) => (
        <div
          key={stopCount}
          className="filter-option"
          onMouseEnter={(e) => {
            const onlyButton = e.currentTarget.querySelector('.only-button')
            onlyButton.style.display = 'inline-block'
          }}
          onMouseLeave={(e) => {
            const onlyButton = e.currentTarget.querySelector('.only-button')
            onlyButton.style.display = 'none'
          }}
        >
          <label>
            <input
              type="checkbox"
              onChange={() => handleFilterChange(stopCount)}
              checked={stopsFilter.includes(stopCount)}
            />
            {stopCount === 0 ? 'Без пересадок' : `${stopCount} пересадка(и)`}
          </label>
          <button
            className="only-button"
            onClick={() => handleSelectOnly(stopCount)}
          >
            Только
          </button>
        </div>
      ))}
    </div>
  )
}

export default Filters
