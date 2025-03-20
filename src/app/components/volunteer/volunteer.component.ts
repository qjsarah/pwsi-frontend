import { Component } from '@angular/core';
import { VolunteerFormComponent } from './volunteer-form/volunteer-form.component';
@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [VolunteerFormComponent],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent {
  // Volunteer Header Section
  volunteer_header = "Let's Make A Change"

  // volunteer Contents Section
  volunteer_content_header = "Volunteer Now:";
  volunteer_content_para = "We mobilize our dedicated teams of volunteers to create lasting, meaningful change in the lives of those who need it most. By joining us, you’ll become part of a compassionate, driven community committed to empowering individuals, uplifting communities, and breaking barriers. Together, we can achieve incredible things — because when passionate people unite with a shared purpose, no challenge is too big, and no dream is out of reach. Join us and be the change you want to see in the world." ;
  volunteer_content_links = [
    "Lot 2- J7 St. Domanic Corithian, Dolores City of San Fernando, Pampanga",
    "pwdwelfaresociety@gmail.com",
    "PWD Welfare Society Inc."
  ] 
}
