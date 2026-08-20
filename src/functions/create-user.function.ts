import { hash } from "bcryptjs"
import { UserRole } from "../../generated/prisma/enums"
import { prisma } from "../lib/prisma"

interface CreateUserRequest {
 firstName: string
 lastName: string
 email: string
 telephone: string
 role: UserRole
 password: string
}

export async function createUserFunction({firstName, lastName, email, telephone, role, password}:CreateUserRequest) {
    const user = await prisma.user.findFirst({
        where: {
            OR: [{email: email}, {telephone: telephone}],
        
    }
})

    if (user) {
        throw new Error("Usuário já cadastrado neste email e/ou telefone")
    }

    const hashPassword = await hash(password, 6)

    await prisma.user.create({
        data: {
            firstName,
            lastName,
            email,
            role,
            password: hashPassword,
            telephone
        },
    }) 
}