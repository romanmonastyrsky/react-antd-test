import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, Tooltip, Row, Col } from 'antd';
import { UpSquareOutlined, DownSquareOutlined, CopyOutlined, CloseSquareOutlined } from '@ant-design/icons';
import AddNewButton from '../AddNewButton/AddNewButton'
import ImageUpload from './ElementType/Image';
import { deleteElement, copyElement, moveUp, moveDown, changeValue } from '../../store/data/dataSlice';
import { INPUT_TYPE } from '../../constants/constants'


const ListItem = ({ index, data }) => {
  const isEdit = useSelector((state) => state.data.isEdit);
  const dispatch = useDispatch();

  const handleMoveUp = () => {
    dispatch(moveUp({ index }));
  }
  const handleMoveDown = () => {
    dispatch(moveDown({ index }));
  }
  const handleCopyElement = () => {
    dispatch(copyElement({ index }));
  }
  const handleDelete = () => {
    dispatch(deleteElement({ index }));
  }
  const handleChange = ({ target: { value }}) => {
    if(isEdit) {
      dispatch(changeValue({ index, value }));
    }
  }
  const handleChangeImage = (value) => {
    if(isEdit) {
      dispatch(changeValue({ index, value }));
    }
  }

  const selectInput = () => {
    switch(data.type) {
      case INPUT_TYPE.text:
        return (
          <Input 
            placeholder="Text"
            value={data.value || ''}
            onChange={handleChange} 
          />
        );
      case INPUT_TYPE.textArea:
        return (
          <Input.TextArea
            showCount
            maxLength={100}
            value={data.value || ''}
            onChange={handleChange} 
          />
        );
      case INPUT_TYPE.image:
        return (
          <ImageUpload
            value={data.value}
            onChange={handleChangeImage}
            isEdit={isEdit}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="list-item">
      <Row justify="center">
        {isEdit && (
          <Col span={4} className="list-item__buttom-block">
            <Tooltip title="Move up">
              <Button icon={<UpSquareOutlined />} onClick={handleMoveUp}/>
            </Tooltip>
            <Tooltip title="Move down">
              <Button icon={<DownSquareOutlined />} onClick={handleMoveDown}/>
            </Tooltip>
            <Tooltip title="Copy">
              <Button icon={<CopyOutlined />} onClick={handleCopyElement}/>
            </Tooltip>
          </Col>
        )}
        <Col span={16}>
          {selectInput()}
        </Col>
        {isEdit && (
          <Col span={4}>
            <Tooltip title="Delete">
              <Button icon={<CloseSquareOutlined />} onClick={handleDelete}/>
            </Tooltip>
          </Col>
        )}
      </Row>
      <Row justify="center">
        <AddNewButton index={index} />
      </Row>

    </div>
  )
}

export default ListItem;
