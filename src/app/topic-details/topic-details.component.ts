import { Component, OnInit } from '@angular/core';
import { Topics } from '../topics'
import { TopicsServiceService } from '../topics-service.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {

  id: number
  topic: Topics
  constructor(private route: ActivatedRoute, private topicServiceService: TopicsServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.topic = new Topics();
    this.topicServiceService.getTopicById(this.id).subscribe( data => {
    this.topic = data;
    });
  }
}