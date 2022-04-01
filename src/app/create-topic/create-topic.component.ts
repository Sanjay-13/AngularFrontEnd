import { Component, OnInit } from '@angular/core';
import { Topics } from '../topics'
import { TopicsServiceService } from '../topics-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.css']
})
export class CreateTopicComponent implements OnInit {

  topic: Topics = new Topics();
  constructor(private TopicsServiceService: TopicsServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  
  saveTopics(){
    this.TopicsServiceService.createTopic(this.topic).subscribe( data =>{
      console.log(data);
      this.goToTopicsList();
    },
    error => console.log(error));
  }

  goToTopicsList(){
    this.router.navigate(['/topicslist']);
  }
  
  onSubmit(){
    console.log(this.topic);
    this.saveTopics();
  }
}

