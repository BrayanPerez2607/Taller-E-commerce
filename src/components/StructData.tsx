interface StructDataProps {
  image: string,
  title: string,
  price: number,
  category: string,
  description: string,
}

export function StructData({ image, title, price, category, description }: StructDataProps) {

  return (
    <div className="product-card">

      <img src={image} className="product-image" />

      <div className="product-info">

        <div className="product-title">{title}</div>

        <div className="product-category">{category}</div>

        <div className="product-description">{description}</div>

        <div className="product-price">${price}</div>

        <button className="buy-button">Buy</button>

      </div>
    </div>
  )


}
