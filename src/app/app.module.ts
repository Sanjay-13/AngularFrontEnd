import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthModule } from '@auth0/auth0-angular';
import { TopicslistComponent } from './topicslist/topicslist.component';
import { CreateTopicComponent } from './create-topic/create-topic.component';
import { TopicDetailsComponent } from './topic-details/topic-details.component';
import { UpdateTopicsComponent } from './update-topics/update-topics.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    TopicslistComponent,
    CreateTopicComponent,
    TopicDetailsComponent,
    UpdateTopicsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {path:'', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'topicslist', component: TopicslistComponent},
      {path: 'create-topic', component: CreateTopicComponent},
      {path:'update-topics/:id', component: UpdateTopicsComponent},
      {path:'topic-details/:id', component: TopicDetailsComponent},
      
    ]),
    AuthModule.forRoot({
      domain: 'dev-88-8t7vx.us.auth0.com',
      clientId: 'pCJy6qhxeDF3sONox6JriTzr8zkHjTMa'
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
