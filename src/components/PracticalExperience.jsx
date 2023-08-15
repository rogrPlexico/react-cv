import { useState } from 'react';
import { AddOrgButton, EditButton } from "./Buttons";

export default function PracticalExperience(props) {
    const [experience, setExperience] = useState(props.initial)
    const [editMode, setEditMode] = useState(true)

    
    function handleEditModeToggle() {
        const toggle = editMode ? false : true;
        setEditMode(toggle);
    }

    function handleAddExperience() {
        const nextObjId = experience.at(-1).id + 1;
        setExperience([
            ...experience,
            {id: nextObjId, companyName:'', position:'', responsibilities:'', startDate:'', endDate:''}
        ])
    }

    function handleExperienceInput(e, ind) {
        setExperience(experience.map((item, i) => {
            if (i === ind) {
                return ({
                    ...item,
                    [e.target.name]: e.target.value
            })}
           return item;
         }))
}
    
    return(
        <div className="section">
            <form>
                <EditButton onEditModeToggle={handleEditModeToggle}/>
                <ul className='section editable-input'>
                    {experience.map((item, index) => (
                        <li className='org' key={index}>
                             {editMode ? (
                                <>
                                    <label> Company Name: 
                                        <input value={item.companyName} name='companyName' onChange={(e) => handleExperienceInput(e, index)}/>
                                    </label>
                                    <label> Position: 
                                        <input value={item.position} name='position' onChange={(e) => handleExperienceInput(e, index)}/>
                                    </label>
                                    <label> Responsibilities: 
                                        <textarea value={item.responsibilities} name='responsibilities' onChange={(e) => handleExperienceInput(e, index)}/>
                                    </label>
                                    <label> Start Date: 
                                        <input type='date' value={item.startDate} name='startDate' onChange={(e) => handleExperienceInput(e, index)}/>
                                    </label>
                                    <label> End Date: 
                                        <input type='date' value={item.endDate} name='endDate' onChange={(e) => handleExperienceInput(e, index)}/>
                                    </label>
                                </>
                             ) : (
                                <>
                                    <label> Company Name: 
                                        <span> {item.companyName}</span>
                                    </label>
                                    <label> Position: 
                                        <span> {item.position}</span>
                                    </label>
                                    <label> Responsibilities: 
                                        <span> {item.responsibilities}</span>
                                    </label>
                                    <label> Start Date: 
                                        <span> {new Date(item.startDate).toLocaleDateString(
                                            'en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }
                                        )}
                                        </span>                                     </label>
                                    <label> End Date: 
                                        <span> {new Date(item.endDate).toLocaleDateString(
                                            'en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }
                                        )}
                                        </span>                                     </label>
                            </>
                            )}
                        </li>
                    ))}
                </ul>
                {editMode && <AddOrgButton orgType='experience' onAddOrg={handleAddExperience} />}
            </form> 
        </div>
    )
}