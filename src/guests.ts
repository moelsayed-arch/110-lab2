import { animate } from "./animation.js";

const guests = ["john", "jacob", "eric", "johnson"];

export function printGuests() {
  animate("Guests");
  guests.forEach((guests) => console.log(guests));
}
