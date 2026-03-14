type Props = {
  categories: string[]
  setCategory: (category: string) => void
}

export const CategoryFilter = ({ categories, setCategory }: Props) => {
  return (
    <div className="filter-container">

      <button onClick={() => setCategory("all")}>
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setCategory(category)}
        >
          {category}
        </button>
      ))}

    </div>
  )
}
