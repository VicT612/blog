import {v4 as uuidv4} from 'https://jspm.dev/uuid';
const crearBlogs=(titulo, imagen, descripcion, autor)=>{
    return fetch("http://localhost:3000/blogs",{
        method: "POST",
        headers:{
            "Content-type": "aplication/json",
        },
        body:JSON.stringify({titulo, imagen, descripcion, autor, id: uuidv4()}),
    });
};
export const blogsServices={
    crearBlogs,
}