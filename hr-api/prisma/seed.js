const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

const saltRounds = 10
const hashPassword = async(password) => {
    return await bcrypt.hash(password, saltRounds)
}

const shifts = [
    {
        startTime: new Date('2024-10-24 09:00:00'),
        endTime: new Date('2024-10-24 18:00:00')
    },
    {
        startTime: new Date('2024-10-24 13:00:00'),
        endTime: new Date('2024-10-24 22:00:00')
    }
]

const usersHR = [
    {
        firstName: 'Muhammad', 
        lastName: 'Defryan', 
        email: 'mdefryan@gmail.com',
        role: 'HR',
        password: 'abc123',
        salary: 20000000,
        shiftsId: 1
    }
]

async function main(){
    shifts.forEach(async(item) => {
        await prisma.shift.create({
            data: item
        })
    })

    usersHR.forEach(async(item) => {
        await prisma.user.create({
            data: {
                ...item, 
                password: await hashPassword(item.password)
            }
        })
    })
}

main().catch((error) => {
    console.log(error)
}).finally(async() => {
    await prisma.$disconnect()
})




const eo = [
    {
        name: 'A'
    },
    {
        name: 'B'
    }
]

const events = [
    [
        {
            name: 'Event A'
        },
        {
            name: 'Event B'
        },
        {
            name: 'Event C'
        }
    ],
    [
        {
            name: 'Event BEBAS'
        }
    ]
]


eo.forEach((item, index) => {
    const createdEo = await prisma.eo.create({
        data: item 
    })

    event[index].forEach(itm => {
        await prisma.event.create({
            data: {
                ...itm, 
                eoId: createdEo.id
            }
        })
    })
})