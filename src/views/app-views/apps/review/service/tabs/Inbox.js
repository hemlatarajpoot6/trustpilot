import { Col, Row, Input, Select, DatePicker, Button, Card, Comment, Avatar, Form, List } from "antd";
import moment from 'moment';
import React from "react";

const Inbox = () => {

    const { Search } = Input;
    const { Option } = Select;
    const { TextArea } = Input;

    

    const CommentList = ({ comments }) => (
        <List
          dataSource={comments}
          header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
          itemLayout="horizontal"
          renderItem={props => <Comment {...props} />}
        />
      );
      
      const Editor = ({ onChange, onSubmit, submitting, value }) => (
        <>
          <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
              Add Comment
            </Button>
          </Form.Item>
        </>
      );

    const children = [];
    for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const onSearch = value => console.log(value);

    return (
        <React.Fragment>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Search placeholder="input search text"
                        style={{ width: '15%' }} className="mr-1" onSearch={onSearch} />
                    <Select
                        className="mr-1"
                        mode="multiple"
                        allowClear
                        style={{ width: '10%' }}
                        placeholder="Rating Star"
                        onChange={handleChange}
                    >
                        {children}
                    </Select>
                    <Select
                        className="mr-1"
                        mode="multiple"
                        allowClear
                        style={{ width: '10%' }}
                        placeholder="Reply"
                        onChange={handleChange}
                    >
                        {children}
                    </Select>
                    <DatePicker className="mr-1" renderExtraFooter={() => 'extra footer'} />
                    <Select
                        className="mr-1"
                        mode="multiple"
                        allowClear
                        style={{ width: '10%' }}
                        placeholder="Language"
                        onChange={handleChange}
                    >
                        {children}
                    </Select>
                    <Select
                        className="mr-1"
                        mode="multiple"
                        allowClear
                        style={{ width: '10%' }}
                        placeholder="Flag"
                        onChange={handleChange}
                    >
                        {children}
                    </Select>
                    <Select
                        className="mr-1"
                        mode="multiple"
                        allowClear
                        style={{ width: '10%' }}
                        placeholder="Find reviewer"
                        onChange={handleChange}
                    >
                        {children}
                    </Select>
                    <Select
                        className="mr-1"
                        mode="multiple"
                        allowClear
                        style={{ width: '10%' }}
                        placeholder="Source"
                        onChange={handleChange}
                    >
                        {children}
                    </Select>
                    <Button>Export</Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs={24} sm={24} md={24} lg={6}>
                    <div className="p-4 border-right mr-2">
                        <h4>Awaiting reply</h4>
                        <table className="table">
                           <tr>
                           <th className="px-5 py-2">1-star reviews</th>
                            <td>0</td>
                           </tr>
                           <tr>
                           <th className="px-5 py-2">2-star reviews</th>
                            <td>0</td>
                           </tr>
                           <tr>
                           <th className="px-5 py-2">3-star reviews</th>
                            <td>0</td>
                           </tr>
                           <tr>
                           <th className="px-5 py-2">4-star reviews</th>
                            <td>0</td>
                           </tr>
                           <tr>
                           <th className="px-5 py-2">5-star reviews</th>
                            <td>1</td>
                           </tr>
                        </table>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={18}>
                    <Card>
                        <h4>Great Product Deliveries</h4>
                        <p>We worked with Engineer Master Team and we got a great product from them we still doing maintenance job with them.</p>
                        <p>by<span>Style Cabbie</span></p>
                        <p>Source: <span>Organic</span></p>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default Inbox;