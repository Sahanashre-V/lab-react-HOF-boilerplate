import { Component } from "react";
import userData from "./Component/Data";
import Prog1 from "./Component/Pro1";
import Prog2 from "./Component/Pro2";
import Prog3 from "./Component/pro3";
import Prog4 from "./Component/pro4";
import Prog5 from "./Component/Prog5";


class App extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <Prog1 value={userData}/>
                <Prog2 value={userData}/>
                <Prog3 value={userData}/>
                <Prog4 value={userData}/>
                <Prog5 value={userData}/>

            </div>
        )
    }
}

export default App