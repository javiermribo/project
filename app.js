class User {
  constructor(userName, password, role) {
    this.userName = userName;
    this.password = password;
    this.role = role;
  }

  static redirectUser(userType) {
    const users = StoreUsers.getUsers();
    users.find(
        (user) =>
        userInputField2.value === user.userName &&
        passwordInputField2.value === user.password
      );
     if (userType.userName === "Admin") {
      window.location.href = "test.html";
    } else {
      window.location.href = "test2.html";
    }
    navbarAdmin(userType);
  }
}

let localData = localStorage.getItem("user")

/* class Admin extends User {
  constructor(userName, password, role) {
    super(userName, password, role);
  }
} */

class StoreUsers {
  static getUsers() {
    let users;
    if (localStorage.getItem("user") === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem("user"));
    }
    return users;
  }

  static addUserToLS(user) {
    const users = StoreUsers.getUsers();
    users.push(user);
    localStorage.setItem("user", JSON.stringify(users));
  }
}

    //Formulario de inicio de sesión. Captura datos y llama User.redirectUser(user);
    const form_selector2 = document.querySelector("#logInId2");
    form_selector2.addEventListener("submit", (e) => {
      e.preventDefault();
      const userName = document.querySelector("#userInputField2").value;
      const password = document.querySelector("#passwordInputField2").value;

      const user = new User(userName, password);

      User.redirectUser(user);
    });

    //Formulario de registro. Añade usuarios al LS
    const form_selector = document.querySelector("#logInId");
    form_selector.addEventListener("submit", (e) => {
      e.preventDefault();
      const userName = document.querySelector("#userInputField").value;
      const password = document.querySelector("#passwordInputField").value;

      const user = new User(userName, password);

      StoreUsers.addUserToLS(user);
    });

/*     function sayHi(user) {
      const ELEMENT_TO_REPLACE_SELECTOR =
        document.querySelector("#signInAnSignUp");
      const NEW_ELEMENT = document.createElement("p");
      NEW_ELEMENT.classList.add("class", "m-0", "text-white");
      NEW_ELEMENT.textContent = `Hola, ${user.userName}`;
      ELEMENT_TO_REPLACE_SELECTOR.parentNode.replaceChild(
        NEW_ELEMENT,
        ELEMENT_TO_REPLACE_SELECTOR
      );
    } */

    navbarAdmin = (userType) => {
      const navbar_replecement = document.querySelector("#navbarReplace").firstChild;
      const new_navbar_admin = document.createElement("nav");
      new_navbar_admin.classList.add("class", "navbar", "navbar-expand-lg", "navbar-dark", "navbarColor");
      new_navbar_admin.setAttribute("id", "test");
      new_navbar_admin.innerHTML = `
      <a class="navbar-brand text-light" href="index.html">Songify</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon navIconColor"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-light" href="index.html">Home</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Sobre nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="contact-page.html">Contacto</a>
          </li>
        </ul>
          <div>
            <p>Hola, ${userType.userName}</p>
            <a class="btn my-2 my-sm-0 button-primary" href="test.html">Panel de administración</a>
          </div>
      </div>
      `;
      navbar_replecement.parentNode.replaceChild(new_navbar_admin, navbar_replecement);
    }

    defaultNavbar = () => {
      const navbar_replecement = document.querySelector("#navbarReplace").firstChild;
      const new_navbar_admin = document.createElement("nav");
      new_navbar_admin.classList.add("class", "navbar", "navbar-expand-lg", "navbar-dark", "navbarColor");
      new_navbar_admin.setAttribute("id", "test");
      new_navbar_admin.innerHTML = `
      <a class="navbar-brand text-light" href="index.html">Songify</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon navIconColor"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link text-light" href="index.html">Home</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Sobre nosotros</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="contact-page.html">Contacto</a>
          </li>
        </ul>
          <div class="signIn-signUp-btn" id="signInAnSignUp">
            <button class="btn my-2 my-sm-0 button-primary" type="submit">Registrarse</button>
            <button class="btn my-2 my-sm-0 button-secondary" type="submit">Iniciar sesión</button>
          </div>
      </div>
      `;
      navbar_replecement.parentNode.replaceChild(new_navbar_admin, navbar_replecement);
    }
