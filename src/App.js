import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import NameCard from './components/NameCard';
import { useSelector } from "react-redux";
import ChatBot from './components/ChatBot';

function App() {
    const state = useSelector(state => state);
console.log('##ABEL## >> App >>  App', state);
    return (
        <div className="App">
            <main className="container">

                <Counter/>

                <div className="divider"></div>

                <NameCard/>

                <div className="divider"></div>

                {/* Please check /views/TodoList.js for detail*/}
                <TodoList/>

                <div className="divider"></div>

                <ChatBot/>
            </main>
        </div>
    );
}

export default App;
