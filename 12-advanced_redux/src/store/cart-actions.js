import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCardData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        "https://react-http-6b4a6.firebaseio.com/cart.json"
      );

      if (!res.ok) {
        throw new Error("Could not fetch card data");
      }
      const data = await res.json();
      return data;
    };
    try {
      const cardData = await fetchData();
      dispatch(cartActions.replaceCart(cardData));
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Could not fetch card data!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-6b4a6.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
