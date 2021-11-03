import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'list', component: ListComponent}
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
