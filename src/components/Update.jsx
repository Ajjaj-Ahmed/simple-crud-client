import { useLoaderData } from "react-router-dom";

const Update = () => {
    const user = useLoaderData();
    const handleUpdate=(event)=>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const updatedUser={name, email};
            console.log(name,email)

            fetch(`http://localhost:5000/users/${user._id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                    },
                body:JSON.stringify(updatedUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.modifiedCount>0){
                    alert('User updated')
                    form.reset()
                }
            })
    }
    return (
        <div>
            <p>Update user for: {user?.name}</p>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={user?.name} /> <br />
                <input type="email" name="email" defaultValue={user?.email} /> <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;