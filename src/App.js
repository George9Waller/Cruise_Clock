import {useState, useEffect} from "react";
import './App.css';

function App() {
    const [seconds, setSeconds] = useState(0);
    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minutesHand');

    useEffect(() => {
        setInterval(() => setClock(), 1000);
    }, [])

    const setClock = () => {
        const currentDate = new Date();
        const secondsRatio = currentDate.getSeconds() / 60;
        const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
        const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

        setRotation(hourHand, hoursRatio);
        setRotation(minuteHand, minutesRatio);
    }

    const setRotation = (element, rotationRatio) => {
        try {
            element.style.setProperty('--rotation', rotationRatio * 360);
        }
        catch {
            console.log(element)
        }
    }

  return (
    <div className="App">
        <div className="clock">
            <div id="hourHand" className="hand hour" data-hour-hand></div>
            <div id="minutesHand" className="hand minute" data-minute-hand></div>
        </div>
    </div>
  );
}

export default App;
