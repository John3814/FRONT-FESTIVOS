import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FestivoService } from 'src/app/festivo.service';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent {

  date = new FormControl(new Date());

  constructor(private festivoService: FestivoService){}

  verificarFecha() {
    const selectedDate = this.date.value;
    if (selectedDate) {
      this.festivoService.verificarFecha(selectedDate)
        .subscribe(message => {
          alert(message);
        });
    } else {
      alert('Por favor, selecciona una fecha.');
    }
  }

}
