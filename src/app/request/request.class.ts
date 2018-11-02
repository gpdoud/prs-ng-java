import { User } from "../user/user.class";

export class Request {

    Id: number;
    Description: string;
    Justification: string;
    RejectionReason: string;
    DeliveryMode: string;
    SubmittedDate: string;
    Status: string;
    Total: number;
    Active: boolean;
    UserId: number;
    User: User;

    constructor() {
        this.Id = 0;
        this.Total = 0;
        this.DeliveryMode = "Pickup";
        this.SubmittedDate = (new Date()).toLocaleDateString();
        this.Status = "NEW";
        this.Active = true;
    }
}