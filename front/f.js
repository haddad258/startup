const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

const password = "Exemple123";

if (pattern.test(password)) {
  console.log("Mot de passe valide");
} else {
  console.log("Mot de passe invalide");
}