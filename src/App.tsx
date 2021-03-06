import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query'
import {TodoListPage} from './pages/todoList.page';
import {Global} from './App.styles';

const queryClient = new QueryClient();

export const App = () => {
    return (
        <div>
            <Global/>
            <QueryClientProvider client={queryClient}>
                <TodoListPage/>
            </QueryClientProvider>
        </div>
    );
};