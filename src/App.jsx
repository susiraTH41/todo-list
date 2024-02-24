// import axios from 'axios'
// import { useState, useEffect } from 'react'
import './App.css';
// import { Link, Route } from "react-router-dom";
import Navbar from './components/Navbar';

// const baseUrl = 'https://65d5ee9df6967ba8e3bcfedb.mockapi.io';

function App() {
  return (
    <>
      <div></div>
    </>

  )
}

// function App() {

//   const [todos, setTodos] = useState([])
//   const [firstName, setFirstName] = useState('');
//   const [isDisable, setIsDisable] = useState();

//   const [isLoading, setIsLoading] = useState(true)
//   async function fetchTodo() {
//     try {
//       const response = await axios.get(`${baseUrl}/todos`)
//       setTodos(response.data)
//       setIsLoading(false)
//     } catch (error) {
//       console.log('error', error)
//     }
//   }

//   async function deleteTodo(id) {
//     try {
//       setIsLoading(true)
//       await axios.delete(`${baseUrl}/todos/${id}`)
//       await fetchTodo()
//       setIsLoading(false)

//     } catch (error) {
//       console.log('error', error)
//     }
//   }


//   async function addName() {
//     try {
//       setIsLoading(true)
//       await axios.post(`${baseUrl}/todos`, {
//         id: todos.length + 1,
//         name: firstName,
//         status: 'status ' + todos.length + 1,
//         check :  isDisable
//       })

//       await fetchTodo()
//       setIsLoading(false)
//       alert('add successful!')

//     } catch (error) {
//       console.log('error', error)
//     }
//   }


//   useEffect(() => {
//     fetchTodo()
//   }, [])
  

//   return (
//     <>
//       {
//         isLoading && (<div>Loading..</div>)
//       }
//       {
//         !isLoading &&
//         <div>
//           <form> 
//             <input type='text'
//             onChange={e => setFirstName(e.target.value)}
//             value={firstName} />

//             <button onClick={() => addName()}>add</button>

//           </form>
//           <br />
//           <div>
//             {
//               todos.map((todo, index) => (
//                 <div key={index}>
//                   <input  type="checkbox"
//                         onChange={() => {setIsDisable(!isDisable);
//                            fetchTodo()}}
//                         checked={todo.check} />
//                   {todo.check ? 
//                    <div style={{ textDecoration: "underline" }}>{todo.id} {todo.name} </div>  :
//                    <div >{todo.id} {todo.name} </div> 
//                   }{todo.status}
//                   <Link to={`/todo/${todo.id}`}>
//                     <button>Edit</button>
//                   </Link>
//                   <button onClick={async () => { deleteTodo(todo.id) }}>
//                     Delete
//                   </button>

//                 </div>
//               ))
//             }

//           </div>
//         </div>
//       }
//     </>
//   )
// }




export default App
