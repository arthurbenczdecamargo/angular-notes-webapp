import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../note.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  imports: [FormsModule],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css'
})
export class EditNoteComponent {
  note: { id: string, content: string, author: string, model: string } = {
    id: '',
    content: '',
    author: '',
    model: ''
  };

  constructor(private service: NoteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.service.searchById(parseInt(id!)).subscribe((note) => {
        this.note = {
          id: note.id!,
          content: note.content,
          author: note.author,
          model: note.model
        };
      });
    }
  }

  editNote() {
    this.service.editNote(this.note).subscribe(() => {
      this.router.navigate(['/listNote']);
    })
  }

  cancel() {
    this.router.navigate(['/listNote']);
  }

}
