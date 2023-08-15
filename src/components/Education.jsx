import { useState } from 'react';
import { AddOrgButton, EditButton } from "./Buttons"

export default function Education(props) {
    const [education, setEducation] = useState(props.initial)
    const [editMode, setEditMode] = useState(true)

    
    function handleEditModeToggle() {
        const toggle = editMode ? false : true;
        setEditMode(toggle);
    }

    function handleAddEducation() {
        const nextObjId = education.at(-1).id + 1;
        setEducation([
            ...education,
            {id: nextObjId, schoolName:'', subject:'', degree:'', startDate:'', endDate:''}
        ])
        console.log(education)
    }
    
    function handleEducationInput(e, ind) {
        setEducation(education.map((item, i) => {
            if (i === ind) {
                return ({
                    ...item,
                    [e.target.name]: e.target.value
            })
            }
            return item;
        }))     
    }   

    return(
        <div className="section">
            <form>
                <EditButton onEditModeToggle={handleEditModeToggle}/>
                <ul className='editable-input'>
                    {education.map((item, index) => (
                        <li className='org' key={index}>
                            {editMode ? (
                                <>
                                    <label> School Name: 
                                        <input value={item.schoolName} name='schoolName' onChange={(e) => handleEducationInput(e, index)}/>
                                    </label>
                                    <label> Subject: 
                                        <input value={item.subject} name='subject' onChange={(e) => handleEducationInput(e, index)}/>
                                    </label>
                                    <label> Degree: 
                                        <input value={item.degree} name='degree' onChange={(e) => handleEducationInput(e, index)}/>
                                    </label>
                                    <label> Start Date: 
                                        <input type='date' value={item.startDate} name='startDate' onChange={(e) => handleEducationInput(e, index)}/>
                                    </label>
                                    <label> End Date: 
                                        <input type='date' value={item.endDate} name='endDate' onChange={(e) => handleEducationInput(e, index)}/>
                                    </label>
                                </>
                            ) : (
                                <>
                                    <label> School Name: 
                                        <span> {item.schoolName}</span> 
                                    </label>
                                    <label> Subject: 
                                        <span> {item.subject}</span>
                                    </label>
                                    <label> Degree: 
                                        <span> {item.degree}</span>
                                    </label>
                                    <label> Start Date: 
                                        <span> {new Date(item.startDate).toLocaleDateString(
                                            'en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }
                                        )}
                                        </span>                                     
                                    </label>
                                    <label> End Date: 
                                        <span> {new Date(item.endDate).toLocaleDateString(
                                            'en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }
                                        )}
                                        </span>                           
                                    </label>
                                </>
                            )
                            }
                        </li>
                    ))}
                </ul>
                {editMode && <AddOrgButton orgType='education' onAddOrg={handleAddEducation} />}
            </form> 
        </div>
    )
}