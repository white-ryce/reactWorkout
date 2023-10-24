
import { useState } from 'react';
import '../styles/WorkoutCardStyle.css'

interface Props
{
    title:string;
    workoutID:number;
}

function setSelectedIndex(workoutID: number, max:string)
{

    const stats = [workoutID,max];
    console.log(stats);
}



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