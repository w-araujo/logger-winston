interface IUser {
    nome: string
    birth: Date
    email: string
}

const users: Array<IUser> = []

class UserService {
    create(data: IUser) {
        return users.push(data)
    }

    list(): Array<IUser> {
        return users
    }
}

export { UserService }