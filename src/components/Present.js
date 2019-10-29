import React from 'react';
import '../App.css';

export default function Present(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>
            № ИБ
          </th>
          <th>
            ФИО
          </th>
          <th>
            Палата
          </th>
        </tr>
      </thead>
      <tbody>
        {props.presentList.map((patient,index) => (
          <tr key={patient.historyNumber}
           onClick={props.onRowSelect.bind(null, patient)}>
            <td className = "number">{patient.historyNumber}</td>
            <td>{patient.firstName} {patient.lastName} {patient.patrName}</td>
            <td>{patient.bedNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}