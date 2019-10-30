import React from 'react';

export default function Retired(props) {
  return (
    <table className="table">
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
        {props.quittingList.map((patient, index) => (
          <tr key={patient.historyNumber}
           onClick={props.onRowSelect.bind(null, patient)}
           className={props.rowSelected.historyNumber === patient.historyNumber ? "rowSelected" : "" }>
            <td className = "number">{patient.historyNumber}</td>
            <td>{patient.firstName} {patient.lastName} {patient.patrName}</td>
            <td>{patient.cause}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}