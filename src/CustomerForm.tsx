import React from "react";

interface CustomerFormProps {
    original?: Customer;
}

export const CustomerForm = ({ original }: CustomerFormProps) => (
        <form>
            <label htmlFor={"firstName"}/>
            <input
                    type="text"
                    name="firstName"
                    value={original.firstName}
                    readOnly
            />
        </form>
);
