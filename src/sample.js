import { randomNum } from "./utils";

let sample = [
  {
    id: "sample1",
    title: "dvs",
    note: "hi",
    list: [
      { name: "sd", completed: true, id: randomNum() },
      { name: "sd", completed: false, id: randomNum() },
    ],
    project: "slsl",
    date: "sdvsdv",
  },
  {
    id: "sample2",
    title: "dvs",
    note: "hi",
    list: [
      { name: "sd", completed: false, id: randomNum() },
      { name: "sd", completed: false, id: randomNum() },
    ],
    project: "slsl",
    date: "sdvsdv",
  },
];

export default sample;
