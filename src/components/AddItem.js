import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    // this.handleDelete=this.handleDelete.bind(this)

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
          actions={[<a key="list-loadmore-edit"><Button type="primary" onClick={this.handleDelete.bind(this,index)}>delete</Button></a>]}
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