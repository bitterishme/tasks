import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <p className="App-header">
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Meghann Manson Hello World
            </p>

            <h1> This is the header </h1>

            <img src="assets/images.jpg" alt="A picture of my dog Bones" />

            <ul>
                <li>First thing</li>
                <li>Second thing</li>
                <li>The last thing</li>
            </ul>

            <Button
                style={{ backgroundColor: "red", borderColor: "red" }}
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
