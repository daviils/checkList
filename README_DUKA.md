# PROJETO DUKA

Clonar repositório GIT, iniciar projeto, importar e utilizar jquery e outras libs JS com angular;

Estruturar criação de componentes, rotas, métodos de manipulação de dados na tela, aplicações de sliders, acordeons, datepickers, validações JS e exibições de mensagens no navegador;

#### Libs incorporadas:

| NOME | USO |
| ------ | ------ |
| Angular 9 - jquery - bootstrap | Projeto Padrão |
| angular-svg-icon | Icones SVG |
| sweetalert2 | Alertas e confirmações |
| ngx-spinner | Loading tela |


#### Libs ocasionais:

| NOME | USO |
| ------ | ------ |
| moment | Trabalhar com datas e formatações |
| daterangepicker | Input com seleção de data início e final |
| ngx-mask | Mascaras em campos |
| ng2-currency-mask | Mascara moeda |
| ngx-translate | Multiplos idiomas |
| ngx-slick-carousel | Sliders |


&nbsp;

# ESTRUTURA DE ARQUIVOS

Essa é a estrtura de diretórios e arquivos padrão em um projeto angular 9:

```sh
- src
   - app
     - base (*Arquivos typescript globais)
     - model (*Arquivos typescript com classes. Sugestão: https://app.quicktype.io )
     - service (*Componentes de serviço)
     - views (*Componentes do projeto sendo arquivos html e typescript separados por diretórios)
   - assets (*Imagens, SVG, Fonts, arquivos que necessitem acesso por URL)
   - front (*Arquivos de estilo SASS globais e ocasionais)
```

&nbsp;

# NOMENCLATURA CLASSES CSS

Como pattern utilizamos a estrutura do BEM um nome de classe [BEM](https://seesparkbox.com/foundry/bem_by_example) inclui até três partes.

    Bloco: o elemento pai mais externo do componente é definido como o bloco.
    Elemento: dentro do componente pode haver um ou mais filhos chamados elementos.
    Modificador: um bloco ou elemento pode ter uma variação representada por um modificador.
    
Se todos os três forem usados em um nome, será algo parecido com este:

```sh
<button class=”btn”>Click me!</button>
<style>
    .btn {}
</style>  
```

#### Componente com um modificador

Um componente pode ter uma variação. A variação deve ser implementada com uma classe modificadora.

```sh
<button class="btn btn-secondary">Click me!</button>
<style>
    .btn { display: inline-block; color: blue; }
    .btn-secondary { color: green; }
</style>
```

Outro exemplo com uso de bloco e elemento, mas sem modificadores:

```sh
<figure class="photo">
    <img class="photo_img" src="me.jpg">
    <figcaption class="photo_caption">Look at me!</figcaption>
</figure>
```

&nbsp;

# TAMANHOS DE FONTES

Referência: https://tableless.com.br/unidade-pixels-em-rem/

Utilizamos a formatação de tamanho com os valores declarados com a unidade “EM”.

As fontes e tamanhos estão configurados em variáveis no arquivo front/variables.scss:

#### Typography

    $base-font-color:                       $gray-color;
    $base-font-family:                      'Arial';
    $base-font-family-secondary:            'Arial Black';
    $base-font-size:                        1em;
    
#### Font Size
    $font-size-max-small:                   0.37em;
    
    $font-size-extra-small:                 0.43em;
    $font-size-small:                       0.62;
    $font-size-big-small:                   0.75em;
    
    $font-size-extra-medium:                0.9em;
    $font-size-medium:                      1em;
    $font-size-big-medium:                  1.10em;
    
    $font-size-extra-large:                 1.12em;
    $font-size-large:                       1.25em;
    $font-size-big-large:                   1.37em;
    
    $font-size-max-large:                   2em;

### FONTES RESPONSIVAS

Para variação no tamanho das fontes em diferentes resoluções no arquivo raiz style.scss

```sh
body{
  font-size: $font-size-max-large;
  
  @include media-breakpoint-down('md') {
    font-size: $font-size-big-small !important;
  }
  
  @include media-breakpoint-up('xxl') {
    font-size: $font-size-big-medium !important;
  }
}
```

&nbsp;

# CORES

As cores são utilizadas como variáveis no arquivo front/variables.scss:

    $primary-color:                       #265ba3;
    $secondary-color:                     #a6a7ac;
    $tertiary-color:                      #f2cb4a;
    $quaternary-color:                    #10a715;
    $quinary-color:                       #213769;
    
    $gray-color:                          #757679;
    
    $white:                               #ffffff;
    $black:                               #000000;

&nbsp;

# GRID E ESPAÇOS

Para construção e formatação do html/css utilizamos flex box e boostrap como sistema de grid e espaçamentos;

- https://getbootstrap.com/docs/4.0/layout/grid/
- https://www.w3schools.com/css/css3_flexbox.asp

Utilizando padding e margin com variavel $grid-gutter-width fazer somas|divisão|multiplicação de espaçamentos;
```sh
.header{
  padding: ($grid-gutter-width / 3) ($grid-gutter-width / 2);
}
```

&nbsp;

# COMPONENTIZAÇÃO DE ELEMENTOS

Os componentes devem ser focados, independentes, reutilizáveis, pequenos e testáveis.
Melhor composição. Isso significa que novos componentes podem ser construídos estendendo os existentes. Isso novamente permite uma grande reutilização de código, evitando a reimplementação da mesma funcionalidade entre projetos.

### Exemplo de componentes:

    MAIN
    HEADER
    FOOTER
    LOGIN
    USER
    HOME
    

> Separação de preocupações. Se cada componente abordar uma preocupação específica, isso simplifica o ciclo de atualização, pois um componente nem sempre precisa saber os detalhes dos outros. Observe que a separação de interesses nem sempre significa separação de tecnologias. Manter as partes lógicas e relacionadas de um sistema juntas pode torná-lo mais fácil de entender e manter.


&nbsp;

# ESTRUTURA PROJETO - BASE COMPONENTE

&nbsp;

# ICONES

Lib: https://www.npmjs.com/package/angular-svg-icon

Utilização conforme especificação do link acima, o armazenamento do SVG é realizado no diretório:

  - assets/svg/

```sh
<svg-icon class="svg" src="assets/svg/NOME_ICONE.svg"></svg-icon>
```

&nbsp;

# SWEET ALERTS

Lib: https://www.npmjs.com/package/sweetalert2
 
Utilização conforme especificação do link acima, o método é localizado no "Base Componente":

Envio de parametros (Título, Mensagem, Tipo: null|info|warning|danger|success)
 
```sh
showMessage(t: string, m: string, type: any = null) {
    Swal.fire({
      title: t,
      text: m,
      icon: type,
      confirmButtonColor: '#6f42c1',
    });
  }
```

Envio de parametros (Título, Mensagem, Callback)
```sh
  confirmMessage(t: string, m: string, callback: any = null) {
    Swal.fire({
      title: t,
      text: m,
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: this.translate.instant('baseComponent.warningConfirm'),
      cancelButtonText: this.translate.instant('baseComponent.warningDeny'),
      confirmButtonColor: '#6f42c1',
      cancelButtonColor: '#dc3545'
    }).then((result) => {
      if (!this.isNullOrUndefined(result.value) && result.value === true) {
        if (callback != null) {
          callback();
        }
      }
    });
  }
```

### ALERTAS PADRÃO

Os alertas podem ser executados da seguinte forma:

```sh
showMessage('Titulo do Alerta!', 'Aqui vem a nossa mensagem.', 'info');
```


### ALERTAS DE CONFIRMAÇÃO

Os alertas de confirmação podem ser executados da seguinte forma, enviando o método que será enviado após confirmação do usuário:

```sh
confirmMessage('Titulo da Confirmação!', 'Aqui vem a nossa mensagem se deseja prosseguir?', () => {
        this.actionConfirmMessage();
      });
```
 
&nbsp;

# VALIDAÇÃO FORMULÁRIOS

Método para validação de models antes de enviar ao serviço;

```sh
actionSaveUser() {
  
  if (!this.isAcceptTerm) {
    this.showMessage('Atenção', 'Aceite os termos antes de continuar.', 'warning');
    return;
  }
  
  // VALIDAÇÕES OCASIONAIS DE EMAIL, CPF, DATAS OU QUALQUER OUTRA É AQUI...
  if (!super.isEMailValid(this.model.email) || !super.isCPFValid(this.model.cpf)) {
    return;
  }
  
  const arrValidateFields = [
          {value: this.model.motherName, text: 'Nome da mãe<br>'},
          {value: this.model.cep, text: 'CEP <br>'},
          {value: this.model.address, text: 'Endereço <br>'},
          {value: this.model.addressNumber, text: 'Número<br>'},
          {value: this.model.neighborhood, text: 'Bairro<br>'},
          {value: this.model.state, text: 'Estado <br>'},
          {value: this.model.city, text: 'Cidade <br>'}
        ];
      
  const stringError = this.validateField(arrValidateFields);
  
  if (!super.isNullOrEmpty(stringError)) {
    this.showMessage('Atenção', `Preencha os campos corretamente: <br><br> ${stringError}`);
    return;
  }
  
}
```

Método que valida array criado "arrValidateFields";

- Retornando string vazia ou contendo string com os nomes dos campos sem preenchimento e nulos:

```sh
  validateField(obj) {
    let strError = ``;
    obj.map((e) => {
      if (this.isNullOrEmpty(e.value)) {
        strError += `${e.text}`;
      }
    });
    return strError;
  }
```

#### BaseComponent:  Método para validação de e-mail

Método recebe string do e-mail em caso de erro executa alerta e retorna boleano 'false'.

```sh
isEMailValid(strEmail) {
  const str = strEmail;
  const exp = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
  const testResult = exp.test(str)
  if (!testResult) {
    this.showMessage('Atenção', 'Informe um e-mail válido para prosseguir.', 'warning');
  }
  return testResult;
}
```

Uso:
```sh
  if (!super.isEMailValid(this.model.email)) { return; }
```

#### BaseComponent: Método para validação de CPF

Método recebe string do CPF em caso de erro executa alerta e retorna boleano 'false'.

```sh
isCPFValid(strCPF) {
  let Soma;
  let Resto;
  Soma = 0;
  const strErrorTitle = 'Atenção';
  const strErrorDescription = 'Informe um CPF válido para prosseguir.';
  strCPF = strCPF.replace(/\D+/g, '');
  if (strCPF === '00000000000' || strCPF === '12112112155') {
    this.showMessage(strErrorTitle, strErrorDescription, 'warning');
    return false;
  }
  // tslint:disable-next-line:radix
  for (let i = 1; i <= 9; i++) {
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }
  Resto = (Soma * 10) % 11;
  if ((Resto === 10) || (Resto === 11)) {
    Resto = 0;
  }
  // tslint:disable-next-line:radix
  if (Resto !== parseInt(strCPF.substring(9, 10))) {
    this.showMessage(strErrorTitle, strErrorDescription, 'warning');
    return false;
  }
  Soma = 0;
  // tslint:disable-next-line:radix
  for (let i = 1; i <= 10; i++) {
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  }
  Resto = (Soma * 10) % 11;
  if ((Resto === 10) || (Resto === 11)) {
    Resto = 0;
  }
  // tslint:disable-next-line:radix
  if (Resto !== parseInt(strCPF.substring(10, 11))) {
    this.showMessage(strErrorTitle, strErrorDescription, 'warning');
    return false;
  }
  return true;
}
```

Uso:
```sh
  if (!super.isCPFValid(this.model.cpf)) { return; }
```

&nbsp;

# MODELS – OBJETO E ARRAY

Criando arquivos typescript para model;
Importando model criando variável;
Criação e manipulação do model;
Transformar json em classes typescript:  https://app.quicktype.io/


&nbsp;

# SERVICES
Criação e utilização de services typescript;
Importação e chamadas de métodos get, post e put com ou sem parametros;
DataServices, Subscribe e EventBus;
