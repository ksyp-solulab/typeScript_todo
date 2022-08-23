import React, { useRef } from 'react'
import './styles.css'
interface Props{
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handelAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handelAdd}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={(e) => {
        handelAdd(e);
        inputRef.current?.blur();
      }}>
        <input type="text" placeholder="Enter a task"  ref={inputRef}  className="input__box"    onChange={(e) => setTodo(e.target.value)}    value={todo}/>
        <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  )
}

export default InputField