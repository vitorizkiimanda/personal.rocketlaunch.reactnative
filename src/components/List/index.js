import React from 'react';
import {FlatList} from 'react-native';
import Item from 'components/List/Item';
import Empty from 'components/List/Empty';

const List = props => {
  const {data, loadMore} = props;

  if (!data && !data?.launches?.length) {
    return <Empty />;
  }

  // UI logic
  const onEndReached = () => {
    if (loadMore) {
      loadMore();
    }
  };

  // renderUI
  const renderItem = ({item, index}) => <Item data={item} index={index} />;

  return (
    <FlatList
      data={data.launches}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
    />
  );
};

List.defaultProps = {
  data: null,
  loadMore: null,
};

export default List;
