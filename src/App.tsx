import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ background: "red" }}>
                UM COS420 with React Hooks and TypeScript
            </header>
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
