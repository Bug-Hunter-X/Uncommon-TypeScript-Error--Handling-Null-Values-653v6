function greet(name: string | null): string {
  //Improved solution using optional chaining and nullish coalescing
  return `Hello, ${name ?? 'world'}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet(undefined)); // Output: Hello, world!
//The solution handles null and undefined values gracefully and clearly.
//It is more concise and easier to understand than the original implementation.
//It also makes the code more robust and less likely to produce unexpected behavior in the future.