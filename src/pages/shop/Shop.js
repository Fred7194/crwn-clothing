import React from 'react';
import ShopData from './shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

const Shop = () => {
  return (
    <div className='shop-page'>
      {ShopData.map((data) => (
        <CollectionPreview key={data.id} title={data.title} items={data.items}>
          {data.items}
        </CollectionPreview>
      ))}
    </div>
  );
};

export default Shop;
