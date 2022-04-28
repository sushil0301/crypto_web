import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordsComponent } from './modules/records/records.component';

const routes: Routes = [
  { path: '', redirectTo: 'crypto_exchange', pathMatch: 'full' },
  { path: 'crypto_exchange', component: RecordsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
