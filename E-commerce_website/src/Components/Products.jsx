import styled from "styled-components";
import { popularProducts } from "../Data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ()=>{
  return (
    <Container>
      {popularProducts.map((item)=>(
        <div key={item.id}>
        <Product item={item} key={item.id}/>
        <h3>{item.name}</h3>
             <p>{item.Desc}</p>
             <p>Price: ${item.price}</p>
        </div>
      ))}
    </Container>
  )
}
export default Products;
