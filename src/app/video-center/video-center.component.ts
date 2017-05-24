import { Component, OnInit } from '@angular/core';
import { Video } from './../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: Video[] = [
    {"_id": "1", "title": "Titl 1", "url": "url 1", "description": "desc 1"},
    {"_id": "2", "title": "Titl 2", "url": "url 2", "description": "desc 2"},
    {"_id": "3", "title": "Titl 3", "url": "url 3", "description": "desc 3"},
    {"_id": "4", "title": "Titl 4", "url": "url 4", "description": "desc 4"}
  ];

  selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

  onSelectVideo(video:any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
