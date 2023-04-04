import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const BasicForm = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (values, { resetForm }) => {
    if (!values.todo) {
      return;
    }
    setTodos([...todos, values.todo]);
    resetForm();
  }

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          todo: '',
        }}
        onSubmit={handleAddTodo}
      >
        <Form>
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="todo" placeholder="TextHere" />
          <Button type="submit" variant="contained" size="small" sx={{ ml: 1 }}>Submit</Button>
        </Form>
      </Formik>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo, index)=> (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{todo}</TableCell>
              <TableCell>
                <Button onClick={() => handleDeleteTodo(index)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default BasicForm
