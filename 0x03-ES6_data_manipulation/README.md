

# ES6 Data Manipulation

## Description

This project focuses on utilizing ES6 features for data manipulation in JavaScript. It covers topics such as using map, filter, and reduce on arrays, working with typed arrays, and understanding the Set, Map, and WeakMap data structures.

## Learning Objectives

By completing this project, you will be able to:

- Understand how to use map, filter, and reduce on arrays
- Work with typed arrays for efficient data manipulation
- Familiarize yourself with the Set, Map, and WeakMap data structures

## Requirements

- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command `npm run test`
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
- All of your functions must be exported

## Setup

1. Install NodeJS 12.11.x:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

2. Check the installed versions:

```bash
nodejs -v
npm -v
```

3. Install Jest, Babel, and ESLint:

```bash
npm install
```

## Project Structure

The project contains the following tasks:

1. **Basic list of objects**: Create an array of objects with specific attributes.
2. **More mapping**: Return an array of ids from a list of objects.
3. **Filter**: Return an array of objects located in a specific city.
4. **Reduce**: Return the sum of all student ids.
5. **Combine**: Return an array of students for a specific city with their new grade.
6. **Typed Arrays**: Create a new ArrayBuffer with a value at a specific position.
7. **Set Data Structure**: Return a Set from an array.
8. **More Set Data Structure**: Return a boolean if all elements in an array exist within a Set.
9. **Clean Set**: Return a string of all set values that start with a specific string.
10. **Map Data Structure**: Return a map of groceries with specific items and quantities.
11. **More Map Data Structure**: Update a map for all items with an initial quantity of 1.
12. **Weak Link Data Structure**: Track the number of times a function is called for each endpoint.

## Usage

Each task is implemented in a separate JavaScript file and can be run individually. To execute the tests for a specific task, use the command `npm run dev [filename]`.

## Author
