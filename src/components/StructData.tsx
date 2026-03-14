interface StructDataProps {
  image: string,
  title: string,
  price: number,
  category: string,
  description: string,
}

export function StructData({ image, title, price, category, description }: StructDataProps) {

  return (
    <>
      <div>
        <img src={image} alt={description} />
        <h1>{title}</h1>
        <h2>{price}</h2>
        <h2>{category}</h2>
      </div>
    </>
  )

}
