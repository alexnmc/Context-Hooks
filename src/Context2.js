import React, {Component} from 'react'


const Context2 = React.createContext()


class TextProvider extends Component {
    constructor(){
        super()
        this.state = {
           text2: "Hello from Context2",
           test1: "test1"
        }
    }

    
    render() {
        return (
            <Context2.Provider
                value={{
                   ...this.state
                }}>
                {this.props.children}
            </Context2.Provider>
        )
    }
}

export {Context2, TextProvider}



