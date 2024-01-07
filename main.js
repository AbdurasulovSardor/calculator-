let buttons = document.querySelectorAll("button")
let inputValue = document.getElementById("input")
let equalBtn = document.getElementById("equal")
let result = false

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    if (result) {
      inputValue.value = "0"
      result = false
    }
    if (e.target.value == "AC") {
      inputValue.value = "0"
    } else if (e.target.value == "DE") {
      let deleteVal = inputValue.value.slice(0, inputValue.value.length - 1)
      deleteVal == 0 ? inputValue.value = 0 : inputValue.value = deleteVal
    } else {
      inputValue.value !== '0' ? inputValue.value += e.target.value : inputValue.value = e.target.value
    }
  })
})

equalBtn.addEventListener("click", () => {
  inputValue.value = eval(inputValue.value)
  result = true
})