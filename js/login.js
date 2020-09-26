//validar endereco de email
function isEmail(email){
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  //validar validacoes e liberar button
  function validar(x,y,btn){
    if(x && y){
      btn.prop('disabled', false);
    }else{
      btn.prop('disabled', true);
    }
  }
  function newValidar(x,y,z,btn2){
    if(x && y && z){
      btn2.prop('disabled', false);
    }else{
      btn2.prop('disabled', true);
    }
  }
  //checar login para usuario do sistema
  function checarLogin(){
    let password = $("#inputPassword");
    let login = $("#login");
    let email = $("#inputEmail");
    let msgEmail = $("#msgEmail");
    let msgPassword = $("#msgPassword");
    let validacao1 = false;
    let validacao2 = false;
  //usuario esta digitando no input de password
    password.keyup(function(){
      if(password.val().length >= 6 && password.val().length <= 20){
        password.removeClass('is-invalid');
        msgPassword.addClass('d-none');
        password.addClass('is-valid');
        validacao1 = true;
      }else{
        password.removeClass('is-valid');
        validacao1 = false;
      }
      validar(validacao1, validacao2, login);
    });
  //usuario saiu do input de password
    password.blur(function(){
      if(!validacao1){
        password.addClass('is-invalid');
        msgPassword.removeClass('d-none');
      }else{
        msgPassword.addClass('d-none');
      }
    });
  //usuario esta digitando no input de email
    email.keyup(function(){
      if(isEmail(email.val())){
        email.removeClass('is-invalid');
        msgEmail.addClass('d-none');
        email.addClass('is-valid');
        validacao2 = true;
      }else{
        email.removeClass('is-valid');
        validacao2 = false;
      }
      validar(validacao1, validacao2, login);
    });
  //usuario saiu do input de email
    email.blur(function(){
      if(!validacao2){
        email.addClass('is-invalid');
        msgEmail.removeClass('d-none');
      }else{
        msgEmail.addClass('d-none');
      }
    });
  };
  /////////////////////  ////// /////
  /////////////////////  ////// ////
  /////////////////////  /////// ///
  //checar novo usuario do sistema
  function checarNewUser(){
    newLogin =        $("#newLogin");
    let newPassword =     $("#inputNewPassword");
    let newEmail =        $("#inputNewEmail");
    let newNickname =     $("#inputNewNickname");
    let newMsgEmail =     $("#newMsgEmail");
    let newMsgPassword =  $("#newMsgPassword");
    let newMsgNickname =  $("#newMsgNickname");

    let validacao1 = false;
    let validacao2 = false;
    let validacao3 = false;

  //usuario esta digitando no input de apelido
  newNickname.keyup(function(){
      if(newNickname.val().length >= 2 && newNickname.val().length <= 20){
        newNickname.removeClass('is-invalid');
        newMsgNickname.addClass('d-none');
        newNickname.addClass('is-valid');
        validacao1 = true;
      }else{
        newNickname.removeClass('is-valid');
        validacao1 = false;
      }
      newValidar(validacao1, validacao2, validacao3, newLogin);
    });
  //usuario saiu do input de apelido
    newNickname.blur(function(){
      if(!validacao1){
        newNickname.addClass('is-invalid');
        newMsgNickname.removeClass('d-none');
      }else{
        newMsgNickname.addClass('d-none');
      }
    });  
  //usuario esta digitando no input de password
    newPassword.keyup(function(){
      if(newPassword.val().length >= 6 && newPassword.val().length <= 20){
        newPassword.removeClass('is-invalid');
        newMsgPassword.addClass('d-none');
        newPassword.addClass('is-valid');
        validacao2 = true;
      }else{
        newPassword.removeClass('is-valid');
        validacao2 = false;
      }
      newValidar(validacao1, validacao2, validacao3, newLogin);
    });
  //usuario saiu do input de password
    newPassword.blur(function(){
      if(!validacao2){
        newPassword.addClass('is-invalid');
        newMsgPassword.removeClass('d-none');
      }else{
        newMsgPassword.addClass('d-none');
      }
    });
  //usuario esta digitando no input de email
    newEmail.keyup(function(){
      if(isEmail(newEmail.val())){
        newEmail.removeClass('is-invalid');
        newMsgEmail.addClass('d-none');
        newEmail.addClass('is-valid');
        validacao3 = true;
        console.log('email');
      }else{
        newEmail.removeClass('is-valid');
        validacao3 = false;
        console.log('email nao');
      }
      newValidar(validacao1, validacao2, validacao3, newLogin);
    });
  //usuario saiu do input de email
    newEmail.blur(function(){
      if(!validacao3){
        newEmail.addClass('is-invalid');
        newMsgEmail.removeClass('d-none');
      }else{
        newMsgEmail.addClass('d-none');
      }
    });
  };