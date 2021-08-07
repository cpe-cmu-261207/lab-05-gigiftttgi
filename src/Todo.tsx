import { ChangeEvent, MouseEvent, useState } from "react";
import { toEditorSettings } from "typescript";
import { Task } from "./Task";


interface Todo {
    text : string;
    done : boolean;
    delete : boolean;
}

const Alltodo : Array<Todo> = []


export const Todo: React.FC = () => {
    const [todo,settodo] = useState(Alltodo)

    const doneTodo = (selectedTodo: Todo) => {
        todo.push({text : selectedTodo.text ,done: true, delete: false})
        const newTodo = todo.map(todo => {
          if (todo === selectedTodo) {
            return {
                ...todo,
                delete : !todo.delete,
            };
          }
          return todo;
        });
        settodo(newTodo);
    };

    const delTodo = (selectedTodo: Todo) => {
        const newTodo = todo.map(todo => {
          if (todo === selectedTodo) {
            return {
              ...todo,
              delete: !todo.delete,
            };
          }
          return todo;
        });
        settodo(newTodo);
      };

    const [newtodo,setnewtodo] = useState("")
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setnewtodo(ev.target.value)
    }

    const AddTodo = (text: string) => {
        const newTodo = { text ,done: false,delete: false};
        Alltodo.unshift(newTodo)
        };


    const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(newtodo=="")
            alert('Write something...');
        else
            {
                //alert(newtodo);
                //console.log(newtodo)
                AddTodo(newtodo)
                setnewtodo('');
            }    
      };

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if(ev.keyCode == 13)
        {
            if(newtodo=="")
                alert('Write something...');
            else
            {
                //alert(newtodo);
                //console.log(newtodo)
                AddTodo(newtodo)
                setnewtodo('');
            } 
        }
    }

    return(

        <div className='mx-auto max-w-4xl'>

        {/* task input and add button */}
        <div className='flex space-x-1'>
          <input className='border border-gray-400 w-full text-2xl' type='text'
            onKeyDown={onKeyDownCallback} onChange={handleChange} value={newtodo}></input>
          <button className='border border-gray-400 w-8 font-bold' onClick = {handleMouseEvent}>+</button>
        </div>

        {<Task todos={todo} donetodo={doneTodo} deltodo={delTodo}></Task>}

        {/* {Alltodo.map(todo => <Task key={todo.text} todos={todo} donetodo={doneTodo} deltodo={delTodo}></Task>)} */}

        </div>
    );
};

