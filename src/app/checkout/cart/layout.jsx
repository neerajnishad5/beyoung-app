import CheckoutHeader from "../cart/checkout-header";
export default function CartLayout({ children }) {
  return (
    <div>
      <CheckoutHeader />
        {children}
    </div>
  )
}
