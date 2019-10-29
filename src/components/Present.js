import React from 'react';

export default function Present(props) {
  return (
    <table className="table table-hover table-fixed">
      <thead className="thead-dark">
        <tr>
          <th>
            №
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
        {props.presentList.map(patient => (
          <tr key={patient.historyNumber}>
            <td>{patient.historyNumber}</td>
            <td>{patient.firstName} {patient.lastName} {patient.patrName}</td>
            <td>{patient.bedNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}