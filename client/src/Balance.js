import React from "react";

function Balance({Prop1,prop2}){

    return (
      <div>
        <table className="table">
          <thead className="table-header">
            <tr className="table-row">
              <th className="header__item">Address of the smart contract</th>
              <th className="header__item">Balance of the smart contract</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td className="table-data">Contract Address : {Prop1}</td>
              <td className="table-data">Amount: {prop2} Eth</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

}

export default Balance;