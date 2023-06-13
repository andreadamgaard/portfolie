window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenVises");
  //Skjul andre skærme
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  //Vis start skærm
  document.querySelector("#start").classList.remove("hide");
  //Klik på start_knap
  document.querySelector("#start_knap").addEventListener("click", startGame);
}
