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
    </>
  )
}
