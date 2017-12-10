
export class User{
    constructor(public email: string,
                public password: string,
                public firstName: string,
                public lastName: string,
                public patronymic: string,
                public rating: number,
                public id?: number){}
}