typer([1, 2, 3, "fara", [2, 3], true, function () {}]);
function typer(yes) {
  for (let t = 0; t <= yes.length; t++) console.log(typeof yes[t]);
}
let myarray = ["test", "do", 56, 22, true, false];
