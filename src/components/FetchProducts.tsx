import { StructData } from "./StructData"
import { CategoryFilter } from "./CategoryFilter"
import { useState, useEffect } from "react"
import { fetchProducts } from "../helpers/getFakeStoryApi"

export const FetchProducts = () => {

  const [products, setProducts] = useState<any[]>([])
  const [category, setCategory] = useState("all")

  useEffect(() => {
    fetchProducts().then((data) => {
      console.log(data);

      setProducts(data)
    })
  }, [])

  const filteredProducts =
    category === "all" ? products : products.filter((product) => product.category === category)

  console.log(filteredProducts);


  const categories = [...new Set(products.map((p) => p.category))]

  return (
    <>
      <h1>Products</h1>

      <CategoryFilter
        categories={categories}
        setCategory={setCategory}
      />

      <div className="products-container">

        {filteredProducts.map((product) => (
          <StructData
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            category={product.category}
            description={product.description}
          />
        ))}

      </div>
    </>
  )
}
