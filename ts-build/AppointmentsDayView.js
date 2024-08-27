import React, { useState } from 'react';
export const Appointment = ({ customer, startsAt, service, stylist, notes }) => React.createElement("div", null,
    startsAt !== undefined && startsAt !== null ?
        React.createElement("h1", null, appointmentTimeOfDay(startsAt)) : React.createElement(React.Fragment, null),
    React.createElement("p", null, stylist),
    React.createElement("p", null,
        customer.firstName,
        " ",
        customer.lastName),
    React.createElement("p", null, customer.phoneNumber),
    React.createElement("p", null, service),
    React.createElement("p", null, notes));
export const AppointmentsDayView = ({ appointments }) => {
    const [selectedAppointment, setSelectedAppointment] = useState(0);
    return React.createElement("div", { id: "appointmentsDayView" },
        React.createElement("ol", null, appointments.map((appointment, i) => (React.createElement("li", { key: appointment.startsAt },
            React.createElement("button", { type: "button", className: i === selectedAppointment ? "toggled" : "", onClick: () => setSelectedAppointment(i) }, appointmentTimeOfDay(appointment.startsAt)))))),
        appointments.length === 0 ?
            React.createElement("p", null, "There are no appointments today.") :
            React.createElement(Appointment, Object.assign({}, appointments[selectedAppointment])));
};
const appointmentTimeOfDay = (startsAt) => {
    const [hh, mm] = new Date(startsAt).toTimeString().split(':');
    return `${hh}:${mm}`;
};
