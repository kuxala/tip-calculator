import "./App.css";
import { useState } from "react";

const number = 12313;
function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [tip, setTip] = useState<any>([]);
  const [backgroundToggle, setBackgroundToggle] = useState<any>(false)

  const handleClick = () => {
    setBackgroundToggle(!backgroundToggle)
  }

  const billAmmount = ((bill * tip) / people).toFixed(2);
  const peopleAmmount = ((bill * (1 + tip)) / people).toFixed(2);

  // const changeBackground = (e:any) => (e.target as any).setAttribute('style', 'background-color: #26C2AE');
  return (
    <div className="wrapper">
      <div className="header">
        <img src="../src/logo.svg" className="logo" />
      </div>

      <div className="container">
        <div className="left-container">
          <div className="bill-input">
            <p>Bill</p>
            <input
              type="number"
              placeholder="0"
              onChange={(e) => {
                setBill(e.target.valueAsNumber);
              }}
            />
          </div>
          <div className="button-tip">
            <p>Select tip %</p>

            <div className="button-group">
              <button
                onClick={() => {
                  setTip(0.05);
                }}
              >
                5%
              </button>
              <button
                onClick={() => {
                  setTip(0.1);
                }}
              >
                10%
              </button>
            </div>

            <div className="button-group">
              <button
                onClick={() => {
                  setTip(0.15);
                }}
              >
                15%
              </button>
              <button
                onClick={() => {
                  setTip(0.2);
                }}
              >
                20%
              </button>
            </div>

            <div className="button-group ">
              <button
                onClick={() => {
                  setTip(0.5);
                }}
              >
                50%
              </button>
              <input
                className="costum"
                placeholder="Costum"
                type="number"
                onChange={(e) => {
                  setTip(e.target.valueAsNumber / 100);
                }}
              />
              
            </div>
          </div>

          <div className="number-of-people">
            <p>Number of People</p>
            <input
              type="number"
              placeholder="0"
              onChange={(e) => {
                setPeople(e.target.valueAsNumber);
              }}
            />
          </div>
        </div>

        <div className="small-container">
          <div className="small-container-each first-container">
            <p>
              Tip Ammount
              <br />
              <span>/person</span>
            </p>
            <div className="ammount">${billAmmount}</div>
          </div>
          <div className="small-container-each second-container">
            <p>
              TOTAL
              <br />
              <span>/person</span>
            </p>
            <div className="ammount">{peopleAmmount}</div>
          </div>
          <button
            className="reset"
            onClick={() => window.location.reload()}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
