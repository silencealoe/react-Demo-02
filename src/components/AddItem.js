import React, { Component } from 'react';
import { List, Button, Skeleton } from 'antd';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  handleDelete(index){
    console.log(index)
    this.props.deleteItem(index)
  }
  render() { 
    return (    <List
      className="demo-loadmore-list"
      
      itemLayout="horizontal"
      dataSource={this.props.list}
      renderItem={(item,index) => (
        <List.Item
          actions={[<Button type="primary" onClick={this.handleDelete.bind(this,index)}>delete</Button>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              description={item}
            />
          </Skeleton>
        </List.Item>
      )}
    />
);
  }
}
 
export default AddItem;