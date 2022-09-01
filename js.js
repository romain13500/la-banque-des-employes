    //construction du block
    class Employer {
        constructor(firstName, lastName,pseudo, birthday, adress, email, password, salaire) {
            this.firstName = firstName
            this.lastName = lastName
            this.pseudo = pseudo
            this.birthday = birthday
            this.adress = adress
            this.email = email
            this.password = password
            this.salaire = salaire
          
        }
    }

    //recuperation ID
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let pseudo = document.getElementById('pseudo');
    let birthday = document.getElementById('birthday');
    let adress = document.getElementById('adress');
    let mail = document.getElementById('email');
    let password = document.getElementById('password');
    let salaire = document.getElementById('salaire');
    

    // button validation formulaire
    let button = document.getElementById('btn');
    let info = []

    //debut fonction click

    button.addEventListener('click', function (e){
      e.preventDefault()
    let error = document.getElementById('error');
    let errorFirstName= document.getElementById('errorFirstName')
    let errorName = document.getElementById('errorName');
    let errorPseudo = document.getElementById('errorPseudo');
    let errorDate = document.getElementById('errorDate');
    let errorAdress = document.getElementById('errorAdress');
    let errorMail = document.getElementById('errorMail');
    let errorPassword = document.getElementById('errorPassword');
    let errorSalaire = document.getElementById('errorSalaire');
    //expression reguliere
    let myRegexp = /^[A-Za-z.-]{3,20}$/;
    let myRegexp2 = /[A-Za-z0-9.-_]+$/;
    let myRegexp3 = /[0-9]+$/;
    let myRegexpMail = /[A-Za-z.-_0-9]+[@]{1}[A-Za-z0-9]+[.]{1}[a-z]{2,10}/

        //champs recquis

  //prenom
        if(firstName.value == ""){
          errorFirstName.innerHTML = "Votre prénom est recquis",
          errorFirstName.style.color = 'red'
          e.preventDefault()
            return;
        }else if(myRegexp.test(firstName.value) == false){
          errorFirstName.innerHTML = "Lettres et tirets uniquement",
          errorFirstName.style.color = 'red'
          e.preventDefault()
            return;
        }
//nom
        if(lastName.value == ""){
          errorName.innerHTML = "Votre nom est recquis",
          errorName.style.color = 'red'
          e.preventDefault()
            return;
        }else if(myRegexp.test(lastName.value)== false){
          error.innerHTML = "Lettres et tirets uniquement",
          error.style.color = 'red'
          e.preventDefault()
            return;
        }
//pseudo
        if(pseudo.value ==""){
          errorPseudo.innerHTML = "Votre pseudo est recquis",
          errorPseudo.style.color = 'red'
          e.preventDefault()
          return;
        }else if(myRegexp2.test(pseudo.value)== false){
          errorPseudo.innerHTML = "Lettres, chiffre et tirets uniquement",
          errorPseudo.style.color = 'red'
          e.preventDefault()
            return;
        }
//date
        if(birthday.value ==""){
          errorDate.innerHTML = "Date de naissance est recquise",
          errorDate.style.color = 'red'
          e.preventDefault()
            return;
        }

//adress        
        if(adress.value ==""){
          errorAdress.innerHTML = "Votre adresse est recquise",
          errorAdress.style.color = 'red'
            return;
        }else if(myRegexp2.test(adress.value)== false){
          errorAdress.innerHTML = "Verifiez votre adresse",
          errorAdress.style.color = 'red'
          e.preventDefault()
            return;
        }

//email

        if(mail.value == "Email non valide"){
          errorMail.innerHTML = "Votre email est recquis",
          errorMail.style.color = 'red'
          e.preventDefault()
            return;
        }else if(myRegexpMail.test(mail.value)== false){
          errorMail.innerHTML = "Verifiez votre mail",
          errorMail.style.color = 'red'
          e.preventDefault()
            return;
        }

//password

        if(password.value == ""){
          errorPassword.innerHTML = "Votre mot de passe est recquis",
          errorPassword.style.color = 'red'
          e.preventDefault()
            return;
        }else if(myRegexp2.test(password.value)== false){
          errorPassword.innerHTML = "Lettres, chiffre et tirets uniquement",
          errorPassword.style.color = 'red'
          e.preventDefault()
            return;
        }

//salaire

        if(salaire.value == ""){
          errorSalaire.innerHTML = "Votre salaire est recquis",
          errorSalaire.style.color = 'red' 
          e.preventDefault()        
            return;
        }else if(myRegexp3.test(salaire.value)== false){
          errorSalaire.innerHTML = "chiffre uniquement",
          errorSalaire.style.color = 'red'
          e.preventDefault()
            return;
        }
         
        alert("formulaire envoyé")
        

        firstNameValue = firstName.value
        lastNameValue = lastName.value
        pseudoValue = pseudo.value
        birthdayValue = birthday.value
        adressValue = adress.value
        mailValue = mail.value
        passwordValue = password.value
        salaireValue = salaire.value
        
        

        //calcul de l'age
        let monAnnee = new Date(birthdayValue).getFullYear()
        let anneeActuelle = new Date().getFullYear()
        let ageResult = anneeActuelle - monAnnee
      

        //push

        let nouvelArrivant = new Employer(firstNameValue, lastNameValue, pseudoValue, birthdayValue, adressValue, mailValue, passwordValue, salaireValue)
       
        info.push(nouvelArrivant)
        console.log(info);
        let table = document.querySelector("table")
        table.innerHTML = `<tr>
        <th>Nom Prénom</th>
        <th>Pseudo</th>
        <th>Adresse</th>
        <th>Mail</th>
        <th>Password</th>
        <th>Date de naissance</td>
        <th>Salaire</th>
        
      </tr>`
        for (const obj of info) {
            table.innerHTML += `
            <tr>
            <td><a href=""> ${obj.lastName} ${obj.firstName}</a></td>
            <td>${obj.pseudo}</td>
            <td>${obj.adress} </td>
            <td>${obj.email} </td>
            <td>${obj.password} </td>
            <td>${obj.birthday} </td>
            <td>${obj.salaire}</td>
          </tr>
            `            
        } 
      }

    )

   