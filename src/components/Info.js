import React from 'react';

export default (props) => (
    
    <div>
    <p>ФИО {props.patient && <b>{props.patient.firstName + ' ' + props.patient.lastName + ' ' + props.patient.patrName}</b>}
    </p>
    <p>Возраст {props.patient && <b>{props.getNumberYears(props.patient.birthDate)}</b>}
    </p>
    <p>Диагноз {props.patient &&<b>{props.patient.diagnosis}</b>}
    </p>
  </div>
)