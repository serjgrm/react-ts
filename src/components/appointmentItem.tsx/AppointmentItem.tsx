import { useEffect, useState } from "react";
import { ActiveAppointment } from "../../shared/interfaces/appointment.interface";
import "./appointmentItem.scss";
import dayjs from "dayjs";

function AppointmentItem({
	id,
	name,
	date,
	service,
	phone
}:ActiveAppointment) {
	const [timeLeft, changeTimeLeft] = useState<string|null>(null);
	useEffect(()=>{
	
		const intervalId = setInterval(()=>{
			changeTimeLeft(
				`${dayjs(date).diff(undefined,'h')}:${
					dayjs(date).diff(undefined,'m')%60}
			`);
		},100)

		return ()=>{
			clearInterval(intervalId);
		}
	},[date])
	const formattedDate = dayjs(date).format('DD/MM/YYYY HH:mm');
	return (
		<div className="appointment">
			<div className="appointment__info">
				<span className="appointment__date">Date: {formattedDate}</span>
				<span className="appointment__name">Name: {name}</span>
				<span className="appointment__service">Service: {service}</span>
				<span className="appointment__phone">Phone: {phone}</span>
			</div>
			<div className="appointment__time">
				<span>Time left:</span>
				<span className="appointment__timer">{timeLeft}</span>
			</div>
			<button className="appointment__cancel">Cancel</button>
			{/* <div className="appointment__canceled">Canceled</div> */}
		</div>
	);
}

export default AppointmentItem;
