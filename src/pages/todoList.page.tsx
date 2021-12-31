import React from 'react';
import {TodoComponent} from '../components/todo/todo.component';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #010920;
  height: 100vh;
`;

export const TodoListPage = () => {
    return (
        <Container>
            <TodoComponent />
        </Container>
    );
};
