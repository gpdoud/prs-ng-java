export class User {
    Id: number;
    Username: string;
    Password: string;
    Firstname: string;
    Lastname: string;
    Phone: string;
    Email: string;
    IsReviewer: boolean;
    IsAdmin: boolean;

    constructor() {
        this.Id = 0;
        this.Password = 'password';
        this.IsReviewer = false;
        this.IsAdmin = false;
    }
}