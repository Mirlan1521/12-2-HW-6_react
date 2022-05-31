import {useState} from "react";
import Users from "../users/Users";






const URL = 'https://jsonplaceholder.typicode.com/users';


function UsersPage () {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        fetch(URL).then(response => response.json()).then(data => setUsers(data))

    }



    return (

        <div>

            <button onClick={getUsers}>get users</button>

            {/*<Users users={users}/>*/}

            <Users users={users}/>

        </div>
    )
}


export default UsersPage;