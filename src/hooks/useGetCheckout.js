import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../components/Error/Error";

const useGetCheckout = () => {
  const { id } = useParams();
  const [checkoutInfo, setCheckoutInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCheckout = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/api/checkout/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        const data = await response.json();

        if (!data.result) {
          return alert(data.message);
        }

        setCheckoutInfo(data.checkout);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCheckout();
  }, [id]);

  const ErrorComponent = () => <Error error={error} />;

  return { checkoutInfo, isLoading, error, ErrorComponent };
};

export default useGetCheckout;
