function jumpLine() {
  document.write("<br>");
}
function print(text) {
  document.write(text);
  jumpLine();
}

let allPar = 2;

while (allPar <= 100) {
  print(allPar);
  allPar = allPar + 2;
}
print("Fin");
