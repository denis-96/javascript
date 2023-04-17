// Примеси (Mixins). Что это, где и для чего используются

/*
const ShopMixin = {
  getPrice() {
    return 0;
  },
  getWeight() {
    return 0;
  },
  getSize() {
    return 0;
  },
  getPages() {
    return 0;
  },
};

class Apple {
  constructor(price, sort) {
    this.price = price;
    this.sort = sort;
  }
}
Object.assign(Apple.prototype, ShopMixin);
Apple.prototype.getPrice = function () {
  return this.price;
};

class ToyBoy {
  constructor(price, name) {
    this.price = price;
    this.name = name;
  }
}
Object.assign(ToyBoy.prototype, ShopMixin);
ToyBoy.prototype.getPrice = function () {
  return this.price;
};

class Book {
  constructor(price, title, pages) {
    this.price = price;
    this.title = title;
    this.pages = pages;
  }
}

Object.assign(Book.prototype, ShopMixin);
Book.prototype.getPrice = function () {
  return this.price;
};
Book.prototype.getPages = function () {
  return this.pages;
};
*/

class ShopMixin {
  getPrice() {
    return 0;
  }
  getWeight() {
    return 0;
  }
  getSize() {
    return 0;
  }
  getPages() {
    return 0;
  }
}

class Apple extends ShopMixin {
  constructor(price, sort) {
    super();
    this.price = price;
    this.sort = sort;
  }
  getPrice = function () {
    return this.price;
  };
}

class ToyBoy extends ShopMixin {
  constructor(price, name) {
    super();
    this.price = price;
    this.name = name;
  }
  getPrice = function () {
    return this.price;
  };
}

class Book extends ShopMixin {
  constructor(price, title, pages) {
    super();
    this.price = price;
    this.title = title;
    this.pages = pages;
  }
  getPrice = function () {
    return this.price;
  };
  getPages = function () {
    return this.pages;
  };
}

const list = [];

list.push(new Apple(100, "Белый налив"));
list.push(new ToyBoy(200, "Кукла"));

list.push(new Book(20, "Муму", 100));
list.push(new Book(40, "Евгений Онегин", 90));
list.push(new Book(30, "Мастер и Маргарита", 500));

list.sort((a, b) => a.getPages() - b.getPages());
for (const s of list) {
  console.log(s.getPages());
}
