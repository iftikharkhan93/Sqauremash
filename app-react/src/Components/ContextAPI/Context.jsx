import { createContext } from "react";
const ProductContext = createContext();
const CartContext = createContext();
const RatingContext = createContext();
const SizeContext = createContext();
const ColorContext = createContext();
const SearchContext = createContext();

export default ProductContext;
export { CartContext, RatingContext, SizeContext, ColorContext, SearchContext };
