import { usePDP } from "@faststore/core";

export function CustomQuantitySelector() {
  const context = usePDP();

  console.log("🚀 ~ CustomQuantitySelector context:", context);

  return (
    <section>
      {/* {context?.data?.product?.productStock} */}
      <h1>Custom Quantity Selector</h1>
      {/* <h2> {context?.data?.product}</h2> */}

      {context?.data?.product?.brand.name}
    </section>
  );
}

// Place the product stock near the quantity selector
// In the description adds the product's brand name
