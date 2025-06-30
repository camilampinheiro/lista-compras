const removeAlert = document.querySelector("#remove-alert")
const footer = document.querySelector("footer")
const form = document.querySelector("form")
const itemInput = document.querySelector("input") 
const ul = document.querySelector(".list ul") 

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const itemText = itemInput.value.trim()
  if (itemText === "") {
    return
  }

  const li = document.createElement("li")

  const checkBtn = document.createElement("button")
  const checkIcon = document.createElement("ion-icon")
  checkIcon.setAttribute("name", "square-outline")
  checkBtn.appendChild(checkIcon)

  const span = document.createElement("span")
  span.textContent = itemText

  const removeBtn = document.createElement("button")
  removeBtn.classList.add("remove-item")
  const trashIcon = document.createElement("ion-icon")
  trashIcon.setAttribute("name", "trash-outline")
  removeBtn.appendChild(trashIcon)

  removeBtn.addEventListener("click", () => {
    li.remove()
    footer.classList.add("show-alert")
  })

  removeAlert.addEventListener("click", () => {
    footer.classList.remove("show-alert")
  })

  li.appendChild(checkBtn)
  li.appendChild(span)
  li.appendChild(removeBtn)

  ul.appendChild(li)

  itemInput.value = ""
  itemInput.focus()
})

