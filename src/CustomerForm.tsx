import React from "react";

interface CustomerFormProps {
    original?: Customer,
    onSubmit?: ({ firstName }: { firstName: any }) => void
}

export const CustomerForm = ({ original, onSubmit }: CustomerFormProps) => (
        <form onSubmit={() => onSubmit(original)}>
            <label htmlFor={"firstName"}>First Name</label>
            <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={original.firstName}
                    readOnly
            />

            <input type={"submit"} value={"Add"}/>
        </form>
);
