import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {NgxSpinnerService} from 'ngx-spinner';
import Swal from 'sweetalert2';

export class BaseComponent {

  constructor(public router: Router,
              public loading: NgxSpinnerService,
              public translate: TranslateService) {
  }

  showMessage(t: string, m: string, type: any = null) {
    Swal.fire({
      title: t,
      text: m,
      icon: type,
      confirmButtonColor: '#265ba3',
    });
  }

  confirmMessage(t: string, m: string, callback: any = null) {
    Swal.fire({
      title: t,
      text: m,
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: this.translate.instant('baseComponent.confirmMessage.yes'),
      cancelButtonText: this.translate.instant('baseComponent.confirmMessage.no'),
      confirmButtonColor: '#265ba3',
      cancelButtonColor: '#dc3545'
    }).then((result) => {
      if (!this.isNullOrUndefined(result.value) && result.value === true) {
        if (callback != null) {
          callback();
        }
      }
    });
  }

  isNullOrUndefined(value) {
    return typeof value === 'undefined' || value == null || value.length === 0;
  }

  validateField(obj) {
    let strError = ``;
    obj.map((e) => {
      if (this.isNullOrUndefined(e.value)) {
        strError += `${e.text}`;
      }
    });
    return strError;
  }

  isEMailValid(strEmail) {
    const str = strEmail;
    const exp = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
    const testResult = exp.test(str);
    if (!testResult) {
      this.showMessage('Atenção', 'Informe um e-mail válido para prosseguir.', 'warning');
    }
    return testResult;
  }

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
    for (let i = 1; i <= 9; i++) {
      // tslint:disable-next-line:radix
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
    for (let i = 1; i <= 10; i++) {
      // tslint:disable-next-line:radix
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
}
