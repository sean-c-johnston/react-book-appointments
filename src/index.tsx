import React from "react";
import ReactDOM from "react-dom/client";
import { AppointmentsDayView } from "./appointmentsDayView/AppointmentsDayView";
import { sampleAppointments } from "./sampleData";
import { CustomerForm } from "./CustomerForm";

ReactDOM.createRoot(document.getElementById("root"))
        .render(
                <div>
                    <AppointmentsDayView
                            appointments={sampleAppointments}/>

                    <CustomerForm
                            original={sampleAppointments[0].customer}
                            onSubmit={(e) => {console.log(JSON.stringify(e));}}/>
                </div>
        );
