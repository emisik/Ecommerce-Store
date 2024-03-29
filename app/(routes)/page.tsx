import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import React from "react";

export const revalidate=0;
const HomePage = async () => {
  const products = await getProducts({isFeatured: true})
  const billboard = await getBillboard("aa5c2108-05f1-4564-b000-c9f6873ebaa4")
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data= {billboard}/>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8" >
<ProductList title="Range of Featured Security Products" items={products}/>
</div>
      </div>
    </Container>
  );
};

export default HomePage;
