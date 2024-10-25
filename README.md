# ⛺️ CAMPICK.V2

[Deploy Link] <https://campickv2.netlify.app>

### 👫 팀원

|이윤재|신유진|
|:---:|:---:|
|카카오 api 로그인|토스 코어 api 결제|

### 👩🏻‍💻 추가한 기능 및 개인 역할
- 이윤재
  - 카카오 APi를 활용한 소셜로그인 기능 구현
- 신유진
  - 토스 코어 APi를 활용한 상품 결제 기능 구현
*****
### 결제
*****
### 🔒 카카오 로그인

<details>
  <summary>카카오 로그인 ERD</summary>
  <img src='https://github.com/user-attachments/assets/4ea4d57b-bb20-4c1b-804f-e99438000a3a'>  
</details>


*****
### 💻 v2 변경된 파일 목록

```
📦campick-server
┣ 📂controller
┃ ┣ 📜authController.js
┃ ┗ 📜checkoutController.js
┣ 📂models
┃ ┗ 📜checkoutModel.js
┣ 📂routes
┃ ┣ 📜authRoutes.js
┃ ┗ 📜checkoutRoutes.js
┣ 📂services
┃ ┣ 📜userServices.js
┃ ┗ 📜checkoutService.js
┣ 📜server.js
┗ 📜package.json
```

```
📦campick-client
┣ 📂src
┃ ┣ 📂components
┃ ┃ ┣ 📂HeaderFooter
┃ ┃ ┃ ┗ 📜Header.jsx
┃ ┃ ┗ 📂Market
┃ ┃   ┣ 📜Checkout.jsx
┃ ┃   ┣ 📜SaleDetail.jsx
┃ ┃   ┣ 📜Fail.jsx
┃ ┃   ┗ 📜Success.jsx
┃ ┣ 📂pages
┃ ┃ ┣ 📂MyPage
┃ ┃ ┃ ┗ 📜MyPage.jsx
┃ ┃ ┣ 📂Market
┃ ┃ ┃ ┣ 📜Checkout.jsx
┃ ┃ ┃ ┗ 📜SaleDetail.jsx
┃ ┃ ┣ 📜RegisterPage.jsx
┃ ┃ ┗ 📜LoginPage.jsx
┃ ┣ 📂hooks
┃ ┃ ┗ 📜useGetCheckout.js
┃ ┗ 📜App.js
┣ 📜README.md
┣ 📜package.json
┗ 📜.gitignore
```

### 💣 이슈 및 해결
