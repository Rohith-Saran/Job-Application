import "dotenv/config";
import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

async function seed() {
    await prisma.user.createMany({
        data: [
            { name: "ceraline", email: "ceraline@example.com"},
            { name: "nobody",email: "nobody@example.com"},
        ],
        skipDuplicates: true,
    });

}


// After seeding the data, we disconnect the Prisma Client to free up resources.
seed().then(() => {
    prisma.$disconnect();
});

// TO RUN -> npx pisma db seed 

// In this example, we are creating two users in the database with their name and email.
//  You can modify the data and the model according to your schema.