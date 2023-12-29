import "./style.css";

const burButton = document.getElementById("bur") as HTMLButtonElement;
const crossButton = document.getElementById("cross") as HTMLButtonElement;
const ele = document.getElementById("ele") as HTMLDivElement;

burButton.onclick = () => {
	burButton.style.display = "none";
	crossButton.style.display = "block";
	ele.style.display = "flex";
};
crossButton.onclick = () => {
	crossButton.style.display = "none";
	burButton.style.display = "block";
	ele.style.display = "none";
};
