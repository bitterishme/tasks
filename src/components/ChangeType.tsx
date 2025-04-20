import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    // Initialize state with short_answer_question as required
    // Using type assertion to tell TypeScript this is a valid QuestionType
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question" as QuestionType,
    );

    // Function to toggle between question types
    const toggleQuestionType = () => {
        if (questionType === "multiple_choice_question") {
            setQuestionType("short_answer_question" as QuestionType);
        } else {
            setQuestionType("multiple_choice_question" as QuestionType);
        }
    };

    return (
        <div>
            <div style={{ marginBottom: "1rem" }}>
                {questionType === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </div>
            <Button
                onClick={() => {
                    toggleQuestionType();
                }}
            >
                Change Type
            </Button>
        </div>
    );
}
