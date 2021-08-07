import React, { MouseEvent } from 'react';
import { getDefaultFormatCodeSettings, nodeModuleNameResolver } from 'typescript';

interface Todo {
    text : string;
    done : boolean;
    delete : boolean;
}

type doneTodo = (selectedTodo: Todo) => void;
type delTodo = (selectedTodo: Todo) => void;

interface prop {
    todos : Todo[]
    donetodo : doneTodo
    deltodo : delTodo
}


export const Task : React.FC<prop> = ({todos,donetodo,deltodo}) => {
    
    return(
        <div>
            {todos.map(todo => 
          <div className="flex justify-between h-8 items-center py-6 border-b" style={{ display: todo.delete? 'none' : undefined }}>
            <span className="text-2xl" style={{ textDecoration: todo.done? 'line-through' : undefined }}> {todo.text} </span>
            <div className="flex space-x-1 items-center opacity-0 hover:opacity-100" id="btn" /*onMouseOver={MouseEvent} onMouseOut={handleMouseEvent}*/>
              <button className="bg-green-400 w-24 text-2xl" style={{ display: todo.done? 'none' : undefined}} 
                    onClick = {() => donetodo(todo)}  id='butt'>Done</button>
              <button className="bg-red-400 w-24 text-2xl" style={{ display: todo.done? 'none' : undefined}} 
                    onClick = {() => deltodo(todo)}  id='butt'>Delete</button>
            </div>
          </div>)}
      </div>
    );
};