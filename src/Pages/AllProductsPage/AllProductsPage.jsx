import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiShop } from "../../api/apiShop";
import Loader from "../../Components/Loader/Loader";
import CategoriesList from "../../Components/ProductsComponents/Categories/Categories";
import Filters from "../../Components/ProductsComponents/Filter/Filters";
import ProductsList from "../../Components/ProductsComponents/Products/ProductsList";
import { PageContainer, FilterColumn, ProductColumn, TitleH3 } from "./AllProductsPage.styled";

const AllProductsPage = () => {
  const [products, setProduct] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [firstTime, setFirstTime] = useState(true)
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!firstTime) return

    apiShop.getCategories().then((data) => {
      setCategories(data)
      if (category) return setSelectedCategory(category)
    }).finally(() => setIsLoading(false))
    setFirstTime(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstTime])

  useEffect(() => {
    if (selectedCategory === null) return
    apiShop.getProductsByCategory(selectedCategory).then(setProduct).finally(() => setIsLoading(false))

  }, [selectedCategory])

  const PUBLIC_URL = process.env.PUBLIC_URL;

  const chooseCategory = (categoryName) => {
    setSelectedCategory(categoryName)
    window.history.replaceState(null, "online shop all products", PUBLIC_URL + "/products/" + categoryName)
  }
  return (
    <PageContainer>
      <FilterColumn>
        <TitleH3>categories</TitleH3>
        <CategoriesList categories={categories} onClick={chooseCategory} />
        <TitleH3>filters</TitleH3>
        <Filters products={products} setProduct={setProduct} />
      </FilterColumn>

      {isLoading ? <Loader /> : <ProductColumn>
        <ProductsList products={products} />
      </ProductColumn>}


    </PageContainer>
  );
}

export default AllProductsPage;