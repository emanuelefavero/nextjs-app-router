import './ShowUsersNameSkeleton.css'

function ShowUsersNameSkeleton() {
  const numberOfSkeletons = Array.from({ length: 10 })
  const widths = ['w-28', 'w-32', 'w-36', 'w-24', 'w-40', 'w-48']

  return (
    <>
      {numberOfSkeletons.map((_, index) => (
        <div
          key={index}
          className={`blink ${
            widths[Math.floor(Math.random() * widths.length)]
          } h-4 bg-gray-500 bg-opacity-25 rounded-md mb-2`}
        ></div>
      ))}
    </>
  )
}

export default ShowUsersNameSkeleton
