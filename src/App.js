import { useState } from "react"





function App() {

  const [messages, setMessages] = useState([
		{
			id: 1,
			text: 'hello',
			author: 'author',
			side: 'outbox',
		},
		{
			id: 2,
			text: 'hi',
			author: 'user',
			side: 'inbox',
		},
		{
			id: 3,
			text: 'how are you ?',
			author: 'author',
			side: 'outbox',
		},
		{
			id: 4,
			text: 'i am fine',
			author: 'user',
			side: 'inbox',
		},
	])
  const deleteMessage = (id) =>{
    setMessages (
      messages.filter (item => {
        if (item.id === id) {
          return false ;
        }
        return item ;
      })
    )
  }
  
  
  
  
  return (
		<div className='App'>
			<div className='flex'>
				<div className='container'>
					{ messages.map (message => {
  return (
      <div className= {`row ${message.side === 'inbox' ? 'justify-content-end':''}`}>
        <div className='col-5'>
          <div className={message.side}>
          {message.text}
          <div>{message.author}</div>
          <button className="btn btn-danger" onClick={()=> deleteMessage (message.id) }>X</button>
            </div>
        </div>
      </div>
    )
  })
					}
				</div>
			</div>
		</div>
	)
}

export default App
