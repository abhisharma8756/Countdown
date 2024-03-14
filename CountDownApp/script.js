const endDate = "31 January 2024 11:11 AM";

const input = document.querySelectorAll("input");
document.getElementById("end-date").innerHTML = endDate;

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if(diff < 0) return;
  input[0].value = Math.floor(diff/ 3600 / 24)
  input[1].value = Math.floor(diff / 3600) % 24
  input[2].value = Math.floor(diff / 60) % 60
  input[3].value = Math.floor(diff) % 60

};

clock()

setInterval(() => {
    clock()
}, 1000);