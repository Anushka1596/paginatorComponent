import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  @Input() total: number = 0;
  page : any;
  noOfPages : any;
  itemsPerPage =  10 ; //default value
  lastPageLeft =  0; 
  constructor() { }

  ngOnInit() {
   this.page = 1;
   this.noOfPages = this.getTotalPages(this.itemsPerPage , this.total)
  }

  changedItemsPerChange(perPage){
   this.page = 1;
   this.noOfPages = this.getTotalPages(perPage , this.total)
  }
  previousPage(){
    if(this.page >1){
       this.page -= 1;
    } 
  }
  nextPage(){
    if(this.page < this.noOfPages){
      this.page +=  1;
    }
  }
    getTotalPages(limit, size){
      this.lastPageLeft = size % limit;
      return Math.ceil(size / limit);
    }

}

