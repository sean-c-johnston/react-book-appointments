import React from 'react';

export const Appointment = ({customer}) => <div>{customer.firstName}</div>;

export const AppointmentsDayView = ({appointments}) => (
    <div id={"appointmentsDayView"}>
        <ol>
            {appointments.map(appointment => (
                <li key={appointment.startsAt}>{appointmentTimeOfDay(appointment.startsAt)}</li>))}
        </ol>
        <p>There are no appointments today.</p>
    </div>);

const appointmentTimeOfDay = (startsAt) => {
    const [hh, mm] = new Date(startsAt).toTimeString().split(':');
    return `${hh}:${mm}`;
}
