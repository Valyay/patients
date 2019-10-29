import React from 'react';

export default function Retired(props) {
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
            Причина выбывания
          </th>
        </tr>
      </thead>
      <tbody>
        {props.quittingList.map(patient => (
          <tr key={patient.historyNumber}>
            <td>{patient.historyNumber}</td>
            <td>{patient.firstName} {patient.lastName} {patient.patrName}</td>
            <td>{patient.cause}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}