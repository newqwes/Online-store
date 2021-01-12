import React from 'react';
import Card from '../Card';
import ListWrapper from './styled';
import listType from '../ProductSection/propTypes/listType';

const List = ({ data }) => {
  const mapData = data.map((item) => <Card key={item.id} item={item} />);

  return <ListWrapper>{mapData}</ListWrapper>;
};

List.propTypes = {
  data: listType.isRequired,
};

export default List;
