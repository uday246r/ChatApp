import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {

  const [messages, setMessages] = useState<string[]>([]);
  const wsRef = useRef<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(()=>{
    const ws =new WebSocket("ws://localhost:8080")
    ws.onmessage = (event) => {
      setMessages((m)=> [...m, event.data])
    }
    ws.onopen = () =>{
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }));
    };
    // @ts-ignore
        wsRef.current = ws;

        return() =>{
          ws.close()
        }

  },[]);
  return (
    <div className="h-screen bg-black">
      <br/><br/><br/>
      <div className="h-[85vh]">
        { messages.map((message,i)=><div className="m-8" key={i}>
          <span className="bg-white text-black rounded p-4">
            {message}
            </span>
            </div>)}
      </div>
      <div className="w-full bg-white flex">
        <input ref={inputRef} className="flex-1 p-4"></input>
        <button className="bg-purple-600 text-white p-4" onClick={()=>{
              // @ts-ignore

          const message = inputRef.current?.value;
              // @ts-ignore

          wsRef.current?.send(JSON.stringify({
            type: "chat",
            payload: {
              message: message
            }
          }))
        }}
          >
          Send Message
          </button>
      </div>
    </div>
  )
}

export default App
