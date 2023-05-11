import { Component, OnInit ,ViewChild} from '@angular/core';
import { DataTablesService } from './data-tables.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  userId: string;
  title: any;
  body: any;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit{
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  x = '#';
  displayedColumns: string[] = ['#', 'userId', 'title', 'body'];
  dataSource: any ;
  constructor(private _DataTablesService: DataTablesService){ }
   
ngOnInit(): void {
  this._DataTablesService.getData().subscribe(data => { this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  
  })
}


  findProduct(event:Event){
    const textevent = (event.target as HTMLInputElement).value
    this.dataSource.filter = textevent.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstpage()
    }
  }
}
