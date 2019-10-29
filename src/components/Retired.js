import React from 'react';

export default function Retired(props) {
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
            Причина выбывания
          </th>
        </tr>
      </thead>
      <tbody>
        {props.quittingList.map(patient => (
          <tr key={patient.historyNumber}>
            <td className = "number">{patient.historyNumber}</td>
            <td>{patient.firstName} {patient.lastName} {patient.patrName}</td>
            <td>{patient.cause}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}