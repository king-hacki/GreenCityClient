import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './component/user/auth/sign-up/sign-up.component';
import { AuthComponent } from './component/user/auth/auth.component';
import { SignInComponent } from './component/user/auth/sign-in/sign-in.component';
import { SubmitEmailComponent } from './component/user/auth/submit-email/submit-email.component';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { ProposeCafeComponent } from './component/core/propose-cafe/propose-cafe.component';
import { AdminModule } from './component/admin/admin.module';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { DatePipe } from '@angular/common';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatDialogModule,
  MatDialogRef,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatTreeModule
} from '@angular/material';
import { provideConfig } from './config/GoogleAuthConfig';
import { RestoreComponent } from './component/user/restore/restore.component';
import { RestoreFormComponent } from './component/user/restore-form/restore-form.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { UserSettingComponent } from './component/user/user-setting/user-setting.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InterceptorService } from './service/interceptors/interceptor.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// tslint:disable-next-line:max-line-length
import { InputcolorDirective } from './directives/inputcolor.directive';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CoreModule } from './component/core/core.module';
import { EcoNewsModule } from './component/eco-news/eco-news.module';
import { AuthModule } from './component/auth/auth.module';
import { MapModule } from './component/map/map.module';
import { NewFooterComponent } from './component/core/new-footer/new-footer.component';
import { HomeModule } from './component/home/home.module';
import { AboutModule } from './component/about/about.module';
import {UserModule} from './component/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    AuthComponent,
    SignInComponent,
    SubmitEmailComponent,
    RestoreComponent,
    RestoreFormComponent,
    InputcolorDirective,
    NewFooterComponent
  ],
  imports: [
    MatDialogModule,
    AuthModule,
    CoreModule,
    EcoNewsModule,
    HomeModule,
    AboutModule,
    InfiniteScrollModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    AdminModule,
    NgFlashMessagesModule.forRoot(),
    ReactiveFormsModule,
    MatSliderModule,
    MatTreeModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatSelectModule,
    MatRadioModule,
    DragDropModule,
    MapModule,
    UserModule,
  ],
  entryComponents: [
    ProposeCafeComponent,
    RestoreComponent,
    UserSettingComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    { provide: MatDialogRef, useValue: {} },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: false }
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
