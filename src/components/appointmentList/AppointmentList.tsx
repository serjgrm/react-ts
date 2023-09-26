import { useContext, useEffect } from "react";

import AppointmentItem from "../appointmentItem.tsx/AppointmentItem";
import { AppointmentContext } from "../../context/appointments/AppointmentsContext";
import Spinner from "../spinner/Spinner";
import Error from "../error/Error";
function AppointmentList() {
	const { activeAppointments, getActiveAppointments, appointmentLoadingStatus } =
		useContext(AppointmentContext);

	useEffect(() => {
		getActiveAppointments();
	}, []);
	console.log(appointmentLoadingStatus);

	if(appointmentLoadingStatus === 'loading'){
		return <Spinner/>
	} else if (appointmentLoadingStatus === 'error'){
		return (
			<>
			<Error/>
			<button className="schedule__reload" onClick={getActiveAppointments}>
				Try to reload
			</button>
			</>
		)
	}
	return (
		<>
			{activeAppointments.map((item) => {
				return <AppointmentItem {...item} key={item.id} />;
			})}
		</>
	);
}

export default AppointmentList;