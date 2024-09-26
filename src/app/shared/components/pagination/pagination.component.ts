import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements  OnChanges {
  @Input() page = 1;
  @Input() pageSize = 10;
  @Input() totalRows = 0;
  @Input() pageSizeOptions: number[] = [10, 20, 30, 50, 100];

  @Output() pageIndexChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  fromRecord: number = 0;
  toRecord: number = 0;
  constructor() {

  }
  ngOnInit(): void {
      this.calculatorNumberShowRecord();
  }
  ngOnChanges(changes: SimpleChanges): void {
      if (changes['page']?.currentValue || changes['pageSize']?.currentValue) {
        this.calculatorNumberShowRecord()
      }
      if (changes['totalRows'] && changes['totalRows'].currentValue) {
        this.calculatorNumberShowRecord()
      }
  }
  onPageIndexChange(event: any): void {
      this.pageIndexChange.emit(event)
      this.calculatorNumberShowRecord()
  }

  calculatorNumberShowRecord(): void {
      this.fromRecord = (this.page - 1) * this.pageSize + 1;
      let lastRecord = this.page * this.pageSize;

      if (lastRecord > this.totalRows) {
        this.toRecord = lastRecord - (lastRecord - this.totalRows)
      } else {
        this.toRecord = lastRecord;
      }
  }
  onPageSizeChange(event: any): void {
      // if(event >= this.totalRows) {
        // this.pageIndexChange.emit(0)
      // }
      this.pageSizeChange.emit(event)
      this.calculatorNumberShowRecord()
  }
}
