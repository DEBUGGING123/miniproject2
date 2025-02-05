import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

export default function Article({ product, onBack }) {
    const [inputPassword, setInputPassword] = useState("");
    const [checked, setChecked] = useState(false);
  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  const handleCheck = () => {
    if(inputPassword == product.password){
        setChecked(true);
    }else{
        alert("비밀번호를 확인해주세요.");
    }
  };

  return (
    <article>
      <h2>{product.title}</h2>
      {product.image && <img src={product.image} alt={product.title}/>}
      <p><strong>판매 여부 : {checked ? <FaCheck/> : " " }</strong></p>
      <p><input type="password" placeholder="비밀번호를 입력해주세요!" value={inputPassword} onChange={(e) => {setInputPassword(e.target.value)}}></input></p>
      <button onClick={handleCheck}>판매확인</button>
      <p><strong>가격:</strong> {product.price}</p>
      <p><strong>설명:</strong> {product.description}</p>
      <button onClick={onBack}>뒤로 가기</button>
    </article>
  );
}