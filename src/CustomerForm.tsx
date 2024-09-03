import React, { useState } from "react";

interface CustomerFormProps {
    original?: Customer,
    onSubmit?: ({ firstName }: { firstName: any }) => void
}

export const CustomerForm = ({ original, onSubmit }: CustomerFormProps) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(customer);
    };

    const [customer, setCustomer] = useState(original);
    const handleFieldChange = ({ target }) => {
        setCustomer((customer) => ({
            ...customer,
            [target.name]: target.value,
        }));
    };

    return (<form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={"firstName"}>First Name</label>
                    <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={customer.firstName}
                            onChange={handleFieldChange}
                    />
                </div>

                <div>
                    <label htmlFor={"lastName"}>Last Name</label>
                    <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            value={customer.lastName}
                            onChange={handleFieldChange}
                    />
                </div>

                <div>
                    <label htmlFor={"phoneNumber"}>Phone Number</label>
                    <input
                            id="phoneNumber"
                            type="text"
                            name="phoneNumber"
                            value={customer.phoneNumber}
                            onChange={handleFieldChange}
                    />
                </div>

                <input type={"submit"} value={"Add"}/>
            </form>
    );
};
