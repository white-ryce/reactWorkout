import '../styles/HeaderStyle.css'

interface Props{
    readFilePractice:()=>void;
}

function Header({readFilePractice}:Props)
{
    return (
        <>
        <div className="headerStyle">
            
                <div className='row'>
                    <div className='col text-start'>
                        <h1 className='headerText'>Ryan's Workout Logs</h1>
                    </div>
                    <div className='col text-end'>
                        <button type="button" className="btn btn-info topButton" onClick={() => readFilePractice()}>Toggle Dark Mode</button>
                    </div>
                </div>
                    
        </div>
        </>
        
    )
}

export default Header;