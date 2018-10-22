import { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import {EventSchema} from '../models/EventModel';

const Event = mongoose.model('Event', EventSchema);

export class EventController{

    public getEvents (req: Request, res: Response) {
        Event.find({}, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    }

    public addNewEvent (req: Request, res: Response){
        let newEvent = new Event(req.body);

        newEvent.save((err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        })
    }

    public getEventWithID (req: Request, res: Response) {
        Event.findById(req.params.eventId, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    }

    public updateEvent (req: Request, res: Response) {
        Event.findOneAndUpdate({ _id: req.params.eventId }, req.body, { new: true }, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    }

    public deleteEvent (req: Request, res: Response) {
        Event.deleteOne({ _id: req.params.eventId }, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted event!'});
        });
    }
}