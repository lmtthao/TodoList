import React, { useCallback, useState } from 'react';
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import ToDoList from './component/TodoList';
import { v4 } from 'uuid';

function App() {
    const [todoList, setTodoList] = useState([]);
    const [textInput, setTextInput] = useState("");

    const onTextInputChange = useCallback((e) => { setTextInput(e.target.value); }, []);

    const onAddBtnClick = useCallback((e) => {
        //them text input vao danh sach todoList
        setTodoList([...todoList, { id: v4(), name: textInput, isCompleted: false }, ...todoList,]);
        setTextInput("");
    },[textInput, todoList]);
    return (
        <>
            <h3>Danh sách cần làm</h3>
            <Textfield name="add-todo"
                placeholder="Thêm việc cần làm..."
                elemAfterInput={
                    <Button isDisabled={!textInput}
                        appearance="primary" onClick={onAddBtnClick}>Them</Button>}
                value={textInput}
                onChange={onTextInputChange}
            />
            <ToDoList todoList={todoList}></ToDoList>
        </>
    );
}

export default App;
