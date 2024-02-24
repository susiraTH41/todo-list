import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect} from "react";

const baseUrl = 'https://65d5ee9df6967ba8e3bcfedb.mockapi.io';

function Edit() {
    const {id} = useParams()
    const [todo, setTodo] = useState({
        name :''
    })

    async function fetchTodo(toDoId){
        try {
          const response = await axios.get(`${baseUrl}/todos/${toDoId}`)
          setTodo(response.data)
        } catch (error) {
          console.log('error', error)
        }
    }

    async function updateName(toDoId){
        try {
          await axios.put(`${baseUrl}/todos/${toDoId}`,{
            name: todo.name
          })
          alert('Update successful!')
        } catch (error) {
          console.log('error', error)
        }
    }


    useEffect(() =>{
        fetchTodo(id)
    }, [id])

    function handleNameChange(event){
        setTodo((previousState) => ({
            ...previousState, 
            name:event.target.value
        }))
    }

    return(
        <>
            <div>Hello Edit page{id}</div>
            <div>
                {todo.name}
            </div>
            <div>
                <input 
                    type='text' 
                    onChange={handleNameChange}
                    value={todo.name}/>
                {todo.status}
            </div>
            <button onClick={() => updateName(id)}>Edit</button>

        </>
    )
}
export default Edit