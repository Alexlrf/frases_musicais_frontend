import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { CardFrasesComponent } from './componentes/card-frases/card-frases.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroFraseComponent } from './componentes/admin/cadastro-frase/cadastro-frase.component';
import { ExcluiAlteraFraseComponent } from './componentes/admin/exclui-altera-frase/exclui-altera-frase.component';
import { AdminComponent } from './views/admin/admin.component';
import { MensagemComponent } from './componentes/shared/mensagem/mensagem.component';
import { ModalLoginComponent } from './componentes/modal-login/modal-login.component';
import { ImagemLogoComponent } from './componentes/shared/imagem-logo/imagem-logo.component';
import { BuscaComponent } from './componentes/shared/busca/busca.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ModalLoginComponent,
    CardFrasesComponent,
    CadastroFraseComponent,
    ExcluiAlteraFraseComponent,
    AdminComponent,
    MensagemComponent,
    ImagemLogoComponent,
    BuscaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
