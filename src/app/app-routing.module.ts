import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopicslistComponent } from './topicslist/topicslist.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { UpdateTopicsComponent } from './update-topics/update-topics.component';


const routes: Routes = [{path: '/', component: HomeComponent},
                        {path: 'home', component: HomeComponent},
                        {path: 'topicslist', component:TopicslistComponent },
                        {path:'update-topics/:id', component: UpdateTopicsComponent},
                        {path:'topic-details/:id', component: TopicDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
