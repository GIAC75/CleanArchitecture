export class Author {
    constructor(
      public id: number,
      public name: string,
      public books: number[] = []
    ) {}
  }
  