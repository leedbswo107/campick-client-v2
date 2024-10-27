# ⛺️ CAMPICK.V2

[Origin Repo] <https://github.com/team4-campick/campick-client>  
[Origin Deploy Link] <https://campickk.netlify.app>  
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
|카카오 api 활용 소셜로그인|
|---|
|<img src='https://github.com/user-attachments/assets/cacba2d5-fb0c-4f8a-9dae-dabcfd6a98f7' width=700px>|

<br/>

auth2.0 활용 카카오 APi 적용

<br/>

<table>
  <tr>
    <th colspan="3">반응형</th>
  </tr>
  <tr>
    <td><img src='https://github.com/user-attachments/assets/4623b7b6-dae6-4991-8478-4fb0972679e2' height=450px></td>
    <td><img src='https://github.com/user-attachments/assets/bcb09c5a-003b-4b5b-b244-e5f1d2227a92' height=450px></td>
    <td><img src='https://github.com/user-attachments/assets/ff071052-970a-41b2-a0ca-c97e6eb3ca24' height=450px></td>
  </tr>
</table>

<br/>

<details>
  <summary>카카오 로그인 ERD</summary>
  <img src='https://github.com/user-attachments/assets/a55f03ac-2630-4ad7-8f7a-7c8fb997e322'>  
</details>

<br/>

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
