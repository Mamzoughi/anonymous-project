import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { CupEventComponent } from './cup-event/cup-event.component';
import { ResultComponent } from './result/result.component';
import { NewsComponent } from './news/news.component';
import { StandingsComponent } from './standings/standings.component';
import { BlogComponent } from './blog/blog.component';
import { InfoComponent } from './info/info.component';
import { ArticleComponent } from './article/article.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { PalyersTableComponent } from './components/palyers-table/palyers-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { SearchComponent } from './components/search/search.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { BannerComponent } from './components/banner/banner.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { CustomFilterPipe } from './pipes/custom-filter.pipe';
import { HttpClientModule} from '@angular/common/http';
// import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { UsersTableComponent } from './users-table/users-table.component';
import { TestComponent } from './test/test.component';
import { SearchWeatherComponent } from './components/search-weather/search-weather.component';
import { JwPaginationComponent, JwPaginationModule } from 'jw-angular-pagination';
import { SportApiComponent } from './components/sport-api/sport-api.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    MatchesComponent,
    TeamsComponent,
    PlayersComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    MatchFormComponent,
    PlayerFormComponent,
    AddTeamComponent,
    EditTeamComponent,
    MatchesTableComponent,
    AdminComponent,
    PalyersTableComponent,
    SearchComponent,
    MatchInfoComponent,
    BannerComponent,
    PlayerInfoComponent,
    TeamsTableComponent,
    TeamInfoComponent,
    SearchMatchComponent,
    CustomFilterPipe,
    UsersTableComponent,
    TestComponent,
    SearchWeatherComponent,
    SportApiComponent,
    JwPaginationComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    // JwPaginationModule
    // InMemoryWebApiModule.forRoot(DataService)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
