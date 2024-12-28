# TypeScript Type Error: 'string[]' is not assignable to type 'number[]'

This repository demonstrates a common TypeScript type error and its solution. The error occurs when a function is incorrectly typed to only accept number arrays, but it's used with string arrays or mixed arrays.

## Problem

The `combine` function is intended to combine two number arrays.  However, its type definition is too restrictive.  Attempting to use it with string arrays results in a type error, even though the function's logic would work correctly with string arrays as well.

## Solution

The solution is to make the function's type definition more flexible by using a generic type parameter. This allows the function to accept arrays of any type, while ensuring type safety.