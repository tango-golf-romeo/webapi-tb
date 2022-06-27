import {Component,OnInit,Inject} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component
({
  selector: 'app-alert-slideup',
  templateUrl: './alert-slideup.component.html',
  styleUrls: ['./alert-slideup.component.css']
})
export class AlertSlideupComponent implements OnInit
{
  constructor (private sheetRef: MatBottomSheetRef<AlertSlideupComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public message:string)
  {
  }

  ngOnInit (): void
  {
  }
}
