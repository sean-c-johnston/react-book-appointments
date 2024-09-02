import React from "react";

interface CustomerFormProps {
    original?: Customer;
}

export const CustomerForm = ({ original }: CustomerFormProps) => (
        <form>
            <label htmlFor={"firstName"}>First Name</label>
            <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={original.firstName}
                    readOnly
            />
        </form>
);
