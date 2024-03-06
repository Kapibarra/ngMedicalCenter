import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ConsultationComponent } from './pages/consultation/consultation.component';
import { CertificateComponent } from './pages/certificate/certificate.component';

const routes: Routes = [
  { path: '', component: MainPageComponent }, // маршрут для главной страницы
  { path: 'consultation', component: ConsultationComponent }, // маршрут для страницы услуг
  { path: 'about', component: AboutPageComponent }, // маршрут для страницы "О нас"
  { path: 'certificates', component: CertificateComponent }, // маршрут для страницы "Справки"
  { path: 'contacts', component: ContactsPageComponent }, // маршрут для страницы контактов
  // { path: '**', component:  } // маршрут для несуществующих страниц
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
