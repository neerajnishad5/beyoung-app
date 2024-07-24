import { Divider } from "@nextui-org/react";
const ProductCard = () => {
  return (
    <div className="parent">
      <div className="flex flex-row md:flex-row bg-white border-2">
        <div className="w-full md:w-2/10 p-4">
          {/* First column content */}
          <img
            style={{
              borderRadius: "5px",
            }}
            src="https://www.beyoung.in/api/cache/catalog/products/cargo_joggers/matte_grey_cargo_pants_for_men_base_22_1_2024_290x387.jpg"
            alt="product"
          />
          <select className="block w-full max-w-xs p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <Divider className="my-4" />
        </div>
        <div className="w-full md:w-8/10 p-4">
          <div className="flex flex-col justify-items-start items-start">
            <p className="heading font-medium text-lg">
              Matte Grey Cargo Pants for Men
            </p>
            <p className="product-type">Oversized T-shirts</p>
            <p className="price">₹899</p>
            <p className="you-save text-xs text-green-500">You Save: ₹750.00</p>
            <Divider className="my-4" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="remove-move-to-wishlist flex flex-row justify-around items-center bg-white p-3">
        <div className="remove">
          <p className="text-[#666666]">Remove</p>
        </div>
        <div className="move-to-wishlist">
          <p className="text-[#666666]">Move To Wishlist</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
