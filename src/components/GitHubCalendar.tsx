import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import '../styles/GitHubCalendar.css';

const GitHubCalendarComponent: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  return (
    <section id="github-calendar" className="github-calendar-container">
      <h2>Mi Actividad en GitHub</h2>
      <div className="year-selector">
        <select 
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="year-select"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="calendar-wrapper">
        <GitHubCalendar
          username="pablo-sanchez83"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          year={selectedYear}
        />
      </div>
    </section>
  );
};

export default GitHubCalendarComponent; 