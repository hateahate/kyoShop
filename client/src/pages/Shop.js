import React, { useState, useEffect } from 'react'
import ProductCard from '../components/VitaforestUI/Product/ProductCard/ProductCard'
function Shop() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch('http://5.144.96.71:66/api/product')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.rows)
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true)
          setError(error)
        },
      )
  }, [])
  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Загрузка</div>
  } else {
    return (
      <section>
        <div>
          {items.map((item) => (
            <ProductCard
              variant="registered "
              img={item.img}
              title={item.name}
              sku={item.sku}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default Shop
