import "./App.css"

function App() {
  
  return (
    <>
      <main className="checklist-container">
         <div className="circle">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="29.5" stroke="white" stroke-opacity="0.5" />
                <circle className="progress" cx="30" cy="30" r="29.5" stroke="white" />
            </svg>
            <div className="circle-text">0/7</div>
        </div>
        <div className="details">
            <div className="checklist-button">Чеклист</div>
            <div className="status">Выполнено: 0 из 7 действий</div>
            <div className="next-action">Следующее действие: Созвониться с клиентом до 23.05.24 12:00</div>
        </div>
        <button className="open-checklist">Открыть чеклист</button>
      </main>
    </>
  )  
}

export default App
