## 1.1. Approach to learning programming

Many people think that the essential skill of a programmer is to write code. In fact, programmers are more likely to read code and fix it. And the main criteria for the quality and code are understandability, readability, and simplicity. As Harold Abelson said: "Programs must be written for the people who will read them, and the machines that will execute these programs are secondary."

> The essential skills of a programmer are reading and fixing code.

Each topic contains examples of good code and bad code. These examples are collected from programming practice and project reviews. Tailor-made examples of bad code will work, but they are full of anti-patterns and problems that need to be identified and fixed. Even the very first practical work in the course will be related to correcting the code and increasing its readability. If you give traditional tasks (write a function by signature, algorithm, class), then the beginner does not implement it in the best way but will protect his code because this is the first thing he wrote. And if the task is to "take an example of someone else's bad code, find problems and fix" not rewrite from scratch but improve in several steps, fixing and realizing these steps, then a critical approach is turned on.

> Fixing bad code is one of the most effective ways to learn.

The beginner receives code review examples and, by analogy, aims to correct his task. Such iterations are repeated many times without losing the critical approach. Perfect if there is a mentor who observes the improvements and can correct and suggest. By no means should the mentor do the work for the beginner, but rather direct him on how to think about programming and where to search for a solution.

> A mentor is an indispensable assistant in the development of professional growth.

The next step is to write code on your own. We highly recommend that the beginners share these solutions for cross-review. Of course, before that, you need to use linters and code formatters that will analyze the syntax, find errors in it and identify problem areas for a large number of code templates. It is highly important to ensure that a colleague understands your thought and does not waste time on syntax and formatting.

> Use friendly code review, cross reviews, linters, and formatters.

We move on to exercises on decoupling between several abstractions, then between modules, i.e. it should be done in such a way that you need to know as little as possible about the data structures of one part of the program from another part of it. The reduction of language fanaticism is achieved by learning in parallel several programming languages from the beginning and translations from one language to another. It is very easy to translate from `JavaScript` to `Python`. With `C` it is a bit more harder, but these three languages, whatever they are, cannot be left out of the course.

> From the first steps, do not allow any fanaticism: language, framework, paradigm.

Decrease in framework fanaticism — prohibition for beginners to use libraries and frameworks and focus on the most native code without dependencies. While decreasing paradigm fanaticism, try to combine procedural, functional, OOP, reactive and automatic programming. We will try to show how these combinations allow us to simplify patterns and principles from GoF and SOLID.

The next important part of the course is the study of antipatterns and refactoring. Firstly, we will give an overview, and then we will practice using real code examples from live projects.
