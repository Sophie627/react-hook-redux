import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
 
function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();
 
  return (
    <div className="App">
      
      <button
        onClick={() =>
          dispatch({
            type: "Car"
          })
        }
      >
    Car
    </button> &nbsp;&nbsp;&nbsp;
    <h1>{counter.vehicle}</h1>
    <button
        onClick={() =>
          dispatch({
            type: "Bike"
          })
        }
      >
    Bike
      </button>  
    </div>
   
  );
}
 
export default App;