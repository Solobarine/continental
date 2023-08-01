const select_option = (number, classname) => {
  console.log('here');
    const checks = Array.from(document.querySelectorAll(`.${classname}`));
    console.log(checks);
    checks.map((check) => check.classList.remove("selected"));
    number.$el.classList.add("selected");
};

export default select_option