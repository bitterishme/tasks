import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={(e) => {
                    setEditMode(e.target.checked);
                }}
            />

            {!editMode ?
                <div>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </div>
            :   <div>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Check
                        type="checkbox"
                        id="student-checkbox"
                        label="Is student"
                        checked={isStudent}
                        onChange={(e) => {
                            setIsStudent(e.target.checked);
                        }}
                    />
                </div>
            }
        </div>
    );
}
