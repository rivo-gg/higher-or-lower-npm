import { HigherLowerItem } from "../util/HigherLowerItem";
import { readFile } from "fs";

const data: any = readFile("data.json", (err, data) => {
  if (err) {
    console.log(err);
    return null;
  }

  return data;
});

export default function randomItem(): HigherLowerItem {
  const randomNumber = Math.floor(Math.random() * data.length);

  return data[randomNumber];
}
