import "./styles.scss";

let dot = document.querySelectorAll(".dot");

dot.forEach(Element => Element.addEventListener("click", () => {
    console.log("dot move");
}))
