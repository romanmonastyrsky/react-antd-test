import React from 'react';
import { Button, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addNew } from '../../store/data/dataSlice';
import { INPUT_TYPE } from '../../constants/constants';


const DrawerContant = ({ index }) => {
  const currentIndex = useSelector((state) => state.data.currentIndex);

  const dispatch = useDispatch();
  return (
    <div>
      <Row>
        <Button block onClick={() => dispatch(addNew({ index: currentIndex, type: INPUT_TYPE.text }))}>
          Text
        </Button>
      </Row>
      <Row>
        <Button block onClick={() => dispatch(addNew({ index: currentIndex, type: INPUT_TYPE.textArea }))}>
          TextArea
        </Button>
      </Row>
      <Row>
        <Button block onClick={() => dispatch(addNew({ index: currentIndex, type: INPUT_TYPE.image }))}>
          Image
        </Button>
      </Row>
    </div>
  );
};

export default DrawerContant;
