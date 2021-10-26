import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Tooltip } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { changeDrawer } from '../../store/data/dataSlice';


const AddNewButton = ({ index }) => {
  const isEdit = useSelector((state) => state.data.isEdit);

  const dispatch = useDispatch();
  const handleDrawerClick = () => {
    dispatch(changeDrawer(index));
  };

  return (isEdit && (
      <div className="button__add-new">
        <Tooltip title="Add new">
          <Button className="icon-button" icon={<PlusSquareOutlined />} onClick={handleDrawerClick} />
        </Tooltip>
      </div>
    )
  );
};

export default AddNewButton;
