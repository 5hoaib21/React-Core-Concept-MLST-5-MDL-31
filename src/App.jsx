
import './App.css'

function App() {

  return (
    <>
      
      <h1>React Core Concepts</h1>
      {/* <Student></Student> */}
      <Student></Student>
      <Person></Person>
      <Developer name='Shoaib' tech='JavaScript'></Developer>
      <Developer name='Salauddin' tech='Python'></Developer>
      <Developer name='Milton' tech='Java'></Developer>
      <Developer name='Jhonker' tech='C'></Developer>
      <Device name='Samsung' price='1,45,000'></Device>
      <Device name='Apple' price='2,50,000'></Device>
      <Device name='Xiaomi' price='90,000'></Device>
      <Player name='tamim' runs='500'></Player>
      <Player name='Jhonker' runs='600'></Player>
      <Salami event='rojar eid' amount='20'></Salami>
      <Salami event='graduation' ></Salami>
    </>
  )
}
// const {name, runs} = {{name: 'tamim', runs: '500'}}
function Player({name, runs}){

  return(
    <div className='student'> 
      <h2>Name: {name} </h2>
      <p>Runs: {runs}</p>

    </div>
  )
}
 
// const {name, tech} = {name: 'Shoaib', tech: 'JavaScript'}
function Salami({event,amount = 0}){
return(
  <div className='student'>
    <p>salami for:{event} </p>
    <p>Amount: {amount} </p>

  </div>
)

}



function Device (props){
  console.log(props)
  return(
    <div style={{
      border:'2px solid aqua',
      borderRadius: '25px',
      backgroundColor: 'gray',
      
    }}>
      <h2>Brand: {props.name}</h2>
      <p>Price: {props.price}</p>
    </div>
  )
}

function Developer(props){
  console.log(props)
  return(
    <div style={{
      border:'3px solid green',
      borderRadius: '20px'

    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech} </p>
    </div>
  )
}


function Student(){
  return(
    <div className='student'>
      <p>Name:</p>
      <p>Dept:</p>
    </div>
  )
}

function Person (){
  const age = 17;
  const name = 'jalil';

  const personStyle ={
    color: 'red',
    textAlign: 'right'
  }
  return (
    <p style={personStyle}>I am a person: {name} {age}</p>
  )
}

function Sports (){
  return(
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>KOla</li>
        <li>Komola</li>
        <li>Apple</li>
      </ul>
      <p>Playing and loosing</p>
    </div>
  )
}

export default App
