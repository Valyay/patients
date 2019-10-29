import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default props => (
	<div>
		<div className="info">
			<h5>ИНФОРМАЦИЯ О ПАЦИЕНТЕ</h5>
			<ArrowBackIosIcon />
		</div>
		<p>
			ФИО{" "}
			{props.patient && (
				<b>
					{props.patient.firstName +
						" " +
						props.patient.lastName +
						" " +
						props.patient.patrName}
				</b>
			)}
		</p>
		<p>
			Возраст{" "}
			{props.patient && <b>{props.getNumberYears(props.patient.birthDate)}</b>}
		</p>
		<p>Диагноз {props.patient && <b>{props.patient.diagnosis}</b>}</p>
	</div>
);