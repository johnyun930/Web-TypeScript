import { Eventing } from './Eventing';
import {Sync} from './Sync';
export interface UserProps{
    id: number;
    name?: string,
    age?: number
};

type Callback = ()=>void;
 
const rootUrl = 'http://localhost:3000/users'

export class User{
    public event: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

    constructor(
        private data: UserProps,
        ){}
 
   
    
     
}