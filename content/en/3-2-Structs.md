## 3.2. Structs and records

```c
#include <stdio.h>

struct date {
  int day;
  int month;
  int year;
};

struct person {
  char *name;
  char *city;
  struct date born;
};

int main() {
  struct person p1;
  p1.name = "Marcus";
  p1.city = "Roma";
  p1.born.day = 26;
  p1.born.month = 4;
  p1.born.year = 121;

  printf(
    "Name: %s\nCity: %s\nBorn: %d-%d-%d\n",
    p1.name, p1.city, p1.born.year, p1.born.month, p1.born.day
  );

  return 0;
}
```

> Pascal

```pas
program Example;

type TDate = record
  Year: integer;
  Month: 1..12;
  Day: 1..31;
end;

type TPerson = record
  Name: string[10];
  City: string[10];
  Born: TDate;
end;

var
  P1: TPerson;
  FPerson: File of TPerson;

begin
  P1.Name := 'Marcus';
  P1.City := 'Roma';
  P1.Born.Day := 26;
  P1.Born.Month := 4;
  P1.Born.Year := 121;
  WriteLn('Name: ', P1.Name);
  WriteLn('City: ', P1.City);
  WriteLn('Born: ', P1.Born.Year, '-', P1.Born.Month, '-', P1.Born.Day);
  Assign(FPerson, './record.dat');
  Rewrite(FPerson);
  Write(FPerson, P1);
  Close(FPerson);
end.
```

> Rust

```rs
struct Date {
    year: u32,
    month: u32,
    day: u32,
}

struct Person {
    name: String,
    city: String,
    born: Date,
}

fn main() {
    let p1 = Person {
        name: String::from("Marcus"),
        city: String::from("Roma"),
        born: Date {
            day: 26,
            month: 4,
            year: 121,
        },
    };

    println!(
        "Name: {}\nCity: {}\nBorn: {}-{}-{}\n",
        p1.name, p1.city, p1.born.year, p1.born.month, p1.born.day
    );
}
```

> TypeScript: Interfaces

```ts
interface IDate {
  day: number;
  month: number;
  year: number;
}

interface IPerson {
  name: string;
  city: string;
  born: IDate;
}

// Usage

const p1: IPerson = {
  name: 'Marcus',
  city: 'Roma',
  born: {
    day: 26,
    month: 4,
    year: 121,
  },
};

const date = `${p1.born.year}-${p1.born.month}-${p1.born.day}`;
console.log(`Name: ${p1.name}\nCity: ${p1.city}\nBorn: ${date}\n`);
```

> TypeScript: Classes

```ts
class DateStruct {
  day: number;
  month: number;
  year: number;
}

class Person {
  name: string;
  city: string;
  born: DateStruct;
}

// Usage

const p1: Person = {
  name: 'Marcus',
  city: 'Roma',
  born: {
    day: 26,
    month: 4,
    year: 121,
  },
};

const date = `${p1.born.year}-${p1.born.month}-${p1.born.day}`;
console.log(`Name: ${p1.name}\nCity: ${p1.city}\nBorn: ${date}\n`);
```

> JavaScript: Classes

```js
'use strict';

class DateStruct {
  constructor(year, month, day) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

class Person {
  constructor(name, city, born) {
    this.name = name;
    this.city = city;
    this.born = born;
  }
}

// Usage

const p1 = new Person('Marcus', 'Roma', new DateStruct(121, 4, 26));

const date = `${p1.born.year}-${p1.born.month}-${p1.born.day}`;
console.log(`Name: ${p1.name}\nCity: ${p1.city}\nBorn: ${date}\n`);
```

> JavaScrip: Objects

```js
'use strict';

const p1 = {
  name: 'Marcus',
  city: 'Roma',
  born: {
    day: 26,
    month: 4,
    year: 121,
  },
};

const date = `${p1.born.year}-${p1.born.month}-${p1.born.day}`;
console.log(`Name: ${p1.name}\nCity: ${p1.city}\nBorn: ${date}\n`);
```

> JavaScrit: strucute serialization

```js
'use strict';

const v8 = require('v8');
const fs = require('fs');

class DateStruct {
  constructor(year, month, day) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

class Person {
  constructor(name, city, born) {
    this.name = name;
    this.city = city;
    this.born = born;
  }
}

// Usage

const p1 = new Person('Marcus', 'Roma', new DateStruct(121, 4, 26));

const v8Data = v8.serialize(p1);
const v8File = './file.dat';
fs.writeFile(v8File, v8Data, () => {
  console.log('Saved ' + v8File);
});
```

> File: file.dat

```
| 00000000 | FF 0D 6F 22 | 04 6E 61 6D | 65 22 06 4D | 61 72 63 75 |
| 00000010 | 73 22 04 63 | 69 74 79 22 | 04 52 6F 6D | 61 22 04 62 |
| 00000020 | 6F 72 6E 6F | 22 03 64 61 | 79 49 34 22 | 05 6D 6F 6E |
| 00000030 | 74 68 49 08 | 22 04 79 65 | 61 72 49 F2 | 01 7B 03 7B |
| 00000040 | 03          |             |             |             |
```

> Nested structures

```c
#include <stdio.h>
#include <map>
#include <string>
#include <vector>

struct Product {
  std::string name;
  int price;
};

void printProduct(Product item) {
  printf("%s: %d\n", item.name.c_str(), item.price);
}

void printProducts(std::vector<Product> items) {
  for (int i = 0; i < items.size(); i++) {
    printProduct(items[i]);
  }
}

int main() {
  std::map<std::string, std::vector<Product>> purchase {
    { "Electronics", {
      { "Laptop", 1500 },
      { "Keyboard", 100 },
      { "HDMI cable", 10 },
    } },
    { "Textile", {
      { "Bag", 50 },
    } },
  };

  std::vector electronics = purchase["Electronics"];
  printf("Electronics:\n");
  printProducts(electronics);

  std::vector textile = purchase["Textile"];
  printf("\nTextile:\n");
  printProducts(textile);

  Product bag = textile[0];
  printf("\nSingle element:\n");
  printProduct(bag);

  int price = purchase["Electronics"][2].price;
  printf("\nHDMI cable price is %d\n", price);
}
```

> Python

```py
purchase = {
  'Electronics': [
    { 'name': 'Laptop', 'price': 1500 },
    { 'name': 'Keyboard', 'price': 100 },
    { 'name': 'HDMI cable', 'price': 10 },
  ],
  'Textile': [
    { 'name': 'Bag', 'price': 50 },
  ],
}

electronics = purchase['Electronics']
print({ 'electronics': electronics })

textile = purchase['Textile']
print({ 'textile': textile })

bag = textile[0]
print({ 'bag': bag })

price = purchase['Electronics'][2]['price']
print({ 'price': price })
```

> JavaScript

```js
const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
    { name: 'HDMI cable', price: 10 },
  ],
  Textile: [{ name: 'Bag', price: 50 }],
};

const electronics = purchase.Electronics;
console.log(electronics);

const textile = purchase['Textile'];
console.log(textile);

const bag = textile[0];
console.log(bag);

const price = purchase['Electronics'][2].price;
console.log(price);

const json = JSON.stringify(purchase);
console.log(json);
const obj = JSON.parse(json);
console.log(obj);
```
