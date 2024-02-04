import { useState, useEffect } from 'react'
import './App.css'

function App() {

  interface allUsersArray {
    id: number,
    name: string,
    address: string
}

  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [allUsers, setAllUsers] = useState<allUsersArray[]>([]);


  useEffect(() => {
    fetchInfoFromDB();
  }, [])
  const fetchInfoFromDB = (): void => {
    fetch("http://localhost:8080/student/getAll", {
      method: "GET" 
    })
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setAllUsers(data);
    })
  }


  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const userData = {
      name,
      address,
    };
    
    //FETCH POST TO SPRING BOOT SERVER yayae
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
    //.then(res => res.json()) if response from server is sent maybe
    .then(res => res.json())
    .then(data => {
      setAllUsers([...data]);
    })

    setName("");
    setAddress("");
  }



  return (
    <div className="main-container">
      <h3>React typescript and Spring Boot backend REST skeleton</h3>
      <form className='form' onSubmit={handleFormSubmit}>
        <label>Name: </label>
        <input className='inputs' type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>Address: </label>
        <input className='inputs' type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)}></input>
        <button className="btn" type="submit">Post</button>
      </form> 
      <div className="get-info-container"> {/* array for requested info and map over array to display */}
        {allUsers[0] ? 
        <div className="text-container">
          <p>name</p>
          <p>address</p>
         </div>
        : 
        <></>
        }
      
        {allUsers.map(user => (
          <div className="display-container" key={user.id}>
            <input className='inputs-two' type='text' readOnly value={user.name}></input>
            <input className='inputs-two' type='text' readOnly value={user.address}></input>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
