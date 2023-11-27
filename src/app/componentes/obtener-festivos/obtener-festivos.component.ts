import { Component } from '@angular/core';
import { Festivo } from 'src/app/entidades/festivo';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { FestivoService } from 'src/app/festivo.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-obtener-festivos',
  templateUrl: './obtener-festivos.component.html',
  styleUrls: ['./obtener-festivos.component.css']
})
export class ObtenerFestivosComponent {
  public year: number = 2023;
  public festivos: Festivo[] = [];

  public columnas = [
    { name: 'Festivo', prop: 'festivo'},
    { name: 'Fecha', prop: 'fecha'}
  ];

  public modoColumna = ColumnMode; 
  constructor(private festivoService: FestivoService, private datePipe: DatePipe){}

  getFestivos() {
    this.festivoService.getFestivos(this.year).subscribe((data: Festivo[]) => {
      this.festivos = data.map((festivo: Festivo) => {
        const fechaTransformada = this.datePipe.transform(festivo.fecha, 'yyyy-MM-dd');
        if (fechaTransformada !== null) {
          return {
            ...festivo,
            fecha: fechaTransformada
          };
        } else {
          return {
            ...festivo,
            fecha: '0000-00-00' 
          };
        }
      });
    });
  }


}
