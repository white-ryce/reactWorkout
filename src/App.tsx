
import './App.css'
import './components/Header'
import Header from './components/Header'
import WorkoutCard from './components/WorkoutCard'
import raw from './textFiles/testFile.txt'

var x = 'Test Stuff'

function writePractice()
{
    fetch(raw)
    .then(r => r.text())
    .then(text => {
      x = text;
      return x;
    })
    console.log("x:")
    console.log(x)

}


function App(){

  

  return (
    <>
      <div className='siteWrap'>
        <Header readFilePractice={writePractice}/>
        <div className='container workoutItems'>
          <div className='row'>
            <div className = 'col'>
              <WorkoutCard title='Bench Press' workoutID={0}/>
            </div>
            <div className = 'col'>
              <WorkoutCard title='Squat' workoutID={1}/>
            </div>
          </div>
          <div className='row'>
            <div className = 'col'>
              <WorkoutCard title='Deadlift' workoutID={2}/>
            </div>
            <div className = 'col'>
              <WorkoutCard title='Shoulderpress' workoutID={3}/>
            </div>
          </div>
        </div>
        <p>{x}</p>
      </div>
    </>
  )
}

export default App

/* Unused footer for the site does not work properly when in mobile view */
/*
<div className='footerStyle'>
          <Footer/>
        </div>
*/
