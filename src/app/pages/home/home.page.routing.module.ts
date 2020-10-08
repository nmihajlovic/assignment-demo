import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BingResultComponent } from 'src/app/features/search/components/search-result/bing-result/bing-result.component';
import { BingResultModule } from 'src/app/features/search/components/search-result/bing-result/bing-result.module';
import { GoogleResultComponent } from 'src/app/features/search/components/search-result/google-result/google-result.component';
import { GoogleResultModule } from 'src/app/features/search/components/search-result/google-result/google-result.module';
import { HomePage } from './home.page';


const routes: Routes = [
  { path: '', component: HomePage, children: [
    { path: 'google-search', component: GoogleResultComponent },
    { path: 'bing-search', component: BingResultComponent },
  ] }
];

@NgModule({
    imports: [
      GoogleResultModule,
      BingResultModule,
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class HomePageRoutingModule { }
