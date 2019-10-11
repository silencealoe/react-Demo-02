import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (    <List
      className="demo-loadmore-list"
      
      itemLayout="horizontal"
      dataSource={this.props.list}
      renderItem={item => (
        <List.Item
          actions={[<a key="list-loadmore-edit"><Button type="primary">delete</Button></a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              // avatar={
              //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              // }
              // title={<a href="https://ant.design">{item.name.last}</a>}
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