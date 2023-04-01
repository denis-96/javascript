"use strict";
// ES6 import/export
import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calc from "./modules/calc";
import forms from "./modules/forms";
import slider from "./modules/slider";

window.addEventListener("DOMContentLoaded", (e) => {
  /* CommonJS
  const tabs = require("./modules/tabs"),
    modal = require("./modules/modal"),
    timer = require("./modules/timer"),
    cards = require("./modules/cards"),
    calc = require("./modules/calc"),
    forms = require("./modules/forms"),
    slider = require("./modules/slider");
  */

  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  modal("[data-modal]", ".modal");
  timer(".timer", "2023-04-20T12:00:00");
  cards();
  calc();
  forms("form");
  slider({
    container: ".offer__slider",
    wrapper: ".offer__slider-wrapper",
    slide: ".offer__slide",
    prevArrow: ".offer__slider-prev",
    nextArrow: ".offer__slider-next",
    totalCounter: "#total",
    currentCounter: "#current"
  });
});
