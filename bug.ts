function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!

//Uncommon error: The function works correctly and it handles the null value gracefully, but it can be improved by using optional chaining and nullish coalescing.
//This is because the code might need to handle other falsy values in the future and it might lead to unexpected behavior in those scenarios. 
//Also, it's not always obvious that the function returns a default value when the input is null.

