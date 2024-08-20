export interface GetUserListProp {
    page: number,
    pageSize: number,
}

export interface User {
    id: string,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    phone:string,
}
