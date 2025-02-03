import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NoteComponent } from '../note/note.component';
import { NgFor, NgIf } from '@angular/common';
import { Notes } from '../notes';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-list-note',
  imports: [RouterLink, NoteComponent, NgFor, NgIf],
  templateUrl: './list-note.component.html',
  styleUrl: './list-note.component.css'
})
export class ListNoteComponent {
  listNotes: Notes[] = [{
    "id": "15",
    "content": "“Enlightenment is man's release from his self-incurred tutelage. Tutelage is man's inability to make use of his understanding without direction from another. Self-incurred is this tutelage when its cause lies not in lack of reason but in lack of resolution and courage to use it without direction from another. Sapere aude! 'Have courage to use your own reason!'- that is the motto of enlightenment.”",
    "author": "- Immanuel Kant",
    "model": "model3"
  },
  {
    "id": "73",
    "content": "“No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.”",
    "author": "- Socrates",
    "model": "model2"
  },
  {
    "id": "113",
    "content": "“The hour of departure has arrived, and we go our separate ways, I to die, and you to live. Which of these two is better only God knows.”",
    "author": "- Socrates",
    "model": "model2"
  },
  {
    "id": "358",
    "content": "“Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.”",
    "author": "- Friedrich Nietzsche",
    "model": "model1"
  },
  {
    "id": "78",
    "content": "“Rules for happiness: something to do, someone to love, something to hope for.”",
    "author": "- Immanuel Kant",
    "model": "model3"
  },
  {
    "id": "344",
    "content": "“Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.”",
    "author": "- Friedrich Nietzsche",
    "model": "model3"
  },
  {
    "id": "457",
    "content": "“Two things fill the mind with ever new and increasing admiration and awe, the more often and steadily we reflect upon them: the starry heavens above me and the moral law within me. I do not seek or conjecture either of them as if they were veiled obscurities or extravagances beyond the horizon of my vision; I see them before me and connect them immediately with the consciousness of my existence.”",
    "author": "- Immanuel Kant",
    "model": "model1"
  }];

  constructor(private service: NoteService) {
    this.service.listNotes().subscribe((listNotes) => {
      this.listNotes = listNotes
    })
  }
}
