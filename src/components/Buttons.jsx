import { useState } from 'react';

export function EditButton(props) {
    return (
        <button type='button' className='button button-secondary' onClick={props.onEditModeToggle}>Edit</button>
    )
}

export function SubmitButton() {
    return(
        <button type='button' className='button button-primary' >Submit/Save</button>
    )
}

export function AddOrgButton(props) {
    if (props.orgType === 'experience') {
        return <button type='button' className='button button-three' onClick={props.onAddOrg}>Add Company</button>
    }
    return <button type='button' className='button button-three' onClick={props.onAddOrg}>Add School</button>
}
