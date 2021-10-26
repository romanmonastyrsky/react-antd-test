import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addNew } from '../../store/data/dataSlice';
import { INPUT_TYPE } from '../../constants/constants';


const DrawerContant = ({ index }) => {
  const currentIndex = useSelector((state) => state.data.currentIndex);

  const dispatch = useDispatch();
  return (
    <div>
      <Button block onClick={() => dispatch(addNew({ index: currentIndex, type: INPUT_TYPE.text }))}>
        Text
      </Button>
      <Button block onClick={() => dispatch(addNew({ index: currentIndex, type: INPUT_TYPE.textArea }))}>
        TextArea
      </Button>
      <Button block onClick={() => dispatch(addNew({ index: currentIndex, type: INPUT_TYPE.image }))}>
        Image
      </Button>
    </div>
  );
};

export default DrawerContant;
