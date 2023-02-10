import React, { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Button from 'react-bootstrap/Button';
import '../styles/Control.css'

const Control = (props) => {
  const [controller, setController] = useState(false);
  const [data, setData] = useState(undefined)
  const URL = "https://ecourse.cpe.ku.ac.th/exceed13/home"
  
  useEffect(()=>{
    fetch(URL).then((response) => response.json()).then((response) => {
      setData(response.result); 
      console.log(response)
      console.log(data)
    })
  })
  
  useEffect(() => {
    console.log(props.data)
    if (props.data) {
      setController(props.data.state);
      console.log(controller);
    }
  }, [props.data]);
  
  function manageSwitch(state, house) {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        state: state,
        house_name: house,
      }),
    };

    fetch("https://ecourse.cpe.ku.ac.th/exceed13/home", requestOptions)
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  return data && (
    <>
    <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css' />
    <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
    <div className="demo">
      
        <div className="navDiv">
            <Menu menu1={"Manage"} menu2={"Password"} />
        </div>
        <div className="doorDiv">
          <h1 className={data[0]['state'] ? "open-text" : "close-text"}>{data[0]['state'] ? "Open" : "Close"}</h1>
        </div>
        <div className="switch-box">
            <Button className="switch-but" size="lg" variant="primary" onClick={() => manageSwitch("true", data[0]['house_name'])}>OPEN</Button>{' '}
            <Button className="switch-but" size="lg" variant="primary" onClick={() => manageSwitch("false", data[0]['house_name'])}>OFF</Button>{' '}
        </div>
    </>
  );
};

export default Control;