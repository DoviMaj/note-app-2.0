import uniqid from "uniqid";

let sample = [
  {
    id: uniqid(),
    title: "Adventure",
    note: "my adventure wish list",
    list: [
      {
        name: "Hike the Dobson Trail",
        completed: false,
        id: uniqid(),
      },
      { name: "Canoe Down the Amazon River", completed: true, id: uniqid() },
      {
        name: "Cross the Bridge of the Immortals in China",
        completed: true,
        id: uniqid(),
      },
      {
        name: "Dive Off Stari Most Bridge in Mostar, Bosnia",
        completed: false,
        id: uniqid(),
      },
    ],
    project: "adventure",
    date: "2021-12-17",
  },
  {
    id: uniqid(),
    title: "Be fit",
    note: "and healthy",
    list: [
      { name: "One Handed Push Up", completed: true, id: uniqid() },
      { name: "Run London Marathon", completed: false, id: uniqid() },
      { name: "Stick on a Diet", completed: false, id: uniqid() },
    ],
    project: "Health and Fitness",
    date: "2020-12-17",
  },
];

export default sample;
