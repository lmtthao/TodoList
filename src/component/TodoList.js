import React from 'react';
import Button from '@atlaskit/button';
import Todo from "./Todo";

export default function ToDoList({ todoList }) {
    return (
        <>
            {todoList.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </>
    );
}
