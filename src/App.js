import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Create from "./components/Create";

function App() {
  const [mode, setMode] = useState("HOME");
  const [selectedId, setSelectedId] = useState(null);
  const [products, setProducts] = useState([]);
  const [nextId, setNextId] = useState(1);


  const updateProductChecked = (id, checked) => {
    setProducts(products.map(products => 
      products.id == id ? {...products, checked} : products
    ));
  };


  let content = null;



  if (mode === "HOME") {
    content = <Nav products={products} onSelect={(id) => {
      setMode("DETAIL");
      setSelectedId(id);
    }} />;
  } else if (mode === "DETAIL") {
    const product = products.find((p) => p.id === selectedId);
    content = <Article product={product} onBack={() => setMode("HOME")} onCheck={updateProductChecked}/>;
  } else if (mode === "CREATE") {
    content = <Create onAdd={(title, price, description, image, password) => {
      const newProduct = { id: nextId, title, price, description, image, password, checked: false };
      setProducts([...products, newProduct]);
      setNextId(nextId + 1);
      setMode("HOME");
    }} />;
  }

  return (
    <div>
      <Header title="당근마켓" onChangeMode={() => setMode("HOME")} />
      {content}
      {mode === "HOME" && (
        <button onClick={() => setMode("CREATE")}>+ 상품 등록</button>
      )}
    </div>
  );
}

export default App;
