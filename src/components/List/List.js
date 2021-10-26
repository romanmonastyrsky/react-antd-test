import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Row, Drawer } from 'antd';
import ListItem from '../ListItem/ListItem';
import AddNewButton from '../AddNewButton/AddNewButton';
import DrawerContant from '../AddNewButton/DrawerContant';
import { changeView, changeDrawer } from '../../store/data/dataSlice';
import './list.styles.scss';



const List = () => {
  const list = useSelector((state) => state.data.list);
  const isEdit = useSelector((state) => state.data.isEdit);
  const isShowDrawer = useSelector((state) => state.data.isShowDrawer);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(changeView());
  };

  const handleDrawerClick = () => {
    dispatch(changeDrawer());
  };

  return (
    <div className="list">
      <Drawer
        title="Add new"
        width={'40%'}
        onClose={handleDrawerClick}
        visible={isShowDrawer}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <DrawerContant />
      </Drawer>
      <Row className="list__select-block">
        <Button type="primary" onClick={handleClick}>
          {isEdit ? 'Preview' : 'Edit'}
        </Button>
      </Row>
      <Row justify="center">
        <AddNewButton />
      </Row>
      {list.map((el, index) => (
        <ListItem
          key={el.id}
          index={index}
          data={el} 
        />
      ))}
    </div>

  )
}

export default List
