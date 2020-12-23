import uniqid from "uniqid";

let sample = [
  {
    id: uniqid(),
    title: "dvs",
    note: "hi",
    list: [
      { name: "sd", completed: true, id: uniqid() },
      { name: "sd", completed: false, id: uniqid() },
    ],
    project: "slsl",
    date: "sdvsdv",
  },
  {
    id: uniqid(),
    title: "dvs",
    note: "hi",
    list: [
      { name: "sd", completed: false, id: uniqid() },
      { name: "sd", completed: false, id: uniqid() },
    ],
    project: "slsl",
    date: "sdvsdv",
  },
];

export default sample;
