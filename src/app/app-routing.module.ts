import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { ProblematizacaoComponent } from './pages/problematizacao/problematizacao.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { SegurancaEstoqueComponent } from './pages/seguranca-estoque/seguranca-estoque.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { SustentabilidadeComponent } from './pages/sustentabilidade/sustentabilidade.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'seguranca-estoque', component: SegurancaEstoqueComponent},
  {path: 'sustentabilidade', component: SustentabilidadeComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'problematizacao', component: ProblematizacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
