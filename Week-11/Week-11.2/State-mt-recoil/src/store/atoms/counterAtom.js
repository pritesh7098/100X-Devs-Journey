import { atom } from "recoil";

/* Defining state but with the recoil approach naming atom */

export const counterAtom = atom({
  default: 0,
  key: "ctr",
});
