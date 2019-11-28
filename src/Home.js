import React, {useContext} from  "react"
import {Context} from './Context'
import {Context2}  from './Context2'


const Home = () => {
    const {onChange, onClick, text} =  useContext(Context)
    const {text2} = useContext(Context2)
    return (
        <div style = {{height: "100vh", display: "flex", flexDirection: "column",alignItems: "center", justifyContent: 'center', color: "blue"}}>
           <h1>text from Context2: {text2}</h1>
           <h1 className = "alex">{text}</h1>
           <input onChange = {onChange}/>
           <button onClick = {onClick}>submit</button>
        </div>
   )
}

export default Home

