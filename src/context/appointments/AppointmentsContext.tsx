import React, { createContext, useReducer } from "react"
import reducer, { IInitialState } from "./reducer";
import { ActionsTypes   } from "./actions";
import useAppointmentService from "../../services/AppointmentService";

const initialState: IInitialState = {
	allAppointments:[],
	activeAppointments:[]
}

interface AppointmentContextValue extends IInitialState {
    getAppointments: ()=>void
}

export const AppointmentContext = createContext<AppointmentContextValue>({
        allAppointments: initialState.allAppointments ,
        activeAppointments: initialState.activeAppointments,
        getAppointments:()=>{} 
});

interface ProviderPros {
    children: React.ReactNode
}

const AppointmentContextProvider = ({children}:ProviderPros) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {loadingStatus, getAllAppointments, getAllActiveAppointments} = useAppointmentService();

    const value : AppointmentContextValue = {  
        allAppointments: state.allAppointments ,
        activeAppointments: state.activeAppointments,
        getAppointments:()=>{
            getAllAppointments().then(data=>
                dispatch({type: ActionsTypes.SET_ALL_APPOINTMENTS ,payload:data  }))
            
        } 
    }
   
    return (
        <AppointmentContext.Provider value={value}>
            {children}
        </AppointmentContext.Provider>
    )
}


export default AppointmentContextProvider 







export {}