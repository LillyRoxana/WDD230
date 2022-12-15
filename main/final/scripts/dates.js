//GETS CURRENT YEAR | Footer
//Get current year
const current_date = new Date();
const currentyear = current_date.getFullYear();

//Use querySelector to access the HTML element.
document.querySelector("#currentyear").textContent = currentyear;

////GETS LAST MODIFICATION DATE | Footer
//Tranforms lastModified into a Date object.
const oLastModif = new Date(document.lastModified);

dateformat = new Intl.DateTimeFormat("de-AT", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
})
  .format(oLastModif)
  .replace(/\./g, "/");

//Use querySelector to access the HTML element.
document.querySelector("#lastModified").textContent = dateformat;
