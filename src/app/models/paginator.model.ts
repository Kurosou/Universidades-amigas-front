import { EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

export class MatPaginator{
    pageIndex: number;
    pageSize: number;
    length: number;
    page: EventEmitter<PageEvent>;
}