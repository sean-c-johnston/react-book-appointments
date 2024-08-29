const today = new Date();

const at = (hours: number) => today.setHours(hours, 0);

export const sampleAppointments: Appointment[] = [
    {
        customer: {
            firstName: "Charlie",
            lastName: "Jones",
            phoneNumber: "+44 0987654321"
        },
        startsAt: at(9),
        service: "Cut",
        stylist: "Sean",
        notes: ""
    },
    {
        customer: {
            firstName: "Frankie",
            lastName: "Jackson",
            phoneNumber: "+44 1234567890"
        },
        startsAt: at(10),
        service: "Cut",
        stylist: "Sean",
        notes: ""
    },
    {
        customer: {
            firstName: "Casey",
            lastName: "Smith",
            phoneNumber: "+44 5432167890"
        },
        startsAt: at(11),
        service: "Cut",
        stylist: "Joe",
        notes: ""
    },
    {
        customer: {
            firstName: "Ashley",
            lastName: "Mann",
            phoneNumber: "+44 1234509876"
        },
        startsAt: at(12),
        service: "Cut & Beard",
        stylist: "Joe",
        notes: ""
    },
    {
        customer: {
            firstName: "Jordan",
            lastName: "Field",
            phoneNumber: "+44 5647382910"
        },
        startsAt: at(13),
        service: "Cut & Beard",
        stylist: "Sean",
        notes: "Testing note"
    },
    {
        customer: {
            firstName: "Jay",
            lastName: "Davis",
            phoneNumber: "+44 0192837465"
        },
        startsAt: at(14),
        service: "Beard",
        stylist: "Joe",
        notes: "Another note"
    },
    {
        customer: {
            firstName: "Alex",
            lastName: "Pegg",
            phoneNumber: "+44 1627384950"
        },
        startsAt: at(15),
        service: "Cut",
        stylist: "Sean",
        notes: "Note note note note"
    },
    {
        customer: {
            firstName: "Jules",
            lastName: "Frost",
            phoneNumber: "+44 069584736"
        },
        startsAt: at(16),
        service: "Cut",
        stylist: "Steve",
        notes: ""
    },
    {
        customer: {
            firstName: "Stevie",
            lastName: "Bean",
            phoneNumber: "+44 594039033"
        },
        startsAt: at(17),
        service: "Cut",
        stylist: "Steve",
        notes: ""
    },
]
