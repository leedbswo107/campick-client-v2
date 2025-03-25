import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useGetCheckout from "../../hooks/useGetCheckout";
import style from "../../css/Market/Success.module.css";

export default function Success() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { checkoutInfo } = useGetCheckout();
  console.log(checkoutInfo);

  useEffect(() => {
    // 쿼리 파라미터 값이 결제 요청할 때 보낸 데이터와 동일한지 반드시 확인하세요.
    // 클라이언트에서 결제 금액을 조작하는 행위를 방지할 수 있습니다.
    const requestData = {
      orderId: searchParams.get("orderId"),
      amount: searchParams.get("amount"),
      paymentKey: searchParams.get("paymentKey"),
    };

    async function confirm() {
      const response = await fetch("/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const json = await response.json();

      if (!response.ok) {
        // 결제 실패 비즈니스 로직을 구현하세요.
        navigate(`/fail?message=${json.message}&code=${json.code}`);
        return;
      }

      // 결제 성공 비즈니스 로직을 구현하세요.
    }
    confirm();
  }, []);

  // 함수 정의 예시
  const goToHome = () => {
    // 홈으로 이동하는 함수 로직
    console.log("홈으로 이동");
  };

  const viewOrderHistory = () => {
    // 주문 내역 페이지로 이동하는 함수 로직
    console.log("주문 내역 확인");
  };

  return (
    <div className="result wrapper">
      {/* <div className="box_section">
        <h2>결제 성공</h2>
        <p>{`주문번호: ${searchParams.get("orderId")}`}</p>
        <p>{`결제 금액: ${Number(
          searchParams.get("amount")
        ).toLocaleString()}원`}</p>
        <p>{`paymentKey: ${searchParams.get("paymentKey")}`}</p>
      </div> */}

      <section className={`mw ${style.paymentCompleteCon}`}>
        <h2 hidden>Payment Complete</h2>
        <div className={style.paymentCompleteWrap}>
          <div className={style.completeMessage}>
            <h3>
              {" "}
              {Number(searchParams.get("amount")).toLocaleString()}원 결제
              완료되었습니다!
            </h3>
            {/* <p>{userName}님, 결제가 성공적으로 완료되었습니다.</p> */}
            <p>주문 번호: {searchParams.get("orderId")}</p>
          </div>
          {/* <div className={style.productSummary}> */}
          {/* <img
              src={productImage}
              alt="상품 이미지"
              className={style.productImage}
            /> */}
          {/* <div className={style.productDetails}> */}
          {/* <span className={style.productCategory}>{category}</span>
              <p className={style.productName}>{productName}</p> */}
          {/* </div> */}
          {/* </div> */}
          <div className={style.actions}>
            <button onClick={goToHome} className={style.homeButton}>
              홈으로 이동
            </button>
            <button onClick={viewOrderHistory} className={style.historyButton}>
              주문 내역 확인
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
