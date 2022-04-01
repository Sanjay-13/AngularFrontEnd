import { Component, OnInit } from '@angular/core';
import { Topics } from '../topics'
import { TopicsServiceService } from '../topics-service.service'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-topics',
  templateUrl: './update-topics.component.html',
  styleUrls: ['./update-topics.component.css']
})
export class UpdateTopicsComponent implements OnInit {

  id: number;
  topic: Topics = new Topics();
  constructor(private topicServiceService: TopicsServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.topicServiceService.getTopicById(this.id).subscribe(data => {
      this.topic = data;
    }, error => console.log(error));
  }
  
  goToTopicsList(){
    this.router.navigate(['/topicslist']);
  }
  onSubmit(){
    this.topicServiceService.updateTopics(this.id, this.topic).subscribe( data =>{
      this.goToTopicsList();
    }
    , error => console.log(error));
  }
}

