import _ from "lodash";
import "./style.css";
// import hazerTrans from "../images/hazertrans.png";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
 const btn = document.createElement("button");

  // Lodash, currently included via a script,
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
 btn.innerHTML = "Click me and check the console!";
 btn.onclick = printMe;

 element.appendChild(btn);

  // Add the image to our existing div.
  const MyhazerTrans = new Image();
  MyhazerTrans.src = hazerTrans;

  element.appendChild(MyhazerTrans);

  return element;
}

document.body.appendChild(component());
