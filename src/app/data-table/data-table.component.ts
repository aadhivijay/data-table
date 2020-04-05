import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: [ './data-table.component.css' ]
})
export class DataTableComponent implements OnChanges {
  
  @Input() header: any[] = [];
  @Input() data: any[] = [];
  @Input() rowExpand: boolean;

  ngOnChanges() {
    // this.rowExpandData();
  }

  private rowExpandData() {
    this.data.forEach((each: any) => {
      each['$implicit'] = each;
    });
  }

}
