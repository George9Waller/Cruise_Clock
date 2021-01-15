import {useState, useEffect} from "react";
import './App.css';

function App() {

    useEffect(() => {
        setInterval(() => setClock(), 10);
    }, [])

    const setClock = () => {
        let startTime = new Date(2018,1,14).valueOf();
        const difference = Date.now() - startTime;
        let time = new Date(startTime + (difference *1920))

        console.log(difference)
        if (difference) {
            const secondsRatio = time.getSeconds() / 60;
            const minutesRatio = (secondsRatio + time.getMinutes()) / 60;
            const hoursRatio = (minutesRatio + time.getHours()) / 12;

            setRotation('hourHand', hoursRatio);
            setRotation('minutesHand', minutesRatio);
        }
    }

    const setRotation = (elementid, rotationRatio) => {
        try {
            console.log('element found')
            document.getElementById(elementid).style.setProperty('--rotation', rotationRatio * 360);
        }
        catch {
            console.log(elementid, 'Not found')
        }
    }

  return (
    <div className="App">
        <h1 className="title">Time</h1>
        <h3 className="title subtitle">the one thing you can't control?</h3>
        <div className="clock">
            <div id="hourHand" className="hand hour" data-hour-hand></div>
            <div id="minutesHand" className="hand minute" data-minute-hand></div>
        </div>
    </div>
  );
}

export default App;
