import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-note',
  imports: [NgClass, RouterLink],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() note: {id: string, content: string, author: string, model: string };
  constructor() {
    this.note = {
      id: '',
      content: '',
      author: '',
      model: ''
    };
  }

  widthNote(): string {
    if (this.note.content.length >= 256) {
      return 'note-l'
    }
    return 'note-s'
  }
}
