"use client";
import React, { useState } from "react";
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
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
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
          <label>Location:
           <Input name = "Enter Location"></Input>
           <Button variant="solid" onClick={() => setToggle((toggle) => toggle * -1)}>Use Current Location</Button>
           </label>
           <Input name = "How many people do you need?"/>
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
