import { Component, OnInit } from '@angular/core';
import { Topics } from '../topics';
import { TopicsServiceService } from '../topics-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topicslist',
  templateUrl: './topicslist.component.html',
  styleUrls: ['./topicslist.component.css']
})
export class TopicslistComponent implements OnInit {
  
  topics: Topics[];
  constructor(private topicsServiceService : TopicsServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTopics();
  }

  private getTopics(){
    this.topicsServiceService.getTopicsList().subscribe( data => {
      this.topics = data;
    });
  }
  topicDetails(id: number){
    this.router.navigate(['/topic-details', id]);
  }
  updateTopics(id: number){
    this.router.navigate(['/update-topics', id]);
  }
  deleteTopics(id: number){
    this.topicsServiceService.deleteTopics(id).subscribe( data => {
      console.log(data);
      this.getTopics();
      this.router.navigate(['/topicslist'])
    })
  }
}