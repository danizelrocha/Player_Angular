import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Timeline } from 'vis-timeline';
import { DataSet } from 'vis-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  timeline: Timeline;
  options: {};
  data: any;
  groups: any;

  @ViewChild('timeline', { static: true }) TimelineContainer: ElementRef;

  constructor() {
    this.getTimelineData();
    this.getTimelineGroups();
    this.getOptions();
  }

  ngOnInit(): void {
    this.timeline = new Timeline( this.TimelineContainer.nativeElement, null,this.options);
    this.timeline.setGroups(this.groups);
    this.timeline.setItems(this.data);
  }

  getTimelineGroups(){
    this.groups = new DataSet([
      {
        id: 0,
        content: 'Group 1'
      }
    ]);
  }

  getTimelineData() {
   this.data = new DataSet();
   this.data.add({
     id: 1,
     group: 0,
     content:'item 1',
     start: 0,
     end:3
    })
  }

  getOptions() {
    this.options = {
      stack: true,
      start: 0,
      end: 10,
      itemsAlwaysDraggable: true,
      editable: true,
      margin: {
        axis:0
      },
      showMajorLabels: false,
      orientation: 'top'
    };
  }
}
