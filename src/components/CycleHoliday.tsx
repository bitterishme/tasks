import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Define the holidays with their emojis - 5 distinct holidays
const HOLIDAYS = [
    "🎆", // New Year
    "❤️", // Valentine's Day
    "🎃", // Halloween
    "🦃", // Thanksgiving
    "🎄", // Christmas
];

// Define the alphabetical order (Christmas, Halloween, New Year, Thanksgiving, Valentine's)
const ALPHABETICAL_ORDER = [4, 2, 0, 3, 1];

// Define the yearly order (New Year, Valentine's, Halloween, Thanksgiving, Christmas)
const YEARLY_ORDER = [0, 1, 2, 3, 4];

export function CycleHoliday(): React.JSX.Element {
    // State to track current holiday index
    const [currentHolidayIndex, setCurrentHolidayIndex] = useState<number>(0);

    // Function to cycle by alphabet
    const cycleByAlphabet = () => {
        // Find current position in alphabetical order
        const currentPosition = ALPHABETICAL_ORDER.indexOf(currentHolidayIndex);
        // Calculate next position with wraparound
        const nextPosition = (currentPosition + 1) % ALPHABETICAL_ORDER.length;
        // Update current holiday index
        setCurrentHolidayIndex(ALPHABETICAL_ORDER[nextPosition]);
    };

    // Function to cycle by year
    const cycleByYear = () => {
        // Find current position in yearly order
        const currentPosition = YEARLY_ORDER.indexOf(currentHolidayIndex);
        // Calculate next position with wraparound
        const nextPosition = (currentPosition + 1) % YEARLY_ORDER.length;
        // Update current holiday index
        setCurrentHolidayIndex(YEARLY_ORDER[nextPosition]);
    };

    return (
        <div>
            <div style={{ marginBottom: "1rem" }}>
                Holiday: {HOLIDAYS[currentHolidayIndex]}
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
                <Button onClick={cycleByAlphabet}>Advance by Alphabet</Button>
                <Button onClick={cycleByYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
