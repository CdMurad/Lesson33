import { useState } from "react"

const Input = () => {
  const [todos,setTodos] = useState ([
    {
      id: 1,
      text: 'Html'
    },
    {
      id: 2,
      text: 'Css'
    }
  ])
  const [text,setText] = useState ('')

  const changeHandler = (e) => {
    setText(e.target.value);
    console.log(text);
  }
  const handlerAdd = () => {

    setText ('')
    setTodos ([...todos,{
      text: text 
    }])
  }
  
  return (
    <>
    <label htmlFor="email:">email:</label>
    <input placeholder="email" value={text} type="text" name="1" onChange={(e) => changeHandler (e) }/>
    <button onClick={handlerAdd}>Click</button> 
    {
      todos.map ((todo) => {
        return (
          <div key={todo.id}>{todo.text}</div>
        )
      })
    }
    </>
  )
}









export default Input