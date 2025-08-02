import React from "react";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { CartState } from "../types";

interface CartProps {
  cart: CartState;
  onClose: () => void;
  onUpdateQuantity: (plantId: string, quantity: number) => void;
  onRemoveItem: (plantId: string) => void;
}

const Cart: React.FC<CartProps> = ({
  cart,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  if (!cart.isOpen) return null;

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async () => {
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    // Create Razorpay order on your backend
    const result = await fetch(
      "https://api-node-razor-payment.onrender.com/api/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: cart.total }), // amount in INR
      }
    );

    const data = await result.json();
    const options = {
      key: "rzp_test_rfyqpZtPjaZ5e9", // Replace with your Razorpay key_id
      amount: cart.total * 100, // amount in paise
      currency: "INR",
      name: "Startup projects",
      description: "Order Payment",
      // image: "https://yourdomain.com/logo.png", // optional logo
      order_id: data.orderId,
      handler: function (response: any) {
        alert("Payment successful!");
        console.log(response);
      },
      prefill: {
        name: "Vignesh P",
        email: "pvignesh358@gmail.com",
        contact: "9566805138",
      },
      theme: {
        color: "#10B981",
      },
    };

    const razor = new (window as any).Razorpay(options);
    razor.open();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-100 rounded-full">
              <ShoppingBag className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Shopping Cart
              </h2>
              <p className="text-sm text-gray-500">{cart.items.length} items</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.items.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-300 mb-4">
                <ShoppingBag className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-500 mb-6">
                Add some beautiful plants to get started!
              </p>
              <button
                onClick={onClose}
                className="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.items.map((item) => (
                <div
                  key={item.plant.id}
                  className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:border-emerald-200 transition-colors duration-200"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={item.plant.image}
                      alt={item.plant.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {item.plant.name}
                    </h3>
                    <p className="text-sm text-gray-500">${item.plant.price}</p>

                    <div className="flex items-center space-x-3 mt-2">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.plant.id, item.quantity - 1)
                          }
                          className="p-1 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <Minus className="h-3 w-3 text-gray-600" />
                        </button>
                        <span className="px-3 py-1 text-sm font-medium text-gray-900 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.plant.id, item.quantity + 1)
                          }
                          className="p-1 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <Plus className="h-3 w-3 text-gray-600" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.plant.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors duration-200"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">
                      ${(item.plant.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.items.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4 flex-shrink-0">
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total:</span>
              <span className="text-emerald-600">${cart.total.toFixed(2)}</span>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
