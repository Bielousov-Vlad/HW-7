let operation = prompt("Введіть операцію (add, sub, mult, div):");

if (
  operation !== "add" &&
  operation !== "sub" &&
  operation !== "mult" &&
  operation !== "div"
) {
  alert("Невірна операція!");
} else {
  let num1 = +prompt("Введіть перше число:");
  let num2 = +prompt("Введіть друге число:");

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "sub":
      result = num1 - num2;
      break;
    case "mult":
      result = num1 * num2;
      break;
    case "div":
      result = num1 / num2;
      break;
  }

  alert(`Результат: ${num1} ${operation} ${num2} = ${result}`);
}
