import { getOverriddenSection, ProductDetailsSection } from "@faststore/core";
import { CustomQuantitySelector } from "../../CustomQuantitySelector/CustomQuantitySelector";

const CustomProductDetails = getOverriddenSection({
  Section: ProductDetailsSection,
  components: {
    QuantitySelector: { Component: CustomQuantitySelector },
  },
});

export default CustomProductDetails;
