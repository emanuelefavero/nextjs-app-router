import InputTypeText from '@/components/InputTypeText'

export default function template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InputTypeText />
      {children}
    </>
  )
}

// TIP: Templates are similar to layouts but they reset state between pages. Type something in the input and navigate in the nested route to see template in action.
// TIP: Change the template file name and function name to layout to see the state retained between pages (this is the default behavior of layouts and usually what you want)
