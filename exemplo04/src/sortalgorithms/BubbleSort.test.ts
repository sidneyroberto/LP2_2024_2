import { animals } from "../data/animals.json";
import { books } from "../data/books.json";
import { Animal } from "../models/Animal";
import { Book } from "../models/Book";
import { BubbleSort } from "./BubbleSort";

let bubbleSort: BubbleSort<Animal | Book>;

const animalsComparison = (a: Animal, b: Animal) =>
  a.popularName > b.popularName;

const booksComparison = (a: Book, b: Book) => a.title > b.title;

const checkSort = <T>(
  list: T[],
  comparisonFuncion: (a: T, b: T) => boolean
) => {
  for (let i = 0; i < list.length - 1; i++) {
    if (!comparisonFuncion(list[i], list[i + 1])) {
      return false;
    }
  }

  return true;
};

describe("Tests over BuubleSort class", () => {
  it("Should sort an Animal array correctly", () => {
    bubbleSort = new BubbleSort<Animal>(animals, animalsComparison);
    bubbleSort.sort();

    const check = checkSort(
      bubbleSort.values,
      (a: Animal, b: Animal) => a.popularName < b.popularName
    );

    expect(check).toBe(true);
  });

  it("should sort a Book array correctly", () => {
    bubbleSort = new BubbleSort<Book>(books, booksComparison);
    bubbleSort.sort();

    const check = checkSort(
      bubbleSort.values,
      (a: Book, b: Book) => a.title < b.title
    );

    expect(check).toBe(true);
  });
});
