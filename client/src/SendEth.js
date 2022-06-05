import React ,{useState} from'react';
import App from './App';
function Sendeth({prop1}){

const [ether,SetEther]=useState(null);

const submit= e=>{
    e.preventDefault();
    prop1(ether);  
}


    return(<div>
    <h2>Enter the Lottery</h2>
    <form onSubmit={(e)=>{submit(e)
    }}>
        <label>Enter ammount of ether</label>
        <input type="text" id="ether" onChange={(e)=>{SetEther(e.target.value.toString().concat("000000000000000000"))
    }}></input>
        <button type="submit">Submit</button>
    </form>
    </div>
    )

}

export default Sendeth