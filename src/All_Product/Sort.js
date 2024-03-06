import React from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../context/Filter_context';

export default function Sort() {
  const {filter_products} = useFilterContext()
  return (
    <Wrapper className='sort-section'>
    {/* 1st column */}
      <div className="sorting-list--grid">
      {/* <button className={grid_view ? 'active sort-btn' : 'sort-btn'}
      onClick={setGridView}
      >
        <BsFillGridFill className='icon'/>
      </button> */}
      {/* <button className={grid_view ? 'sort-btn' : 'active sort-btn'}
      onClick={setListView}>
        <BsList className='icon'/>
      </button> */}
      </div>
          {/* 2nd column */}

      <div className="product-data">
       {/* <p>{`${filter_products.length}`} Products Available</p> */}
      </div>
        
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;
    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }
  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
    .sort-select--option {
      padding: 0.8rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;
