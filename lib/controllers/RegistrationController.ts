import { Request, Response } from 'express';

export class RegistrationController{

    public getRegistrations (req: Request, res: Response) {
        res.send("Welcome to registrations !");
    }
}