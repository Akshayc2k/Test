import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { ListApiService } from './list-api.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
    FormsModule, 

    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  displayedColumns: string[] = ['project', 'proTip', 'submission', 'evaluationCriteria', 'faq'];
  dataSource = new MatTableDataSource<any>([]);
  filterValue = '';

  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private listApi: ListApiService) {}

  ngOnInit() {
    this.listApi.getItems().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
    });
  }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
