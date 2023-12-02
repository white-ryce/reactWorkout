
import {useState } from 'react';
import '../styles/WorkoutCardStyle.css'

/* Props passed in from the App.tsx to indicate the title and ID of a workout. To be used in function WorkoutCard*/
interface Props
{
    title:string;
    workoutID:number;
}

/* Used to display the max of a lift as well as the ID of the lift in the console*/
function setSelectedIndex(workoutID: number, max:string)
{
   console.log('Max:',max)
   console.log('ID:', workoutID)
}


/* Main function of the component. The return function is being use to generate the card for each individual card whose data in filled in by the props*/
function WorkoutCard({title,workoutID}:Props)
{
    
    const[max,setMax] = useState('');

    return (
        <>
            <div className="card workOutCardStyle">
                <div className='card-body'>
                    <h5 className='card-title titleStyle'>{title}</h5>
                    <form>
                        <label> Please enter max for {title}</label>
                        <div className = "input-group"><input type='text' value={max} onChange={(e) => setMax(e.target.value)}></input><div className = "input-group-text">Lbs</div></div>
                        <button type="button" className="btn btn-outline-primary" onClick={() =>setSelectedIndex(workoutID,max)}>Submit</button>
                    </form>
                    <p>{max}</p>
                    
                </div>
            </div>
        </>
    )
}

export default WorkoutCard;

/*
<p className="card-text"> Please enter your pr {title}. </p>
                    <div className='inputStyle'><div className = 'input-group'><input type="text" className="form-control"></input><span className='input-group-text'>Lbs</span></div></div>
                    <button type="button" className="btn btn-outline-primary" onClick={() => setSelectedIndex(workoutID)}>Submit</button>
*/