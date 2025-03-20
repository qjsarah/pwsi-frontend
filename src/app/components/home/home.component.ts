import { Component } from '@angular/core';
import { HomeEventsComponent } from './home-events/home-events.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeEventsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Introduction Section Header and Paragraph
  intro_header = "Breaking Barriers, Creating Opportunities"; 
  intro_para = "Advocating for the rights, welfare, and empowerment of the PWD community in the Philippines.";

  // About Section Header and Paragraph
  about_header = "ABOUT US";
  about_para = "PWD Welfare Society Inc. is a non-profit, non-government, and non-political organization founded by a dedicated group of Persons with Disabilities (PWDs) and passionate advocates. United by a shared vision, we strive to uplift the lives of the most vulnerable members of the PWD community. Through empowerment, education, and sustainable support programs, we aim to create a more inclusive, compassionate, and opportunity-filled future — where no one is left behind.";

  // Post Section Header and Paragraph
  post_header = "Making an Impact Our Initiatives";
  post_para = "Showcasing programs, events, and success stories that uplift the PWD community.";

  // Empower Section Header and Paragraph
  emp_header = "Empowering Individuals, Fostering Inclusion";
  emp_para = "The PWD Welfare Society Inc. is dedicated to improving the lives of persons with disabilities through comprehensive support programs, strong advocacy, and impactful community initiatives. Our mission is to foster an environment where individuals with disabilities are empowered to thrive — promoting equality, ensuring accessibility, and creating opportunities for personal and professional growth. We believe in building a more inclusive, compassionate, and supportive society, where everyone, regardless of ability, can contribute, succeed, and live with dignity.";
  
  // Quick Contact Section Header and Paragraph
  quick_contact_header = "Let’s Stay Connected";
  quick_contact_para = "The PWD Welfare Society Inc. is committed to improving the lives of persons with disabilities through support programs, advocacy, and community initiatives. We aim to promote equality, access, and opportunities, empowering individuals to lead fulfilling, independent lives.";

}
