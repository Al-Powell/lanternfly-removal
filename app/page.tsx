"use client";
import React, {useState} from "react";
export default function Home() {
  const [toggleCreate, setCreateToggle] = useState(-1);
  const [toggleInfo, setInfoToggle] = useState(-1);
  function getUserLocation(){
    //TODO
    return(
      <>
      </>
    )
  }
  return (
    <>
    <button onClick={() => setInfoToggle((toggleInfo) => toggleInfo * -1)}>
      <image></image>
    </button>
     <button onClick={() => setCreateToggle((toggleCreate) => toggleCreate * -1)}>
          <h1>Create New Group</h1>
        </button>
      { toggleCreate === 1&& (
        <div>
          <label>Location:
           <input name = "Enter Location"></input>
           <button onClick={() => getUserLocation()}>Use Current Location</button>
           </label>
           <label>
              How many people do you need?
              <input name = "Enter a number"></input>
           </label>
           <label>
              What will you be doing?
              <select name = "Select a goal">
                <option value="Litter Cleanup">Litter Cleanup</option>
                <option value="Lanternfly Egg Removal">Spotted Lanternfly Egg Removal</option>
              </select>
           </label>
        </div>
        )
      }
    </>
  );
}
