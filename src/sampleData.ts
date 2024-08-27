const today = new Date();

const at = (hours) => today.setHours(hours, 0);

export const sampleAppointments = [
    {
        startsAt: at(9),
        customer: {
            firstName: "Charlie",
            lastName: "Jones",
            phoneNumber: "+44 0987654321"
        }
    },
    {
        startsAt: at(10),
        customer: {
            firstName: "Frankie",
            lastName: "Jackson",
            phoneNumber: "+44 1234567890"
        }
    },
    {
        startsAt: at(11),
        customer: {
            firstName: "Casey",
            lastName: "Smith",
            phoneNumber: "+44 5432167890"
        }
    },
    {
        startsAt: at(12),
        customer: {
            firstName: "Ashley",
            lastName: "Mann",
            phoneNumber: "+44 1234509876"
        }
    },
    {
        startsAt: at(13),
        customer: {
            firstName: "Jordan",
            lastName: "Lefield",
            phoneNumber: "+44 5647382910"
        }
    },
    {
        startsAt: at(14),
        customer: {
            firstName: "Jay",
            lastName: "Davis",
            phoneNumber: "+44 0192837465"
        }
    },
    {
        startsAt: at(15),
        customer: {
            firstName: "Alex",
            lastName: "Pegg",
            phoneNumber: "+44 1627384950"
        }
    },
    {
        startsAt: at(16),
        customer: {
            firstName: "Jules",
            lastName: "Frost",
            phoneNumber: "+44 069584736"
        }
    },
    {
        startsAt: at(17),
        customer: {
            firstName: "Stevie",
            lastName: "Bean",
            phoneNumber: "+44 594039033"
        }
    },
]
