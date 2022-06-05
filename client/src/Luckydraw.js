import React from 'react';

function LuckyDraw({prop1}){
    
return(<div>
    <h3> Select winner </h3>
    <button onClick={(e)=>{ prop1();
    }}>
        finalize Winner!
    </button>
    <small>Note :only admin can invoke this function</small>
</div>

)

}

export default LuckyDraw;