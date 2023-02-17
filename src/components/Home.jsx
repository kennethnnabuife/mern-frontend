import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

import { useGetAllProductsQuery } from "../features/productsApi";

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="home">
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>An error occured...</div>
      ) : (
        <>
          <div className="home-heading">NEW ARRIVALS</div>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.name} />
                <div className="product-name"> {product.name}</div>
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
