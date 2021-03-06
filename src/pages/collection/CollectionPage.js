import React from 'react';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const collections = useSelector((state) => state.shop.collections);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
