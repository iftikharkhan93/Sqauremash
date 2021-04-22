import React, { useEffect, useState, useContext } from "react";
import Loader from "react-loader-spinner";
import Products from "./products";
import firebase from "../../utils/firebase";
import { useParams } from "react-router-dom";
import "./ProductList.css";
import ProductContext, {
  RatingContext,
  SizeContext,
  ColorContext,
  SearchContext,
} from "../ContextAPI/Context";

const ProductList = () => {
  const { search } = useParams();

  const handleSearch = (value, list) => {
    let filteredProducts = list?.filter(
      (data) => data.heading.toLowerCase().indexOf(value?.toLowerCase()) !== -1
    );
    setFileteredProducts(filteredProducts);
  };

  // ALl states here
  const [productList1, setProductList] = useState([]);
  const [filteredProducts, setFileteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    productPerPage: 6,
  });
  // All context here
  const contextData = useContext(ProductContext);
  const ratingData = useContext(RatingContext);
  const sizeData = useContext(SizeContext);
  const colorData = useContext(ColorContext);
  const searchData = useContext(SearchContext);

  // Products Fetching From Firebase
  useEffect(() => {
    // addProducts();
    const products = firebase.database().ref("ecom");
    products.on("value", (data) => {
      const incommingData = data.val();
      const productList = [];
      for (let id in incommingData) {
        productList.push(incommingData[id]);
      }
      setProductList(productList[0]);
      setFileteredProducts(productList[0]);

      search && handleSearch(search, productList[0]);
      setLoading(false);
    });
  }, []);

  // Sorted Products
  useEffect(() => {
    if (filteredProducts.length > 0) {
      let updatedList = sortingProduct(
        contextData.sortedValue,
        filteredProducts
      );

      setFileteredProducts(updatedList);
    } else if (filteredProducts.length === 0) {
      if (productList1.length > 0) {
        let updatedList = sortingProduct(contextData.sortedValue, productList1);
        setProductList(updatedList);
      }
    }
  }, [contextData.sortedValue]);

  // handle Rating products
  useEffect(() => {
    if (ratingData.ratingValue) {
      let filtered = productList1?.filter(
        (data) => data.rating === ratingData.ratingValue
      );
      setFileteredProducts(filtered);
    }
  }, [ratingData.ratingValue]);

  // handle size filter
  useEffect(() => {
    if (sizeData.sizeValue) {
      let filteredProducts = productList1?.filter(
        (data) => data.size === sizeData.sizeValue
      );
      setFileteredProducts(filteredProducts);
    }
  }, [sizeData.sizeValue]);

  // Color Filter handle here
  useEffect(() => {
    if (colorData.colorValue) {
      let filteredProducts = productList1?.filter(
        (data) => data.color === colorData.colorValue
      );
      setFileteredProducts(filteredProducts);
    }
  }, [colorData.colorValue]);

  // handle Search

  useEffect(() => {
    handleSearch(searchData.searchValue, productList1);
  }, [searchData.searchValue]);

  // pagination work
  const handlePage = (e) => {
    setPagination({ ...pagination, currentPage: Number(e.target.id) });
  };
  const { currentPage, productPerPage } = pagination;
  const lastProduct = currentPage * productPerPage;
  const firstProduct = lastProduct - productPerPage;
  const currentProducts = filteredProducts?.slice(firstProduct, lastProduct);
  const pageNumber = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredProducts?.length / productPerPage);
    i++
  ) {
    pageNumber.push(i);
  }

  // Reset Function
  const handleReset = () => {
    const productList = JSON.parse(JSON.stringify(productList1));
    contextData.setSortedValue(1);
    ratingData.setRatingValue("");
    sizeData.setSizeValue("");
    colorData.setColorValue("");
    setFileteredProducts(productList);
  };
  // Sorting value
  const sortingProduct = (sortedValue, productList) => {
    let productList1 = JSON.parse(JSON.stringify(productList));
    if (sortedValue === "1") {
      let list = productList1;
      list?.sort((a, b) => (a.id > b.id ? 1 : -1));
    } else if (sortedValue === "2") {
      let list = productList1;
      list?.sort((a, b) => (a.discountPrice < b.discountPrice ? 1 : -1));
    } else if (sortedValue === "3") {
      let list = productList1;
      list?.sort((a, b) => (a.discountPrice > b.discountPrice ? 1 : -1));
    } else if (sortedValue === "4") {
      let list = productList1;
      list?.sort((a, b) => (a.id < b.id ? 1 : -1));
    }
    return productList1;
  };

  return (
    <div id="product-list">
      <h1 className="subheading">Results</h1>
      <button onClick={handleReset}>Reset All Filters</button>

      {loading && (
        <Loader type="Puff" color="#ff5050" height={100} width={100} />
      )}
      <Products currentProducts={currentProducts} />
      <nav aria-label="Pagination" className="pagination">
        <ol className="pages">
          {pageNumber.map((item) => (
            <li key={item} id={item} onClick={handlePage}>
              {item}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default ProductList;

// const addProducts = () => {
//   const productList = firebase.database().ref("ecom");
//   const cardData = [
//     {
//       id: 1,
//       img: "/images/Prod-1.jpg",
//       heading: "Men's Hoodie",
//       originalPrice: "$500.00",
//       discountPrice: "$329.00",
//       slogan: "Tie-Dye Pullover Hoodie",
//       rating: "4",
//       size: "s",
//       star1: "star",
//       star2: "star",
//       star3: "star",
//       star4: "star",
//       color: "red",
//     },
//     {
//       id: 2,
//       img: "/images/Prod-2.jpg",
//       heading: "White Shoe",
//       originalPrice: "$550.00",
//       discountPrice: "$400.00",
//       slogan: "Nike Air Force 1 '07",
//       rating: "3",
//       size: "m",
//       star1: "star",
//       star2: "star",
//       star3: "star",
//       color: "white",
//     },
//     {
//       id: 3,
//       img: "/images/Prod-3.jpg",
//       heading: "Men's Shoes",
//       originalPrice: "$305.00",
//       discountPrice: "$259.00",
//       slogan: "Here is a shot of this product ...",
//       rating: "2",
//       star1: "star",
//       star2: "star",
//       size: "l",
//       color: "white",
//     },
//     {
//       id: 4,
//       img: "/images/Prod-4.jpg",
//       heading: "Women's Sportswear",
//       originalPrice: "$365.00",
//       discountPrice: "$156.00",
//       slogan: "Nike Blazer Mid '77 Vintage",
//       rating: "3",
//       star1: "star",
//       star2: "star",
//       star3: "star",
//       size: "s",
//       color: "white",
//     },
//     {
//       id: 5,
//       img: "/images/Prod-5.jpg",
//       heading: "Backpack",
//       originalPrice: "$250.00",
//       discountPrice: "$100.00",
//       slogan: "Here is a shot of this product..",
//       rating: "2",
//       star1: "star",
//       star2: "star",
//       size: "m",
//       color: "blue",
//     },
//     {
//       id: 6,
//       img: "/images/Prod-6.jpg",
//       heading: "Bag",
//       originalPrice: "$520.00",
//       discountPrice: "$350.00",
//       slogan: "Here is a shot of this product ..",
//       rating: "1",
//       star1: "star",
//       size: "l",
//       color: "blue",
//     },
//     {
//       id: 7,
//       img: "/images/Prod-7.jpg",
//       heading: "Men's Shoe",
//       originalPrice: "$320.00",
//       discountPrice: "$219.00",
//       slogan: " Nike Air Max 90",
//       rating: "2",
//       star1: "star",
//       star2: "star",
//       size: "s",
//       color: "red",
//     },
//     {
//       id: 8,
//       img: "/images/Prod-8.jpg",
//       heading: "Men's Shoe",
//       originalPrice: "$350.00",
//       discountPrice: "$210.00",
//       slogan: " Nike Air Max 90",
//       rating: "3",
//       star1: "star",
//       star2: "star",
//       star3: "star",
//       size: "m",
//       color: "white",
//     },
//     {
//       id: 9,
//       img: "/images/Prod-9.jpg",
//       heading: "Firm-Ground Football Boot",
//       originalPrice: "$600.00",
//       discountPrice: "$450.00",
//       slogan: " Nike Mercurial Vapor 14 Elite FG",
//       rating: "4",
//       star1: "star",
//       star2: "star",
//       star3: "star",
//       star4: "star",
//       size: "l",
//       color: "red",
//     },
//     {
//       id: 10,
//       img: "/images/Prod-10.jpg",
//       heading: "Crew",
//       originalPrice: "$260.00",
//       discountPrice: "$120.00",
//       slogan: "Nike Sportswear Club Fleece",
//       rating: "4",
//       star1: "star",
//       star2: "star",
//       star3: "star",
//       star4: "star",
//       size: "s",
//       color: "blue",
//     },
//     {
//       id: 11,
//       img: "/images/Prod-11.jpg",
//       heading: "Trousers",
//       originalPrice: "$450.00",
//       discountPrice: "$299.00",
//       slogan: "Nike Dri-FIT",
//       rating: "1",
//       star1: "star",
//       size: "m",
//       color: "black",
//     },
//     {
//       id: 12,
//       img: "/images/Prod-12.jpg",
//       heading: "Men's Crew",
//       originalPrice: "$300.00",
//       discountPrice: "$169.00",
//       slogan: "Nike Sportswear Club Fleece",
//       rating: "2",
//       star1: "star",
//       star2: "star",
//       size: "l",
//       color: "white",
//     },
//     {
//       id: 13,
//       img: "/images/Prod-13.jpg",
//       heading: "Trousers",
//       originalPrice: "$435.00",
//       discountPrice: "$235.00",
//       slogan: "Nike Therma",
//       rating: "3",
//       star1: "star",
//       star2: "star",
//       star3: "star",
//       size: "s",
//       color: "white",
//     },
//     {
//       id: 14,
//       img: "/images/Prod-14.jpg",
//       heading: "Men's Full-Zip Hoodie",
//       originalPrice: "$550.00",
//       discountPrice: "$230.00",
//       slogan: "Nike Sportswear Tech Fleece",
//       rating: "4",
//       star1: "star",
//       star2: "star",
//       star3: "star",
//       star4: "star",
//       size: "m",
//       color: "black",
//     },
//     {
//       id: 15,
//       img: "/images/Prod-15.jpg",
//       heading: "Men's Basketball Jacket",
//       originalPrice: "$200.00",
//       discountPrice: "$150.00",
//       slogan: "Nike Throwback",
//       rating: "2",
//       star1: "star",
//       star2: "star",
//       size: "l",
//       color: "black",
//     },
//     {
//       id: 16,
//       img: "/images/Prod-16.jpg",
//       heading: "Men's Football Jacket",
//       originalPrice: "$230.00",
//       discountPrice: "$110.00",
//       slogan: "Portugal",
//       rating: "4",
//       star1: "star",
//       star2: "star",
//       star3: "star",
//       star4: "star",
//       size: "s",
//       color: "white",
//     },
//     {
//       id: 17,
//       img: "/images/Prod-17.jpg",
//       heading: "Men's Football Shirt",
//       originalPrice: "$360.00",
//       discountPrice: "$123.00",
//       slogan: "Chelsea F.C. Stadium Air Max",
//       rating: "1",
//       star1: "star",
//       size: "m",
//       color: "white",
//     },
//     {
//       id: 18,
//       img: "/images/Prod-18.jpg",
//       heading: "Men's Striped Golf Polo",
//       originalPrice: "$200.00",
//       discountPrice: "$150.00",
//       slogan: "Nike Dri-FIT Vapor",
//       rating: "3",
//       star1: "star",
//       star2: "star",
//       star3: "star",
//       size: "l",
//       color: "blue",
//     },
//     {
//       id: 19,
//       img: "/images/Prod-19.jpg",
//       heading: "Men's Hard Court Tennis Shoes",
//       originalPrice: "$400.00",
//       discountPrice: "$234.00",
//       slogan: "NikeCourt Air Max Volley",
//       rating: "2",
//       star1: "star",
//       star2: "star",
//       size: "s",
//       color: "white",
//     },
//     {
//       id: 20,
//       img: "/images/Prod-20.jpg",
//       heading: "Running Cap",
//       originalPrice: "$456.00",
//       discountPrice: "$321.00",
//       slogan: "Nike Dri-FIT Tailwind Fast",
//       rating: "1",
//       star1: "star",
//       size: "m",
//       color: "blue",
//     },
//     {
//       id: 21,
//       img: "/images/Prod-21.jpg",
//       heading: "Training Ankle Socks (3 Pairs)",
//       originalPrice: "$506.00",
//       discountPrice: "$303.00",
//       slogan: "Nike Everyday Max Cushioned",
//       rating: "3",
//       star1: "star",
//       star2: "star",
//       star3: "star",
//       size: "l",
//       color: "white",
//     },
//     {
//       id: 22,
//       img: "/images/Prod-22.jpg",
//       heading: "Basketball Shoe",
//       originalPrice: "$250.00",
//       discountPrice: "$210.00",
//       slogan: "KD13 'Play for the Future'",
//       rating: "2",
//       star1: "star",
//       star2: "star",
//       size: "s",
//       color: "blue",
//     },
//     {
//       id: 23,
//       img: "/images/Prod-23.jpg",
//       heading: "Basketball Shoe",
//       originalPrice: "$120.00",
//       discountPrice: "$100.00",
//       slogan: "KD Trey 5 VIII",
//       rating: "4",
//       star1: "star",
//       star2: "star",
//       star3: "star",
//       star4: "star",
//       size: "m",
//       color: "white",
//     },
//     {
//       id: 24,
//       img: "/images/Prod-24.jpg",
//       heading: "Men's Football Tracksuit",
//       originalPrice: "$150.00",
//       discountPrice: "$120.00",
//       slogan: "Nike Dri-FIT Academy",
//       rating: "4",
//       star1: "star",
//       star2: "star",
//       star3: "star",
//       star4: "star",
//       size: "l",
//       color: "white",
//     },
//   ];
//   productList.push(cardData);
// };
