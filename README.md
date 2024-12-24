# Uncommon TypeScript Error: Handling Null Values

This repository demonstrates an uncommon error in TypeScript related to null value handling. While the provided function works correctly, it can be improved for clarity, robustness, and maintainability using optional chaining and nullish coalescing.

## Bug Description

The function `greet` handles null values gracefully by returning a default message.  However, this approach might not be ideal in all situations.  It doesn't explicitly handle other falsy values (like empty strings) which could lead to unexpected behavior. It also lacks clarity regarding its default behavior when given a `null` input.

## Bug Solution

The solution incorporates optional chaining (?.) and the nullish coalescing operator (??) to improve the code's readability and robustness. This makes it more concise and explicitly handles cases where the input `name` might be null or undefined.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory.
3. Compile and run the TypeScript files using a TypeScript compiler (tsc) and Node.js (node):
   ```bash
   tsc bug.ts && node bug.js
   tsc bugSolution.ts && node bugSolution.js
   ```

