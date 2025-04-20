import React from "react";
import "./App.css";

import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { Button } from "react-bootstrap";


function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ background: "red" }}>
                UM COS420 with React Hooks and TypeScript
            </header>

            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>

            <h1> Heading </h1>
            <img src="image.jpg" alt="Image" />
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Meghann Manson
            </p>
      </div>
    );
}

export default App;
