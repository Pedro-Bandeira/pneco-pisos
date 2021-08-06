import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SobreComponent } from './pages/sobre/sobre.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { ProdutoComponent } from './pages/produto/produto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SegurancaEstoqueComponent } from './pages/seguranca-estoque/seguranca-estoque.component';
import { SustentabilidadeComponent } from './pages/sustentabilidade/sustentabilidade.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ProblematizacaoComponent } from './pages/problematizacao/problematizacao.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SobreComponent,
    DashboardComponent,
    ProdutoComponent,
    SegurancaEstoqueComponent,
    SustentabilidadeComponent,
    ClienteComponent,
    ProblematizacaoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
