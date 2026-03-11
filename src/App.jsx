
import './App.css'

function App() {

  return (
    <>
      
      <h1>React Core Concepts</h1>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name='Milton' tech='Java'></Developer>
      <Developer name='Shoaib' tech='JavaScript'></Developer>
      <Developer name='Salauddin' tech='Python'></Developer>
      <Developer name='Jhonker' tech='C'></Developer>
      <Device name='Samsung' price='1,45,000'></Device>
      <Device name='Apple' price='2,50,000'></Device>
      <Device name='Xiaomi' price='90,000'></Device>

    </>
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
  // console.log(props)
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
