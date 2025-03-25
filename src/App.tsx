import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Meghann Manson. Hello World
            </p>
            <h1>Learning TypeScript</h1>
            <img src="bones.jpg" alt="A picture of my dog Bones" />
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <Button
                style={{ backgroundColor: "red" }}
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
