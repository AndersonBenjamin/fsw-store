import { PrismaClient } from "@prisma/client";

declare global {
    var cachedPrimas: PrismaClient;
}

let prisma: PrismaClient;

if(process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!global.cachedPrimas) {
        global.cachedPrimas = new PrismaClient();
    }
    prisma = global.cachedPrimas;
}

export const primasClient = prisma;