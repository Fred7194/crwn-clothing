import React from 'react';
import './collection-overview.styles.scss';
import CollectionPreview from '../collection-preview/CollectionPreview';
import { useSelector } from 'react-redux';

const CollectionOverView = () => {
  const collections = useSelector((state) => state.shop.collections);
  const selectCollection = Object.keys(collections).map(
    (key) => collections[key]
  );

  return (
    <div className='collection-overview'>
      {selectCollection.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
};

export default CollectionOverView;
