import React , {useState} from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import clasess from './AddUser.module.css'

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
          return
        }
        if (+enteredAge < 1) {
          return
        }
        props.onAddUser(enteredUserName, enteredAge)
        setEnteredUserName('')
        setEnteredAge('')
    }

    const userNameChangeHandler = (event) => {
      setEnteredUserName(event.target.value)
    }

    const ageChangeHandler = (event) => {
      setEnteredAge(event.target.value)
    }


  return (
    <div>
    <ErrorModal title='An error occured!' message = 'Something whent wrong!'/>
   <Card className={clasess.input}>
    <form onSubmit={addUserHandler}> 
      <label htmlFor="username">Username</label>
      <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler}/>
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
      <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
  );
};

export default AddUser
