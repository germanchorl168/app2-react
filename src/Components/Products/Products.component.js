import React, { useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import { ProductItem } from "./Product.component.item";
export const Products = () => {
  const value = useContext(DataContext);
  const [Products] = value.Products;
  console.log(Products);
  return (

      <div className="products">
        {Products.map((Product) => (
          <ProductItem
            key={Product.id}
            id={Product.id}
            name={Product.name}
            description={Product.description}
            img={Product.img}
            price={Product.price}
          ></ProductItem>
        ))}
      </div>
    
  );
};
