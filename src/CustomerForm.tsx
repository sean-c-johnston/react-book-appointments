import React from "react";

interface CustomerFormProps {
    original?: Customer;
}

export const CustomerForm = ({ original }: CustomerFormProps) => (
        <form>
            <input
                    type="text"
                    name="firstName"
                    value={original.firstName}
            />
        </form>
);
