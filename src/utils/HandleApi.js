import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data);
        setToDo(data)
    })
}

const addToDo = (text, setText, setToDo) =>{

    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllToDo(setToDo)
    })
    .catch((error) => console.log(error))

}


const updateToDo = (todoID, text, setToDo, setText, setIsUpadating) =>{

    axios
    .post(`${baseUrl}/update`, {_id: todoID,text})
    .then((data) => {
        setText("")
        setIsUpadating(false)
        getAllToDo(setToDo)
    })
    .catch((error) => console.log(error))

}

const deleteToDo = (_id, setToDo) =>{

    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        console.log(data)
        getAllToDo(setToDo)
    })
    .catch((error) => console.log(error))

}



export {getAllToDo, addToDo, updateToDo, deleteToDo}