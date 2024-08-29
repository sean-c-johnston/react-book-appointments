interface Appointment {
    customer: Customer,
    startsAt: number,
    service: string,
    stylist: string,
    notes: string,
}

interface Customer {
    firstName: string,
    lastName: string,
    phoneNumber: string,
}