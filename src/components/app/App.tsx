import { useEffect } from "react";
import Header from "../header/Header";
import SchedulePage from "../../pages/schedule/SchedulePage";
// import HistoryPage from "../../pages/history/HistoryPage";
// import CancelModal from "../modal/CancelModal";
import "./app.scss";
import useAppointmentService from '../../services/AppointmentService'
import { IInitialState } from "../../context/appointments/reducer";






const initialState: IInitialState = {
	allAppointments:[],
	activeAppointments:[]
}


function App() {
	const {
		loadingStatus,
        getAllAppointments,
        getAllActiveAppointments
	} = useAppointmentService();

	useEffect(()=>{
		getAllAppointments().then(console.log)
	},[])

	return (
		<main className="board">
			<Header />
			<SchedulePage />
			{/* <HistoryPage /> */}
			{/* <CancelModal /> */}
		</main>
	);
}

export default App;
