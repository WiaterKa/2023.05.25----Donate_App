export default function handleRedirection() {
  if (localStorage.user) {
    navigate("/giveaway");
  } else {
    window.alert("Aby oddać rzeczy załóz konto lub zaloguj się!");
  }
}
