type Props = {
  params: {
    id: string
  }
}

export default function page({ params }: Props) {
  return <h1>Blog {params.id}</h1>
}
