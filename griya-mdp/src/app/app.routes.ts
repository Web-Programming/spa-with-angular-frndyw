import { Routes } from '@angular/router';
import { Home as Homecomponent } from './home/home';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { Register } from './register/register';
import { Contact } from './contact/contact';


export const routes: Routes = [
    //
    {
        path : "",
        component : Homecomponent,
        title : 'Home Page'
    },

     {
        path : "profile",
        component : Profile,
        //title : 'Profile page'
    },
    {
        path : "login",
        component : Login,
    },
    {
        path : "register",
        component : Register,
    },
    {
        path : "contact",
        component : Contact,
    },
];


