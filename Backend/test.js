const argon2=require("argon2")
const {PrismaClient} =require("@prisma/client");
const prisma=new PrismaClient();
require('dotenv').config();


async function hash(password){
    const hash=await argon2.hash(password);

    const user = await prisma.employee.findUnique({
        where:{
            username:"shiva12",
        }
    })

    await prisma.employee.update({
        where:{
            username:user.username
        },
        data:{
            password:hash
        }
    })

    console.log(hash);
}

async function create(){

    await prisma.employee.create({
        data:{
            employee_id:"e2",
            PAN:"DDHawded",
            employee_name:"alok",
            username:"shiva12",
            password:"12345678",
            gender:"f",
            job_title:"sde2",
            join_date:"12-3-2016",
            status:"lost",
            photo:"asdsada.com",
            access_rights:"user",

        }
    })

}
//create();

hash("1234567890");