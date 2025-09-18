## 3.2. Strukturen und Records

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
    "Name: %s\nStadt: %s\nGeboren: %d-%d-%d\n",
    p1.name, p1.city,
    p1.born.year, p1.born.month, p1.born.day
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
  WriteLn('Stadt: ', P1.City);
  WriteLn(
    'Geboren: ',
    P1.Born.Year, '-',
    P1.Born.Month, '-',
    P1.Born.Day
  );
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
        "Name: {}\nStadt: {}\nGeboren: {}-{}-{}\n",
        p1.name, p1.city,
        p1.born.year, p1.born.month, p1.born.day
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
```

```ts
const personToString = (person: IPerson): string => {
  const { name, city, born } = person;
  const { year, month, day } = born;
  const fields = [
    `Name: ${name}`,
    `Stadt: ${city}`,
    `Geboren: ${year}-${month}-${day}`,
  ];
  return fields.join('\n');
};
```

```ts
const person: IPerson = {
  name: 'Marcus',
  city: 'Roma',
  born: {
    day: 26,
    month: 4,
    year: 121,
  },
};

console.log(personToString(person));
```

> TypeScript: Klassen

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
```

> JavaScript: Klassen

```js
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
```

```js
const personToString = (person) => {
  const { name, city, born } = person;
  const { year, month, day } = born;
  const fields = [
    `Name: ${name}`,
    `Stadt: ${city}`,
    `Geboren: ${year}-${month}-${day}`,
  ];
  return fields.join('\n');
};
```

```js
const date = new DateStruct(121, 4, 26);
const person = new Person('Marcus', 'Roma', date);
console.log(personToString(person));
```

> JavaScript: Objekte

```js
const person = {
  name: 'Marcus',
  city: 'Roma',
  born: {
    day: 26,
    month: 4,
    year: 121,
  },
};

console.log(personToString(person));
```

> JavaScript: Struktur-Serialisierung

```js
const v8 = require('v8');
const fs = require('fs');
```

Aus dem vorherigen Beispiel übernehmen:

- class DateStruct
- class Person

```js
const date = new DateStruct(121, 4, 26);
const person = new Person('Marcus', 'Roma', date);

const v8Data = v8.serialize(person);
const v8File = './file.dat';
fs.writeFile(v8File, v8Data, () => {
  console.log('Gespeichert ' + v8File);
});
```

> Datei: file.dat

```
FF 0D 6F 22 04 6E 61 6D 65 22 06 4D 61 72 63 75
73 22 04 63 69 74 79 22 04 52 6F 6D 61 22 04 62
6F 72 6E 6F 22 03 64 61 79 49 34 22 05 6D 6F 6E
74 68 49 08 22 04 79 65 61 72 49 F2 01 7B 03 7B
03
```

> Verschachtelte Strukturen

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
    { "Elektronik", {
      { "Laptop", 1500 },
      { "Tastatur", 100 },
      { "HDMI-Kabel", 10 },
    } },
    { "Textilien", {
      { "Tasche", 50 },
    } },
  };

  std::vector electronics = purchase["Elektronik"];
  printf("Elektronik:\n");
  printProducts(electronics);

  std::vector textile = purchase["Textilien"];
  printf("\nTextilien:\n");
  printProducts(textile);

  Product bag = textile[0];
  printf("\nEinzelelement:\n");
  printProduct(bag);

  int price = purchase["Elektronik"][2].price;
  printf("\nHDMI-Kabel Preis ist %d\n", price);
}
```

> Python

```py
purchase = {
  'Elektronik': [
    { 'name': 'Laptop', 'price': 1500 },
    { 'name': 'Tastatur', 'price': 100 },
    { 'name': 'HDMI-Kabel', 'price': 10 },
  ],
  'Textilien': [
    { 'name': 'Tasche', 'price': 50 },
  ],
}

electronics = purchase['Elektronik']
print({ 'electronics': electronics })

textile = purchase['Textilien']
print({ 'textile': textile })

bag = textile[0]
print({ 'bag': bag })

price = purchase['Elektronik'][2]['price']
print({ 'price': price })
```

> JavaScript

```js
const purchase = {
  Elektronik: [
    { name: 'Laptop', price: 1500 },
    { name: 'Tastatur', price: 100 },
    { name: 'HDMI-Kabel', price: 10 },
  ],
  Textilien: [{ name: 'Tasche', price: 50 }],
};

const electronics = purchase.Elektronik;
console.log(electronics);

const textile = purchase['Textilien'];
console.log(textile);

const bag = textile[0];
console.log(bag);

const price = purchase['Elektronik'][2].price;
console.log(price);

const json = JSON.stringify(purchase);
console.log(json);
const obj = JSON.parse(json);
console.log(obj);
```
