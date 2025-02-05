import { FaCheck } from "react-icons/fa";

export default function Article({ product, onBack, onCheck }) {
   
  if (!product) return <p>상품을 찾을 수 없습니다.</p>;

  const handleCheck = () => {
        onCheck(product.id, true);
        alert("상품 판매 완료 되었습니다.");
    };

  return (
    <article>
      <h2>{product.title}</h2>
      {product.image && <img src={product.image} alt={product.title}/>}
      <p><strong>판매 여부 : {product.checked ? <FaCheck/> : " " }</strong></p>
      <button onClick={handleCheck}>판매확인</button>
      <p><strong>가격:</strong> {product.price}</p>
      <p><strong>설명:</strong> {product.description}</p>
      <button onClick={onBack}>뒤로 가기</button>
    </article>
  );
}