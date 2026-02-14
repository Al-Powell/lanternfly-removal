"use client";
import React, {useState} from "react";
export default function Home() {
  const [toggle, setToggle] = useState(-1);
  function getUserLocation(){
    //TODO
    return(
      <>
      </>
    )
  }
  return (
    <>
     <button onClick={() => setToggle((toggle) => toggle * -1)}>
          <h1>Create New Group</h1>
        </button>
      { toggle === 1&& (
        <div>
          <label>Location:
           <input name = "Enter Location"></input>
           <button onClick={() => setToggle((toggle) => toggle * -1)}>Use Current Location</button>
           </label>
           <input name = "How many people do you need?"/>
           <label>
           </label>
        </div>
        )
      }
    </>
  );
}
