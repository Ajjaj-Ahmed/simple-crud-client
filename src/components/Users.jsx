import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();

    const [users,setUsers] = useState(loadedUsers)
    

    const handleDelete=(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('deleted successfull')
                const remain = users.filter(user=> user._id !== id);
                setUsers(remain)

            }else{
                alert("Can't Deleted")
            }
        })
    }
    
    return (
        <div>
            <h2>Users:{users.length}</h2>
            {
                users.map(user=><p key={user._id}>
                    Name: {user.name} Email:{user.email} 
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    <button onClick={()=>handleDelete(user._id)}>X</button>
                    </p>)
            }
        </div>
    );
};

export default Users;