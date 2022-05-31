


function Users (props){

    return(

        <table border="1">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>City</th>
                <th>ContactPhone</th>
            </tr>

            {props.users.map((user, key) =>{

                return (

                            <tr><td>{key}</td><td>{user.name}</td><td>{user.email}</td><td>{user.username}</td><td>{user.address["city"]}</td></tr>
                    )
                })
            }

        </table>


    )
}
export default Users;