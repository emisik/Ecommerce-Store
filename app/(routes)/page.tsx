import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import React from "react";

export const revalidate=0;
const HomePage = async () => {
  const products = await getProducts({isFeatured: true})
  const billboard = await getBillboard("1d0a57c7-703f-4f8c-9fb6-bb814b5e11cf")
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
