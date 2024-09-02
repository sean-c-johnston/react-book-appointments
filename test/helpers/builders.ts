export const blankCustomer = () => customerWith({});

export const customerWith = (customer: {}) => ({firstName: "", lastName: "", phoneNumber: "", ...customer});

export const appointmentWith = (values: {
    customer?: Customer,
    startsAt?: number,
    stylist?: string,
    service?: string,
    notes?: string
}) => ({
    customer: blankCustomer(),
    startsAt: new Date().setHours(0, 0),
    stylist: "",
    service: "",
    notes: "",
    ...values
});