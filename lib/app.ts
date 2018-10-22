import * as express from 'express';
import * as bodyparser from 'body-parser';
import {Routes} from "./routes/Routes";
import * as mongoose from "mongoose";

class App{

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUrl: string = 'mongodb://entirosdev:dev987654@ds029640.mlab.com:29640/integrator-api';

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void{
        //support application/json post data
        this.app.use(bodyparser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyparser.urlencoded({ extended : false }));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}

export default new App().app;