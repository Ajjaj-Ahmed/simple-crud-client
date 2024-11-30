import { useLoaderData } from "react-router-dom";

const Users = () => {
    const handleDelete=(id)=>{
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('deleted successfull')
            }else{
                alert("Can't Deleted")
            }
        })
    }
    const users = useLoaderData();
    return (
        <div>
            <h2>Users:{users.length}</h2>
            {
                users.map(user=><p key={user._id}>
                    Name: {user.name} Email:{user.email} <button onClick={()=>handleDelete(user._id)}>X</button>
                    </p>)
            }
        </div>
    );
};

export default Users;