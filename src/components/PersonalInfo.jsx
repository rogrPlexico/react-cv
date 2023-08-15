import { EditButton } from "./Buttons";
import { useState } from 'react';

export default function PersonalInfo(props) {
    const [fullName, setFullName] = useState(props.initialName);
    const [email, setEmail] = useState(props.initialEmail)
    const [phone, setPhone] = useState(props.initialPhone);
    const [editMode, setEditMode] = useState(true)
    
    
    function handleEditModeToggle() {
        const toggle = editMode ? false : true;
        setEditMode(toggle);
    }
    
    function handlePersonalInfoInput(e) {
      if (e.target.name === 'firstName'|| e.target.name === 'lastName') {
        setFullName({
            ...fullName,
            [e.target.name]: e.target.value
        })
      } else if (e.target.name === 'email') {
        setEmail(e.target.value)
      } else if (e.target.name === 'phone') {
        setPhone(e.target.value)
      }
    }

    return (
        <div className="section">
            <EditButton onEditModeToggle={handleEditModeToggle}/>
            <form className='editable-input'>
                {editMode ? (
                    <>
                        <label> First Name: 
                        <input value={fullName.firstName} name='firstName' onChange={handlePersonalInfoInput} />
                        </label>
                        <label> Last Name: 
                            <input value={fullName.lastName} name='lastName' onChange={handlePersonalInfoInput}/>
                        </label>
                        <label> Email: 
                            <input value={email} name='email' onChange={handlePersonalInfoInput}/>
                        </label>
                        <label> Phone: 
                            <input value={phone} name='phone' onChange={handlePersonalInfoInput}/>
                        </label>
                    </>
                ) : (
                    <>
                        <label> First Name: 
                            <span> {fullName.firstName}</span>
                        </label>
                        <label> Last Name: 
                            <span> {fullName.lastName}</span>
                        </label>
                        <label> Email: 
                            <span> {email}</span>
                        </label>
                        <label> Phone: 
                            <span> {phone}</span>
                        </label>
                </>
                )}
            </form> 
        </div>
    )
}