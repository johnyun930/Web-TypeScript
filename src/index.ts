import {User} from './models/User';

import axios from 'axios';
import { Eventing } from './models/Eventing';
const user = new User({name:'New Record', age:20});



user.on('save',()=>{
    console.log("User ");
});

user.save();