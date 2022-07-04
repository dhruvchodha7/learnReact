 const AddUser = props => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }
    return(
        <form>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"/>
            <label htmlFor="age">Age (Years)</label>
            <input id="username" type="number"/>
            <button type="submit">Add User</button>
        </form>
    )
 };

 export default AddUser;