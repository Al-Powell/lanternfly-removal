"use client";
import React, { useState } from "react";
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
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
     <Button onClick={() => setToggle((toggle) => toggle * -1)}>
          <h1>Create New Group</h1>
        </Button>
      { toggle === 1&& (
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
          <label>Location:
           <Input name = "Enter Location"></Input>
           <Button variant="solid" onClick={() => setToggle((toggle) => toggle * -1)}>Use Current Location</Button>
           </label>
           <Input name = "How many people do you need?"/>
           <label>
           </label>
        </div>
        )
      }
    </>
  );
}
