## 2.9. Tasks

`Task 1.` Let's take an example that we have already considered, but with several errors added to it. Copy this code into a separate file and fix it so that it not only works, but is beautiful and understandable. You can take the code from the book and lectures as a reference.

```js
const Items = [
  { CENA: 40 } ,{ CENA : 120 },{
  CENA: '505',
  }, { CENA: 350 }];

For (const ITEM of items){
console.log(`Price: ${item.price}`);
}
```

`Task 2.` Now let's make a function that will calculate the sum of the entire purchase. Give the function a clear name and add such rules: we need to check if the price is a number (using `typeof`), we sum only positive prices, and if we find a non-number or negative number, we throw an error using `throw`.

In the course of completing the task, search the internet for documentation on `for..of`, `throw`, `console.log`, functions and arrays. It's best to search in MDN (Mozilla Developer Network).

Make sure the code runs in the command line through node.js or in the browser.

`Task 3.` Take this data structure and supplement it with products and product groups following the example of those that already exist:

```js
const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
  ],
  Textile: [{ name: 'Bag', price: 50 }],
};
```

Put the code in a file and output the entire structure to the screen by running the code in node.js or the browser.

`Task 4.` Write a `find` function that will go through the structure from the previous task and find a product by its name (checking all product groups). Names can be repeated, but this time we are only interested in the first product whose name matches.

Example of using the `find` function:

```js
const result = find(purchase, 'Laptop');
console.log(result);
```

Should output: `{ name: 'Laptop', price: 1500 }`

`Task 5.` Now let's expand the previous task: we need to modify the `find` function so that it returns an array containing all products with the specified name. If none are found, then an empty array.
