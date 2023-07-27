import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/models/experience.interface';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  @Input() experience: Experience = {
    title: '',
    description: ''
  };
}
