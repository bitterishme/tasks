import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you must use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // Initialize dice with different values
    const initialLeft = d6();
    // Make sure right die is different from left die
    let initialRight = d6();
    while (initialRight === initialLeft) {
        initialRight = d6();
    }

    // States for each die
    const [leftDie, setLeftDie] = useState<number>(initialLeft);
    const [rightDie, setRightDie] = useState<number>(initialRight);

    // Function to roll the left die
    const rollLeft = () => {
        setLeftDie(d6());
    };

    // Function to roll the right die
    const rollRight = () => {
        setRightDie(d6());
    };

    // Game outcome determination
    let gameResult = null;

    // Check for snake eyes (both showing 1)
    if (leftDie === 1 && rightDie === 1) {
        gameResult = "Lose";
    }
    // Check for matching dice (except snake eyes)
    else if (leftDie === rightDie) {
        gameResult = "Win";
    }

    return (
        <div>
            <div style={{ marginBottom: "1rem" }}>
                <span data-testid="left-die">{leftDie}</span> and{" "}
                <span data-testid="right-die">{rightDie}</span>
            </div>
            {gameResult && (
                <div style={{ marginBottom: "1rem" }}>{gameResult}</div>
            )}
            <div style={{ display: "flex", gap: "0.5rem" }}>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
        </div>
    );
}
