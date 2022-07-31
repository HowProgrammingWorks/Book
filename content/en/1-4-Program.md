## 1.4. Algorithm, program, syntax, language

There are many terms associated with programming. To be sure, we should clarify the difference between them. It is better to focus on the informal understanding than the formal definition. The oldest concept here is the algorithm, which we remember from the school mathematics course. For example, Euclid's algorithm for finding the greatest common divisor of two integers.

> Algorithm

An algorithm is not yet a program, it is an idea of ​​solving problems, described formally. So that it is understood by others, it is checked and implemented. The algorithm cannot be run, it can be converted into code in some programming language. The algorithm contains a description of operations and can be written in different ways: a formula, a block diagram, a list of actions, human language. It is always limited to a specific class of tasks, which it solves in a finite time. We can often simplify and optimize the algorithm by narrowing down the class of problems. For example, by switching from summing integers and fractions to summing only integers, we can make a more efficient implementation. It is also possible to expand the class of problems for this example by allowing input of string representations of numbers as well. This will make the algorithm more versatile, but less efficient. We have to choose what we optimize for. In this case, it is better to divide the algorithm into two, one will convert all numbers to the required data type, and the other will sum a total.

> An example of the implementation of the GCD algorithm

In JavaScript, Euclid's algorithm for finding the common denominator (common measure or greatest common divisor) can be written as follows:
