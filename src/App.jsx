import './App.css'

function App() {
  const handleAddUser = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user)

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }

  return (
    <>
      <h1>Users</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Your Name' />
        <input type="email" name="email" placeholder='Your Email' />
        <input type="submit" value="Add Users" />
      </form>
    </>
  )
}

export default App
