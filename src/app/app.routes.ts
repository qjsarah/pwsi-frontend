import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { ContactComponent } from './components/contact/contact.component';
import { EventDetailsComponent } from './components/events/event-details/event-details.component';
import { LoginComponent } from './login/login.component';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { AddPostComponent } from './admin-interface/add-post/add-post.component';
import { EditPostComponent } from './admin-interface/edit-post/edit-post.component';
import { AdminPostDetailsComponent } from './admin-interface/admin-post-details/admin-post-details.component';
import { VolunteerFormComponent } from './components/volunteer/volunteer-form/volunteer-form.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { VolunteerTableComponent } from './admin-interface/volunteer-table/volunteer-table.component';
import { ContactTableComponent } from './admin-interface/contact-table/contact-table.component';
import { SubscriberTableComponent } from './admin-interface/subscriber-table/subscriber-table.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'event', component: EventsComponent},
    {path: 'volunteer', component: VolunteerComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'event/:id', component: EventDetailsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'admin-ui', component: AdminInterfaceComponent},
    {path: 'admin-ui/add-post', component: AddPostComponent},
    {path: 'admin-ui/edit-post/:id', component: EditPostComponent},
    {path: 'admin-ui/post-details/:id', component: AdminPostDetailsComponent},
    {path: 'admin-ui/volunteer', component: VolunteerTableComponent},
    {path: 'admin-ui/contact', component: ContactTableComponent},
    {path: 'admin-ui/subscriber', component: SubscriberTableComponent}
];
