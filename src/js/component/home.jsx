import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
 
  const [characters, setcharacters] = useState([]); // con un array vacio para que se ponga dentro el contenido
  const [tareas,setTareas ] = useState([]);

  //para llamar a un API y REGISTRAR al usuario
  function createUsers() {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/adri1234",{
		method:"POST",
		body: JSON.stringify([]),
		headers:{
			"Content-Type": "application/json"
		}
	})
      .then((response) => response.json())
      .then((data) => getAllTasks())
      .catch((error) => console.log(error))
  }

  function getAllTasks() {
    fetch ("https://playground.4geeks.com/apis/fake/todos/user/adri1234")
    .then((responder)=> {
      if (responder.ok) {
        return responder.json()
        
      }else {
        if (responder.status=== 404) {
          createUsers()
          
        }
        else{
          console.log("error en la soli", responder.status)
        }
      }
    }
    )
    .then((data)=>setTareas(data) )
    .catch((error) => console.log(error))
    
  }


  useEffect(()=>{
	getAllTasks()
  },[])
console.log(tareas)
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Hello Rigo!</h1>// aqui se pone counter
      que es donde se mostrara
      <a href="#" className="btn btn-success">
        // se añade onclick para añadir la funcion handleCounter If you see this
        green button... bootstrap is working...
      </a>
      <ul>
        {tareas.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
