//Haz tú validación en javascript acá
function validar(){
  var nombre = document.getElementById("name").value;
  var email = document.getElementById("emails").value;
  var asunto = document.getElementById("subject").value;
  var message = document.getElementById("mensagem").value;


  try {
    if (nombre == "" || email == "" ||asunto =="" || message == "" ){
        document.getElementById("button1").disabled = true;
        throw new Error("Name cannot be blank");
        
    }
    else{
      document.getElementById("button1").disabled = false;
      console.log(nombre);
      console.log(email);
      console.log(message);

    }
    return true;
  } catch (error) {
    alert(error.message);
    return false;
  }
  


}

  
  