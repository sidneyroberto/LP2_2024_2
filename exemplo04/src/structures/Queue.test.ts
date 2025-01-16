import { Book } from "../models/Book";
import { Queue } from "./Queue";

let queue: Queue<Book>;
let book1: Book;
let book2: Book;

describe("Tests over Queue class", () => {
  beforeEach(() => {
    queue = new Queue<Book>();

    book1 = {
      mainAuthorName: "J. R. R. Tolkien",
      title: "The Two Towers",
      pages: 352,
      publicationYear: 1954,
    };

    book2 = {
      mainAuthorName: "J. R. R. Tolkien",
      title: "The Return of the King",
      pages: 416,
      publicationYear: 1955,
    };

    queue.enqueue(book1);
    queue.enqueue(book2);
  });

  it("should enqueue values correctly", () => {
    expect(queue.values[0]).toStrictEqual(book1);
    expect(queue.values[1]).toStrictEqual(book2);
  });

  it("should dequeue values correctly", () => {
    expect(queue.dequeue()).toStrictEqual(book1);
    expect(queue.dequeue()).toStrictEqual(book2);
    expect(queue.dequeue()).toStrictEqual(undefined);
  });

  it("should clear the queue correctly", () => {
    queue.clear();
    expect(queue.values.length).toBe(0);
  });
});
