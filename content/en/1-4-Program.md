## 1.4. Algorithm, program, syntax, language

What does a programmer do at work? What does a computer do? There are a lot of terms related to programming, for definiteness we should find out the difference between them. The oldest concept here is the algorithm that we all remember from the school mathematics course (Euclidean algorithm for finding the greatest common divisor of two integers).

> Algorithm is a formal description of the order of computations for a certain class of problems in a finite time.

In `JavaScript`, finding the greatest common divisor (or common measure) can be written like this:

```js
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};
```

Or even shorter, but less familiar:

```js
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
```

This simple algorithm is recursive, i.e. calls itself to calculate the next step and exits when `b` reaches `0`. For algorithms, we can define computational complexity, classify them according to the time and memory resources needed to solve the problem.

> Program — program code and data combined into one for computing and computer control.

Niklaus Wirth has a book called "Algorithms + Data Structures = Programs". Its title captures a very important truth that is deeply imprinted not only in the world view of readers, but also in the titles of courses at leading universities and even in interviews, when the subject is asked to concentrate on these two things. In the first 50 years of the software industry data structures proved to be just as important as algorithms. Moreover, many well-known programmers rely on them, for example, the famous Linus Torvalds quote is: "Bad programmers worry about the code. Good programmers worry about data structures and relationships between them". The fact is that the choice of data structures largely determines what the algorithm will be, limits it within the framework of computational complexity and the semantics of the task, which the programmer understands through data decomposed in memory, much better than through a sequence of operations.

Eric Raymond put it this way: "Smart data structures and dumb code work much better than the other way around".

> The code allows you to find a common language.

However, the same Linus Torvalds also told us, "Talk is cheap. Show me the code". This does not contradict what was said above. I think what he meant here is that the program code does not allow ambiguity. It is a universal language that allows programmers to find a common language even when natural languages, due to their ambiguity, do not allow you to accurately understand each other, you can do this simply by looking at the code.

> Engineering — extracting practical benefits from available resources using science, technology, various methods, organizational structure, techniques and knowledge.

I remember that in the early years of learning to program, it was already important to me that the code should be used by people, improve their lives, and live long itself. The Olympiad problems seemed uninteresting to me, the learning problems were too contrived, I wanted to concentrate on what people will run on their computers every day: database applications, forms and spreadsheets, network and communication applications, programs that control equipment, work with sensors, and many tools for the programmers themselves.

Just like in other engineering fields, in programming, the benefit to the person is what is really important, not the correctness or harmony of the concept. Engineering is intended to use scientific achievements, and in those places where there is not enough scientific knowledge available nowadays, engineering applies intuition, engineering culture, trial and error method, the use of unconscious experience and experience that has insufficient scientific understanding.

This is both an advantage of engineering and a disadvantage. We have a lot of different and conflicting solutions to the same problem, we do not always know why something does not work, but that's okay, we sometimes even wonder why something works. This approach leads to the accumulation of bad practices in projects, and to such an interweaving of good and bad practices, that it is very difficult to separate them, and often much efforts are spent repeatedly on already solved tasks. Niklaus Wirth said, "Software is getting slower more rapidly than hardware is getting faster." and we often find it easier to rewrite a program than to fix bugs in it.

> Software engineering is the application of engineering to the software industry. It includes architecture, research, development, testing, deployment and support of software.

The software industry has become a powerful industry, overgrown with supporting technological practices that reduce the impact of its shortcomings already mentioned above and make the final product reliable enough to make a profit, but not of high enough quality to be able to release more and more new versions of it.

"Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves" // Alan Kay

> Programming is the art and engineering of solving problems using computers.

It is important to note here that computing technology greatly influences how we program, dictates which paradigms and approaches will work more efficiently, and will give the result available to us in terms of the resources spent on programming and the computing resources required to complete the task.

> Coding — writing the source code of the program using a specific syntax (language), style and paradigm, according to the finished TOR (terms of reference).

Development can be divided into design and coding, and this gives a more efficient application of forces in the long run, but often you have to start programming without technical specifications and without preliminary design. Systems developed in this way are called prototypes, MVP (minimum viable product), pilot systems or showcases. Their usefulness lies in testing hypotheses about the usefulness for the consumer or the economic efficiency of their use.

The programmer is not always aware of what he is doing, a prototype or a product, and we get a prototype done as good as a finished product, or a finished product made as a temporary solution. However, there are enthusiasts who love their work, and whole industry relies on them, contradictory and full of problems.

"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program" // Linus Torvalds

> Software development is a combination of programming and coding at all stages of the software life cycle: design, development, testing, debugging, support, maintenance and modification.

Let's strive to ensure that our programs are simple both for the consumer and for ourselves, as people who will modify them many times and constantly encounter the solutions that we put into them during the initial development. And if we are limited in time and forced to write inefficient or obscure code, then we should plan its processing, refactoring and optimization before we forget its structure and all ideas for improvement will be forgotten too. The accumulation of problems in the code is called "technical debt", and it leads not only to the fact that the programs become less flexible and understandable, but also to the fact that our younger colleagues, connecting to projects, read and absorb not the best practices and adopt our overengineering. Simplicity in solving complex problems is the goal of a good programmer, hiding complexity behind software abstractions is the method of an experienced engineer.

"I have always wished for my computer to be as easy to use as my telephone. My wish has come true because I can no longer figure out how to use my telephone" // Bjarne Stroustrup
