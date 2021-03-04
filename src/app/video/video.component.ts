import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog"

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VideoComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

}
