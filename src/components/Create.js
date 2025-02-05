import React from "react";

export default function Create({ onAdd }) {
  return (
    <article>
      <h2>상품 등록</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const image = event.target.image.files[0];
        const password = event.target.password.value;
        
        if (!title || !price || !description || !image || !password) return alert("아직 작성하지 않은 항목이 있어요!");
        const render = new FileReader();
        render.onload = () => {
            onAdd(title, price, description, render.result, password);
        };
        render.readAsDataURL(image);
        event.target.reset();

      }}>
        <p><input type="text" name="title" placeholder="상품명" /></p>
        <p><input type="text" name="price" placeholder="가격" /></p>
        <p><textarea name="description" placeholder="설명"></textarea></p>
        <p><input type="file" name="image" accept="image/*"></input></p>
        <p><input type="password" name="password" placeholder="판매 등록을 위한 비밀번호(4자리)를 입력해주세요." maxLength="4"></input></p>
        <p><input type="submit" value="등록하기" /></p>
      </form>
    </article>
  );
}
