import React, { useState } from "react";

export const Appointment = ({ customer, startsAt, service, stylist, notes }: Appointment) =>
        <div>
            {startsAt !== undefined && startsAt !== null ?
                    <h1>{appointmentTimeOfDay(startsAt)}</h1> : <></>
            }
            <p>{stylist}</p>
            <p>{service}</p>

            <p>{customer.firstName} {customer.lastName}</p>
            <p>{customer.phoneNumber}</p>
            <p>{notes}</p>
        </div>;


export const AppointmentsDayView = ({ appointments }: { appointments: Appointment[] }) => {
    const [selectedAppointment, setSelectedAppointment] = useState(0);

    return <div id={"appointmentsDayView"}>
        <ol>
            {appointments.map(
                    (appointment, i) => (<li key={appointment.startsAt}>
                        <button type="button"
                                className={i === selectedAppointment ? "toggled" : ""}
                                onClick={() => setSelectedAppointment(i)}>
                            {appointmentTimeOfDay(appointment.startsAt)}
                        </button>
                    </li>))}
        </ol>

        {appointments.length === 0 ?
                <p>There are no appointments today.</p> :
                <Appointment {...appointments[selectedAppointment]}/>}
    </div>;
};

const appointmentTimeOfDay = (startsAt: number) => {
    const [hh, mm] = new Date(startsAt).toTimeString().split(":");
    return `${hh}:${mm}`;
};
