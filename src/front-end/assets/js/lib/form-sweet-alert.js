//Sweet Alert

//Mascara E-mail
function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test($email);
}

//Mascara de telefone
function mask(o, f) {
  setTimeout(function () {
    var v = mphone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}

function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}

//Sweet Alert Newsletter
function validarContato() {
  var nome = Newsletter.nome.value;
  var email = Newsletter.email.value;

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  if (nome == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha os campos corretamente",
      showConfirmButton: false,
      timer: 1500,
    });
    Newsletter.nome.focus();
    return false;
  }

  if (email == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com seu email",
      showConfirmButton: false,
      timer: 1500,
    });
    Newsletter.email.focus();
    return false;
  } else {
    swalWithBootstrapButtons
      .fire({
        title: "Confirme?",
        text: "De acordo com as Leis 12.965/2014 e 13.709/2018, que regulam o uso da Internet e o tratamento de dados pessoais no Brasil, ao me inscrever autorizo a Agrocana a enviar notificações por e-mail ou outros meios e concordo com sua Política de Privacidade.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Concordo",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            icon: "success",
            title: "Sucesso!",
            text: "Em breve enviaremos as nossas Blog para você.",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            icon: "error",
            title: "Oops...",
            text: "Você não aceitou nossa política de privacidade.",
          });
        }
      });
  }
}

function validarContato2() {
  var nome = NewsletterModel2.nome.value;
  var email = NewsletterModel2.email.value;

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  if (nome == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha os campos corretamente",
      showConfirmButton: false,
      timer: 1500,
    });
    NewsletterModel2.nome.focus();
    return false;
  }

  if (email == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com seu email",
      showConfirmButton: false,
      timer: 1500,
    });
    NewsletterModel2.email.focus();
    return false;
  } else {
    swalWithBootstrapButtons
      .fire({
        title: "Confirme?",
        text: "De acordo com as Leis 12.965/2014 e 13.709/2018, que regulam o uso da Internet e o tratamento de dados pessoais no Brasil, ao me inscrever autorizo a Agrocana a enviar notificações por e-mail ou outros meios e concordo com sua Política de Privacidade.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Concordo",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            icon: "success",
            title: "Sucesso!",
            text: "Em breve enviaremos as nossas Blog para você.",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            icon: "error",
            title: "Oops...",
            text: "Você não aceitou nossa política de privacidade.",
          });
        }
      });
  }
}

//Sweet Alert Page Contato
function validarFormComercial() {
  var nome = formComercial.nome.value;
  var email = formComercial.email.value;
  var whatsapp = formComercial.whatsapp.value;
  var profissao = formComercial.profissao.value;
  var mensagem = formComercial.mensagem.value;

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  if (nome == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha os campos corretamente",
      showConfirmButton: false,
      timer: 1500,
    });
    formComercial.nome.focus();
    return false;
  }

  if (email == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com seu email",
      showConfirmButton: false,
      timer: 1500,
    });
    formComercial.email.focus();
    return false;
  }

  if (whatsapp == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com seu número do whatsapp",
      showConfirmButton: false,
      timer: 1500,
    });
    formComercial.whatsapp.focus();
    return false;
  }

  if (profissao == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com sua profissão",
      showConfirmButton: false,
      timer: 1500,
    });
    formComercial.profissao.focus();
    return false;
  }

  if (mensagem == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com seu mensagem",
      showConfirmButton: false,
      timer: 1500,
    });
    formComercial.mensagem.focus();
    return false;
  } else {
    swalWithBootstrapButtons
      .fire({
        title: "Confirme?",
        text: "De acordo com as Leis 12.965/2014 e 13.709/2018, que regulam o uso da Internet e o tratamento de dados pessoais no Brasil, ao me inscrever autorizo a Agrocana a enviar notificações por e-mail ou outros meios e concordo com sua Política de Privacidade.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Concordo",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            icon: "success",
            title: "Sucesso!",
            text: "Em breve enviaremos as nossas Blog para você.",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            icon: "error",
            title: "Oops...",
            text: "Você não aceitou nossa política de privacidade.",
          });
        }
      });
  }
}

function validarFormFinanceiro() {
  var nome = formFinanceiro.nome.value;
  var email = formFinanceiro.email.value;
  var whatsapp = formFinanceiro.whatsapp.value;
  var profissao = formFinanceiro.profissao.value;
  var mensagem = formFinanceiro.mensagem.value;

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  if (nome == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha os campos corretamente",
      showConfirmButton: false,
      timer: 1500,
    });
    formFinanceiro.nome.focus();
    return false;
  }

  if (email == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com seu email",
      showConfirmButton: false,
      timer: 1500,
    });
    formFinanceiro.email.focus();
    return false;
  }

  if (whatsapp == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com seu número do whatsapp",
      showConfirmButton: false,
      timer: 1500,
    });
    formFinanceiro.whatsapp.focus();
    return false;
  }

  if (profissao == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com sua profissão",
      showConfirmButton: false,
      timer: 1500,
    });
    formFinanceiro.profissao.focus();
    return false;
  }

  if (mensagem == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com seu mensagem",
      showConfirmButton: false,
      timer: 1500,
    });
    formFinanceiro.mensagem.focus();
    return false;
  } else {
    swalWithBootstrapButtons
      .fire({
        title: "Confirme?",
        text: "De acordo com as Leis 12.965/2014 e 13.709/2018, que regulam o uso da Internet e o tratamento de dados pessoais no Brasil, ao me inscrever autorizo a Agrocana a enviar notificações por e-mail ou outros meios e concordo com sua Política de Privacidade.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Concordo",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            icon: "success",
            title: "Sucesso!",
            text: "Em breve enviaremos as nossas Blog para você.",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            icon: "error",
            title: "Oops...",
            text: "Você não aceitou nossa política de privacidade.",
          });
        }
      });
  }
}

function validarFormMarketing() {
  var nome = formMarketing.nome.value;
  var email = formMarketing.email.value;
  var whatsapp = formMarketing.whatsapp.value;
  var profissao = formMarketing.profissao.value;
  var mensagem = formMarketing.mensagem.value;

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  if (nome == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha os campos corretamente",
      showConfirmButton: false,
      timer: 1500,
    });
    formMarketing.nome.focus();
    return false;
  }

  if (email == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com seu email",
      showConfirmButton: false,
      timer: 1500,
    });
    formMarketing.email.focus();
    return false;
  }

  if (whatsapp == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com seu número do whatsapp",
      showConfirmButton: false,
      timer: 1500,
    });
    formMarketing.whatsapp.focus();
    return false;
  }

  if (profissao == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com sua profissão",
      showConfirmButton: false,
      timer: 1500,
    });
    formMarketing.profissao.focus();
    return false;
  }

  if (mensagem == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com seu mensagem",
      showConfirmButton: false,
      timer: 1500,
    });
    formMarketing.mensagem.focus();
    return false;
  } else {
    swalWithBootstrapButtons
      .fire({
        title: "Confirme?",
        text: "De acordo com as Leis 12.965/2014 e 13.709/2018, que regulam o uso da Internet e o tratamento de dados pessoais no Brasil, ao me inscrever autorizo a Agrocana a enviar notificações por e-mail ou outros meios e concordo com sua Política de Privacidade.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Concordo",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            icon: "success",
            title: "Sucesso!",
            text: "Em breve enviaremos as nossas Blog para você.",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            icon: "error",
            title: "Oops...",
            text: "Você não aceitou nossa política de privacidade.",
          });
        }
      });
  }
}

function validarFormTrabalheConosco() {
  var nome = formTrabalheConosco.nome.value;
  var email = formTrabalheConosco.email.value;
  var whatsapp = formTrabalheConosco.whatsapp.value;
  var profissao = formTrabalheConosco.profissao.value;
  var mensagem = formTrabalheConosco.mensagem.value;

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  if (nome == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha os campos corretamente",
      showConfirmButton: false,
      timer: 1500,
    });
    formTrabalheConosco.nome.focus();
    return false;
  }

  if (email == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com seu email",
      showConfirmButton: false,
      timer: 1500,
    });
    formTrabalheConosco.email.focus();
    return false;
  }

  if (whatsapp == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com seu número do whatsapp",
      showConfirmButton: false,
      timer: 1500,
    });
    formTrabalheConosco.whatsapp.focus();
    return false;
  }

  if (profissao == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com sua profissão",
      showConfirmButton: false,
      timer: 1500,
    });
    formTrabalheConosco.profissao.focus();
    return false;
  }

  if (mensagem == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Preencha o campo com seu mensagem",
      showConfirmButton: false,
      timer: 1500,
    });
    formTrabalheConosco.mensagem.focus();
    return false;
  } else {
    swalWithBootstrapButtons
      .fire({
        title: "Confirme?",
        text: "De acordo com as Leis 12.965/2014 e 13.709/2018, que regulam o uso da Internet e o tratamento de dados pessoais no Brasil, ao me inscrever autorizo a Agrocana a enviar notificações por e-mail ou outros meios e concordo com sua Política de Privacidade.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Concordo",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            icon: "success",
            title: "Sucesso!",
            text: "Em breve enviaremos as nossas Blog para você.",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            icon: "error",
            title: "Oops...",
            text: "Você não aceitou nossa política de privacidade.",
          });
        }
      });
  }
}
