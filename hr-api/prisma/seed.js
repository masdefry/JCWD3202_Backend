const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const shifts = [
    {
        shiftStart: new Date('2024-10-24 09:00:00'),
        shiftEnd: new Date('2024-10-24 18:00:00')
    },
    {
        shiftStart: new Date('2024-10-24 13:00:00'),
        shiftEnd: new Date('2024-10-24 22:00:00')
    }
]

const roles = [
    {
        title: 'HR'
    },
    {
        title: 'MANAGER'
    },
    {
        title: 'STAFF'
    }
]

const leaveTypes = [
    { 
        type: 'Cuti Tahunan',
    },
    {
        type: 'Cuti Sakit',
    },
    {
        type: 'Cuti Melahirkan',
    },
    {
        type: 'Cuti Menikah'
    },
    {
        type: 'Cuti Khusus'
    }
]

async function main(){
    shifts.forEach(async(item) => {
        await prisma.shift.create({
            data: item
        })
    })

    roles.forEach(async(item) => {
        await prisma.role.create({
            data: item
        })
    })

    leaveTypes.forEach(async(item) => {
        await prisma.leaveType.create({
            data: item
        })
    })
}

main().catch((error) => {
    console.log(error)
}).finally(async() => {
    await prisma.$disconnect()
})