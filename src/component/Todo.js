import React from 'react';
import Button from '@atlaskit/button';

export default function ToDo({ todo }) {
    return <Button shouldFitContainer>{todo.name}</Button>
}