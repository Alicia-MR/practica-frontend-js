import { createListingController } from "./listing/createListingController.js";
import { navbarController } from "./navbar/navbarController.js";

navbarController();

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#create-listing");

    createListingController(form);
});