import { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import {RegistrationSchema} from '../models/RegistrationModel';

const Registration = mongoose.model('Registration', RegistrationSchema);

export class RegistrationController{

    public getRegistrations (req: Request, res: Response) {
        Registration.find({}, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    }

    public addNewRegistration (req: Request, res: Response){
        let newRegistration = new Registration(req.body);

        newRegistration.save((err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        })
    }

    public getRegistrationWithID (req: Request, res: Response) {
        Registration.findById(req.params.registrationId, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    }

    public updateRegistration (req: Request, res: Response) {
        Registration.findOneAndUpdate({ _id: req.params.registrationId }, req.body, { new: true }, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    }

    public deleteEvent (req: Request, res: Response) {
        Registration.deleteOne({ _id: req.params.registrationId }, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted registration!'});
        });
    }
}