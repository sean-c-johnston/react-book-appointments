const today = new Date();

const at = (hours: number) => today.setHours(hours, 0);

export const sampleAppointments: Appointment[] = [
    {
        startsAt: at(9),
        customer: {
            firstName: "Charlie",
            lastName: "Jones",
            phoneNumber: "+44 0987654321"
        },
        service: "Cut",
        stylist: "Sean",
        notes: ""
    },
    {
        startsAt: at(10),
        customer: {
            firstName: "Frankie",
            lastName: "Jackson",
            phoneNumber: "+44 1234567890"
        },
        service: "Cut",
        stylist: "Sean",
        notes: ""
    },
    {
        startsAt: at(11),
        customer: {
            firstName: "Casey",
            lastName: "Smith",
            phoneNumber: "+44 5432167890"
        },
        service: "Cut",
        stylist: "Joe",
        notes: ""
    },
    {
        startsAt: at(12),
        customer: {
            firstName: "Ashley",
            lastName: "Mann",
            phoneNumber: "+44 1234509876"
        },
        service: "Cut & Beard",
        stylist: "Joe",
        notes: ""
    },
    {
        startsAt: at(13),
        customer: {
            firstName: "Jordan",
            lastName: "Field",
            phoneNumber: "+44 5647382910"
        },
        service: "Cut & Beard",
        stylist: "Sean",
        notes: "Testing note"
    },
    {
        startsAt: at(14),
        customer: {
            firstName: "Jay",
            lastName: "Davis",
            phoneNumber: "+44 0192837465"
        },
        service: "Beard",
        stylist: "Joe",
        notes: "Another note"
    },
    {
        startsAt: at(15),
        customer: {
            firstName: "Alex",
            lastName: "Pegg",
            phoneNumber: "+44 1627384950"
        },
        service: "Cut",
        stylist: "Sean",
        notes: "Note note note note"
    },
    {
        startsAt: at(16),
        customer: {
            firstName: "Jules",
            lastName: "Frost",
            phoneNumber: "+44 069584736"
        },
        service: "Cut",
        stylist: "Steve",
        notes: ""
    },
    {
        startsAt: at(17),
        customer: {
            firstName: "Stevie",
            lastName: "Bean",
            phoneNumber: "+44 594039033"
        },
        service: "Cut",
        stylist: "Steve",
        notes: ""
    },
]
