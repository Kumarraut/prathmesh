import { Component, OnInit } from '@angular/core';
import { GridService } from '../service/grid.service';

@Component({
  selector: 'app-gridcomp',
  templateUrl: './gridcomp.component.html',
  styleUrls: ['./gridcomp.component.css']
})
export class GridcompComponent implements OnInit {

  allRes: any[] = [];
  finalData: any = [];

  

  constructor(private grid: GridService ) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {

    this.grid.getData().subscribe({
      next: (res: any) => {
        {
          if (res) {
            this.allRes.push(res['results'])

            for (const item of this.allRes) {

              this.finalData = Object.values(item);
              console.log('item', this.finalData);

            }
          }
        }
      },
      error: (error) => {
        throw error;
      },

    })
  

  }


  
}
