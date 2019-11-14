import React, {useContext} from  "react"
import  {Context} from './Context'


const Home = () => {
    const {onChange, onClick, text} =  useContext(Context)
    return (
       <div style = {{height: "100vh", display: "flex", flexDirection: "column",alignItems: "center", justifyContent: 'center', color: "blue"}}>
           <h1 className = "alex">{text}</h1>
           <input onChange = {onChange}/>
           <button onClick = {onClick}>submit</button>
        </div>
   )
}

export default Home

