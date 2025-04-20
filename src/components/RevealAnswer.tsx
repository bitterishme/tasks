import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    // State to track whether the answer is visible
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // Function to toggle visibility
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <div style={{ marginBottom: "1rem" }}>{isVisible && "42"}</div>
            <Button
                onClick={() => {
                    toggleVisibility();
                }}
            >
                Reveal Answer
            </Button>
        </div>
    );
}
