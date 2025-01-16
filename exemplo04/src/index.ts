import { Animal } from "./models/Animal";
import { BubbleSort } from "./sortalgorithms/BubbleSort";
import { animals } from "./data/animals.json";

const animalsComparison = (a: Animal, b: Animal) =>
  a.popularName > b.popularName;

const bubbleSort = new BubbleSort<Animal>(animals, animalsComparison);
bubbleSort.sort();
console.log(bubbleSort.values);
