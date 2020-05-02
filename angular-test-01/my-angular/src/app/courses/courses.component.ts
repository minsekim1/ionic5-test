import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
  <h1>courses start</h1>
  {{ text }}
  <h1>courses end</h1>
  
  `,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
text = 'ssssssssssssssssssssssssaaaaaaaaaaaaaaaaaaaaa';
  constructor() { }

  ngOnInit(): void {
  }

}
