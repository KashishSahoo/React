import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,1999", "899", "278"];
  let description = [
    ["8,000 DPI","5 Programmable buttons"],
    ["Intutive Surface"," Designed For Ipad Pro"],
    ["Designed For Ipad Pro","Super Fast"],
    ["Wireless","Optical Orientation"],
  ];
  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
