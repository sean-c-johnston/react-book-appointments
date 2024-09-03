import React, {useState} from "react";

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
    const handleFieldChange = ({target}) => {
        setCustomer((customer) => ({
            ...customer,
            [target.name]: target.value,
        }));
    };

    return (<form onSubmit={handleSubmit}>
                <label htmlFor={"firstName"}>First Name</label>
                <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={customer.firstName}
                        onChange={handleFieldChange}
                />

                <label htmlFor={"lastName"}>Last Name</label>
                <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={customer.lastName}
                        onChange={handleFieldChange}
                />

                <input type={"submit"} value={"Add"}/>
            </form>
    );
};
