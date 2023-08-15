import '/src/styles/App.css'; 
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import PracticalExperience from './PracticalExperience';
import { SubmitButton } from './Buttons';

let initialName = {
  firstName: 'Ducky',
  lastName: 'McQuackerman'
}
let initialEmail = 'dmcquack@quacker.tv';
let initialPhone = '1234567890'
let initialEducation = [
  {
    id: 1,
    schoolName: 'Southern DeQuack U',
    subject: 'Duck Studies',
    degree: 'MA',
    startDate: '2018-01-01',
    endDate: '2022-01-01'
  },
  {
    id: 2,
    schoolName: 'Altitudian Fortitude University', 
    subject: 'Pre-Duck Studies', 
    degree: 'BA', 
    startDate: '2012-01-01', 
    endDate: '2016-01-01'
  }
]
let initialExperience = [
  {
    id: 1,
    companyName: 'Dorks, LLC',
    position: 'Assistant Dork',
    responsibilities: 'did stuff etc etc etc more lines etc etc etc etc',
    startDate: '2001-01-01',
    endDate: '2015-10-01',
  },
  {
    id: 2,
    companyName: "People's Peeknuckle Inc",
    position: 'Junior Knuckle',
    responsibilities: 'did stuff etc etc etc more lines etc etc etc etc',
    startDate: '1995-01-01',
    endDate: '1999-02-01',
}
]


export default function App() {
  
  return (
    <div className='container'>
      <PersonalInfo
        initialName={initialName}
        initialEmail={initialEmail}
        initialPhone={initialPhone}
      />
      <Education 
        initial={initialEducation}
      />
      <PracticalExperience 
        initial={initialExperience}
      />
      <SubmitButton />
    </div>
  )
}

