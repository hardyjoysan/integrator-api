import {Request, Response} from "express";
import {EventController} from "../controllers/EventController";
import {RegistrationController} from "../controllers/RegistrationController";


export class Routes{

    public eventController: EventController = new EventController();
    public registrationController: RegistrationController = new RegistrationController();
    
    public routes(app): void{

        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Welcome Home!'
            })
        });

        // Events
        app.route('/events')
            .get(this.eventController.getEvents);
        app.route('/event')
            .post(this.eventController.addNewEvent);
        app.route('/event/:eventId')
            .get(this.eventController.getEventWithID)
            .put(this.eventController.updateEvent)
            .delete(this.eventController.deleteEvent)

        // Registrations
        app.route('/registrations')
            .get(this.registrationController.getRegistrations);

    }
}