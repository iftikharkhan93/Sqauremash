import React, { useState } from "react";
import ProductContext, {
  CartContext,
  RatingContext,
  SizeContext,
  SearchContext,
  ColorContext,
} from "./Context";

const MyProvider = (props) => {
  const [sortedValue, setSortedValue] = useState(1);
  const [cartValue, setCartValue] = useState(0);
  const [ratingValue, setRatingValue] = useState(0);
  const [sizeValue, setSizeValue] = useState();
  const [colorValue, setColorValue] = useState();
  const [searchValue, setSearchValue] = useState();

  return (
    <>
      <ProductContext.Provider value={{ sortedValue, setSortedValue }}>
        <CartContext.Provider value={{ cartValue, setCartValue }}>
          <RatingContext.Provider value={{ ratingValue, setRatingValue }}>
            <SizeContext.Provider value={{ sizeValue, setSizeValue }}>
              <ColorContext.Provider value={{ colorValue, setColorValue }}>
                <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                  {props.children}
                </SearchContext.Provider>
              </ColorContext.Provider>
            </SizeContext.Provider>
          </RatingContext.Provider>
        </CartContext.Provider>
      </ProductContext.Provider>
    </>
  );
};

export default MyProvider;
