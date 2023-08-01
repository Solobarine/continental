export const starred = (element) => {
    const selected_star = element.$el.querySelector(".star")
    selected_star.getAttribute("name") === "star-outline"
      ? selected_star.setAttribute("name", "star")
      : selected_star.setAttribute("name", "star-outline")
}

export const opened = (messages, element, id) => {
  console.log(id);
  element.$el.classList.remove('opened')
  messages.map((message) => {if(message.id === id) message.opened = 1})
}

export const filterMessages = (variable, messages, condition) => {
  if (messages) {
    variable = messages.filter((message => message[condition]))
  }
  return variable
}
