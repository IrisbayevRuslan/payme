const usercount = document.getElementById("userCount") as HTMLInputElement;
const cardcount = document.getElementById("cardCount") as HTMLInputElement;
const btn_send = document.getElementById("btn_send") as HTMLButtonElement


btn_send.addEventListener("click", () => {
 console.log(usercount.value);
 console.log(cardcount.value);
});