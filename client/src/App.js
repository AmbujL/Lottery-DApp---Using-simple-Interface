import React, { useState ,useEffect } from "react";
import LotteryContract from "./contracts/Lottery.json";
import getWeb3 from "./getWeb3";

import "./App.css";
import Balance from "./Balance";
import Sendeth from "./SendEth";
import LuckyDraw from "./Luckydraw";

function App(){

const [count,setCount]=useState(0);
const [web3, setWeb3]= useState(undefined);
const [accounts,setAccounts] = useState([]);
const [instance,setInstance] = useState(undefined);
const [balance ,setBalance] = useState(undefined);
// const [sendether,setSendether]= usestate(undefined);
    var temp = count;
useEffect( ()=>{
    const init = async ()=>{
        try{      
            const web3 = await getWeb3();
            await window.ethereum.enable();
            setCount(JSON.parse(window.localStorage.getItem("count")));
      const accounts = await web3.eth.getAccounts(console.log);

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = LotteryContract.networks[networkId];
     
      const instance = new web3.eth.Contract(
        LotteryContract.abi,
        deployedNetwork && deployedNetwork.address);

         await instance.methods.showBalance().call().then((bal)=>{
            setBalance(web3.utils.fromWei(bal));

            
        })
        setWeb3(web3);
        setAccounts(accounts);
        setInstance(instance);
        }

    catch(error){
         alert('failed to load the web3 object ');
            console.error(error);
        }
    }
init();  
});

const sendEther =(somevalue)=>{
    if(somevalue!=null || somevalue!=undefined)
    { web3.eth.sendTransaction({ from: accounts[0], to: instance._address, value: somevalue }); }

    window.localStorage.setItem("count", count+1);
    setCount(JSON.parse(window.localStorage.getItem("count")))
}



const luckydraw =()=>{
    instance.methods.luckydraw().send({ from: accounts[0] }).then((res) => {
        if (res.status == true)
        {
            window.localStorage.setItem("count", 0);
            alert("transactin successfull");
        }
        else
            alert("transactin failed");
       
    })
    
}



if (typeof web3=='undefined')
{  return<div >
        <h1 >loading..</h1>
        </div>
}     
if(typeof instance == 'undefined')
return <h1>accounts not working</h1>  
    if(typeof accounts == 'undefined')
       { return <h1>accounts not working</h1>}

  


 else { 
     return(<div >
         <h1>
             showing Balance of smart contract 
         </h1>
         <Balance Prop1={instance._address} prop2={balance}></Balance>
        <Sendeth prop1={sendEther}/>
        {
            temp>=2? <LuckyDraw prop1={luckydraw}></LuckyDraw>: <h3>More fund Needed to select a Winner......</h3>
        }
    {console.log(count)}
     </div>

     )
    
}

}

export default App;
