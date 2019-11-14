import React, {useState} from 'react'


const Context = React.createContext()

const TodoProvider = (props) => {
    
    const [state, setState]  = useState(
        {
           text: "",
           text2: "",
        })
    

    const onChange = (e) => {
        setState({
            text2: e.target.value,
            text:"",
           
        })
    }

    const onClick = () => {
        setState({
            text: state.text2,
        })
    }

        return (
            <Context.Provider
                value={{
                   ...state,
                   onChange: onChange,
                   onClick: onClick,
                }}>
                {props.children}
            </Context.Provider>
        )
}

export {Context, TodoProvider}



