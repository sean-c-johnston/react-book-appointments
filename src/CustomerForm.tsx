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
    const handleFirstNameChange = ({target}) => {
        setCustomer((customer) => ({
            ...customer,
            firstName: target.value,
        }));
    };

    return (<form onSubmit={handleSubmit}>
                <label htmlFor={"firstName"}>First Name</label>
                <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={customer.firstName}
                        onChange={handleFirstNameChange}
                />

                <input type={"submit"} value={"Add"}/>
            </form>
    );
};
