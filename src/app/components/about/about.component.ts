import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  // About us Header Section 
  about_header = "ABOUT US";

  // Introduction Section
  intro_header = "Making a Difference, One Step at a Time";
  intro_para = [ "Our incredible team of dedicated regulars and passionate part-time volunteers are the heart of everything we do. Each member brings unique skills, compassion, and unwavering commitment to supporting and empowering persons with disabilities. Together, we turn our convictions into meaningful action — whether through organizing community events, providing assistance, or advocating for a more inclusive society.",
  
  "We believe everyone has something valuable to contribute. Think you’d be a great fit? Whether you have a few hours or want to join us long-term, we’d love to hear from you. Get in touch to learn how you can become part of our mission to make a lasting impact"
  ]

  // Mission Section
  mission_header = "Our Mission";
  mission_para = "To empower the PWDs and their families by providing educational assistance and livelihood programs to become independent and productive member in the mainstream society.";

  // Vission Section
  vision_header = "Our Vision";
  vision_para = "To alleviate poverty in the most impoverished, disadvantaged PWD sector in our community";

  // Story Section as an Array
  story_header = "Our Story: A Journey of Empowerment";
  story_para = [
    "Born from a shared vision of inclusivity and hope, our organization began as a humble effort by a group of Persons with Disabilities (PWDs) and dedicated advocates.With a common aspiration to uplift the lives of the most vulnerable members of the PWD community, we set out to create a lasting impact.",

    "What started as a small initiative supporting a single barangay has blossomed into a growing movement that now reaches multiple barangays and cities. Fueled by compassion and the unwavering spirit of volunteerism, we continue to expand our reach, ensuring that no PWD is left behind. Our journey has been shaped by the power of collective effort — donors, volunteers, and supporters coming together to bring positive change.",

    "Through various programs, from medical assistance and skills training to livelihood opportunities and community events, we aim to empower PWDs to lead independent, fulfilling lives.We believe that every individual deserves a chance to thrive, and with your support, we can continue breaking barriers and fostering a community where everyone has an equal opportunity to succeed. Together, we’re not just changing lives — we’re building a more inclusive, compassionate future."
  ];
}