// * Generics
type Array<T> = T[]

const arrayOfNumbers: Array<number> = [1, 2, 3]
const arrayOfString: Array<string> = ['a', 'b', 'c']

// * Union Types
type arrayOfManyTypes = Array<number | string | boolean>

const arrayOfManyTypes: arrayOfManyTypes = [1, 'a', 2, 'b', true]

// * readonly
const readOnlyArray: readonly number[] = [10, 20, 30]
// readOnlyArray.push(40) // Error

// * Tuple
const arrayOfSpecificLengthAndTypes: [string, boolean] = ['string', true]

// Named tuples provide more context for what our index values represent.
const namedTuple: [name: string, age: number] = ['John', 35]

// * Enum
enum Colors {
  Red = '#f00',
  Green = '#0f0',
  Blue = '#00f',
}

// Numbered enum
// TIP: You can also start the numbering from a different value
enum Rank {
  First = 1,
  Second,
  Third,
}

// * Type aliases and interfaces
// Type aliases are useful for adding a custom name to a type
type MyType = string
const myType: MyType = 'Hello Type Alias'

// TIP: Type aliases can also be used for complex types and objects
/*
type MyObject = {
  name: string
  age: number
}
const myObject: MyObject = {
  name: 'John',
  age: 35,
}
*/

// Interfaces are generally used when defining objects instead of types
interface MyObject {
  name: string
  age: number
}

const myObject: MyObject = {
  name: 'John',
  age: 35,
}

// TIP: Interfaces can only be used for objects
// TIP: Interfaces can be extended

interface MyExtendedObject extends MyObject {
  email: string
}

const myExtendedObject: MyExtendedObject = {
  name: 'John',
  age: 35,
  email: 'john@email.com',
}

export default function Page() {
  return (
    <>
      <h1>TypeScript</h1>

      <p className='text-emerald-500'>
        TIP: Check this page code to see TypeScript features in action
      </p>

      <h2>Generics</h2>

      <p>
        Generics are a way to make components reusable across different types.
      </p>

      {arrayOfNumbers.map((number, index) => (
        <p key={index}>{number}</p>
      ))}

      {arrayOfString.map((string, index) => (
        <p key={index}>{string}</p>
      ))}

      <h2>Union Types</h2>

      <p>Union types allow you to have multiple types for a single variable.</p>

      {arrayOfManyTypes.map((value, index) => (
        <p key={index}>{value}</p>
      ))}

      <h2>Readonly</h2>

      <p>Readonly arrays can&apos;t be modified.</p>

      {readOnlyArray.map((number, index) => (
        <p key={index}>{number}</p>
      ))}

      <h2>Tuple</h2>

      <p>
        Tuples are fixed-length arrays that can have multiple types in them.
      </p>

      {arrayOfSpecificLengthAndTypes.map((value, index) => (
        <p key={index}>{value.toString()}</p>
      ))}

      <h4>Named Tuple</h4>
      {namedTuple.map((value, index) => (
        <p key={index}>{value.toString()}</p>
      ))}

      <h2>Enum</h2>

      <p>Enums allow you to create a set of named constants.</p>

      <p style={{ color: Colors.Red }}>{Colors.Red}</p>
      <p style={{ color: Colors.Green }}>{Colors.Green}</p>
      <p style={{ color: Colors.Blue }}>{Colors.Blue}</p>

      <p>
        Enums can also be numbered, and the following values will be incremented
      </p>

      <p>{Rank.First}</p>
      <p>{Rank.Second}</p>
      <p>{Rank.Third}</p>

      <h2>Type aliases and interfaces</h2>

      <p>Type aliases are a way to define custom types in TypeScript.</p>

      <p>{myType}</p>

      <h3>Interfaces</h3>

      <p>
        Interfaces are generally used when defining objects instead of types.
      </p>

      <p>
        {myObject.name} is {myObject.age} years old
      </p>

      <h3>Extended Interfaces</h3>

      <p>Interfaces can be extended to add more properties.</p>

      <p>
        {myExtendedObject.name} is {myExtendedObject.age} years old and his
        email is {myExtendedObject.email}
      </p>
    </>
  )
}
