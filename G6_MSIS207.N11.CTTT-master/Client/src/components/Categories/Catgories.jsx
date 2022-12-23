import React from 'react'
import CategoryItems from './CategoryItems';
import { categories } from '../Assest/data';
import styled from 'styled-components'



const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map(item=>(
        <CategoryItems item={item} key={item.id}/>
      ))}
    </Container>
  );
};

export default Categories;