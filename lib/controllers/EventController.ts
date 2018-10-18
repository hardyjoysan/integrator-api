import { Request, Response } from 'express';

export class EventController{

    public getEvents (req: Request, res: Response) {
        res.send("Welcome to events !");
    }
}