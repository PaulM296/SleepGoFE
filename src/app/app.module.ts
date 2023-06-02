import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialModule } from "./material.module";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { RegisterComponent } from './register/register.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterOutlet } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import { HotelComponent } from './hotel/hotel.component';
import { RoomComponent } from './room/room.component';
import { LogoutComponent } from './logout/logout.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatListModule} from "@angular/material/list";
import { UserAccountComponent } from './user-account/user-account.component';
import {NgOptimizedImage} from "@angular/common";
import {CdkListbox} from "@angular/cdk/listbox";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'hotel', component: HotelComponent},
  {path: 'room', component: RoomComponent},
  {path: 'user-account', component: UserAccountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    MapComponent,
    RegisterComponent,
    ReviewsComponent,
    HomeComponent,
    HotelComponent,
    RoomComponent,
    LogoutComponent,
    UserAccountComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MaterialModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule,
    MatListModule,
    NgOptimizedImage,
    CdkListbox
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
