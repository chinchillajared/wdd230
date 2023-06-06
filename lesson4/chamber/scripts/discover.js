//Show the current date
const today = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(today);

//Show the last update date
const year = today.getFullYear();

document.getElementById("current-year").textContent = `${year} Well Union Commerce Association`;

