import { Table, Form, Space, Button, Select, Row, Col, Modal, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React from "react";
import rating from "../../../../../../assets/img/stars-0.svg";
import { Link } from 'react-router-dom';

const { Option } = Select;
const { Search } = Input;

const columns = [
    {
        title: 'Product',
        dataIndex: 'name',
    },
    {
        title: 'Reviews',
        dataIndex: 'age',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'Rating',
        dataIndex: 'address',
        filters: [
            {
                text: 'London',
                value: 'London',
            },
            {
                text: 'New York',
                value: 'New York',
            },
        ],
        onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
    {
        title: 'Category',
        key: 'action',
        sorter: true,
        render: () => (
            <Space size="middle">
                <Select className="mr-1"
                    allowClear
                    placeholder="Uncategorized"
                >
                    <Option value="Automatic">
                        Uncategorized
                    </Option>
                    <Button>Show me all categories</Button>
                </Select>
            </Space>
        ),
    },
];



const expandable = { expandedRowRender: record => <p>{record.description}</p> };
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const pagination = { position: 'bottom' };

class ProductCatalog extends React.Component {
    state = {
        bordered: false,
        loading: false,
        pagination,
        size: 'default',
        expandable,
        title: undefined,
        showHeader,
        footer,
        rowSelection: {},
        scroll: undefined,
        hasData: true,
        tableLayout: undefined,
        top: 'none',
        bottom: 'bottomRight',
        modal1Visible: false,
    };

    setModal1Visible(modal1Visible) {
        this.setState({ modal1Visible });
      }


    handleToggle = prop => enable => {
        this.setState({ [prop]: enable });
    };

    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    };

    handleTableLayoutChange = e => {
        this.setState({ tableLayout: e.target.value });
    };

    handleExpandChange = enable => {
        this.setState({ expandable: enable ? expandable : undefined });
    };

    handleEllipsisChange = enable => {
        this.setState({ ellipsis: enable });
    };

    handleTitleChange = enable => {
        this.setState({ title: enable ? title : undefined });
    };

    handleHeaderChange = enable => {
        this.setState({ showHeader: enable ? showHeader : false });
    };

    handleFooterChange = enable => {
        this.setState({ footer: enable ? footer : undefined });
    };

    handleRowSelectionChange = enable => {
        this.setState({ rowSelection: enable ? {} : undefined });
    };

    handleYScrollChange = enable => {
        this.setState({ yScroll: enable });
    };

    handleXScrollChange = e => {
        this.setState({ xScroll: e.target.value });
    };

    handleDataChange = hasData => {
        this.setState({ hasData });
    };

  onSearch = value => console.log(value);

  handleChange = (value) => {
    console.log(value);
}

    render() {
        const { xScroll, yScroll, ...state } = this.state;
        const data = [];
        for (let i = 1; i <= 5; i++) {
            data.push({
                key: i,
                name: <>
                    <h4>Summer Dress</h4>
                    <p>SUMMER-DRESS-2</p>
                </>,
                age: `0`,
                address: <>
                    <img src={rating} alt="rating" />
                </>,
                description: <>
                 <Button className='mr-2 mb-4' onClick={() => this.setModal1Visible(true)}>Edit product details</Button>
        
                    <Button className='ml-2 mb-4'><DeleteOutlined />Delete product</Button>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={12}>
                            <table className='table mb-5'>
                                <thead className='mb-3 h4'>Product details</thead>
                                <tbody>
                                    <tr>
                                        <th>Eligible for Google</th>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <th>Shopping</th>
                                        <td><Link>See Details</Link></td>
                                    </tr>
                                    <tr>
                                        <th>GTIN</th>
                                        <td>012345678903</td>
                                    </tr>
                                    <tr>
                                        <th>Brand</th>
                                        <td>--</td>
                                    </tr>
                                    <tr>
                                        <th>MPN</th>
                                        <td>--</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4>Product performance</h4>
                            <p>Star distribution of overall rating</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>0.0%</td>
                                        <div className='d-flex justify-content-between detail-rating'>
                                            <span>5 stars</span>
                                            <span>0 reviews</span>
                                        </div>
                                    </tr>
                                    <tr>
                                        <td>0.0%</td>
                                        <div className='d-flex justify-content-between detail-rating'>
                                            <span>4 stars</span>
                                            <span>0 reviews</span>
                                        </div>
                                    </tr>
                                    <tr>
                                        <td>0.0%</td>
                                        <div className='d-flex justify-content-between detail-rating'>
                                            <span>3 stars</span>
                                            <span>0 reviews</span>
                                        </div>
                                    </tr>
                                    <tr>
                                        <td>0.0%</td>
                                        <div className='d-flex justify-content-between detail-rating'>
                                            <span>2 stars</span>
                                            <span>0 reviews</span>
                                        </div>
                                    </tr>
                                    <tr>
                                        <td>0.0%</td>
                                        <div className='d-flex justify-content-between detail-rating'>
                                            <span>1 stars</span>
                                            <span>0 reviews</span>
                                        </div>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12}>
                            <table className='table'>
                                <thead className='mb-3 h4'>Product details</thead>
                                <tbody>
                                    <tr>
                                        <th>Group ID</th>
                                        <td>summerdresses</td>
                                    </tr>
                                    <tr>
                                        <th>Pattern</th>
                                        <td>plain</td>
                                    </tr>
                                    <tr>
                                        <th>Age group</th>
                                        <td>Adult</td>
                                    </tr>
                                    <tr>
                                        <th>Gender</th>
                                        <td>Female</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </>
            });
        }
        const scroll = {};
        if (yScroll) {
            scroll.y = 240;
        }
        if (xScroll) {
            scroll.x = '100vw';
        }

        const tableColumns = columns.map(item => ({ ...item, ellipsis: state.ellipsis }));
        if (xScroll === 'fixed') {
            tableColumns[0].fixed = true;
            tableColumns[tableColumns.length - 1].fixed = 'right';
        }

        return (
            <>
               
            <Modal
            okText="Save changes"
            width={900}
          title="Edit product details"
          style={{ top: 20 }}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
         <Form layout="vertical">
        <Row>
            <Col xs={24} sm={24} md={24} lg={12}>
            <Form.Item
             label="Product name"
					name="product_name"
					hasFeedback
					id='numberInput'
				>
					<Input />
				</Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
            <Form.Item
            label="Product SKU"
					name="product_sku"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
            </Col>
        </Row>
        <Form.Item
            label="Product URL"
					name="website"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
                <Form.Item
            label="Product image URL"
					name="website"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
                <p>It might take a few minutes for the image to update after you save changes</p>
                <img alt='Product images preview' className='mb-3' />
                <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
            <Form.Item
            label="GTIN"
					name="website"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
            </Col>
                </Row>
                <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
            <Form.Item
            label="MPN"
					name="website"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
                <Form.Item
            label="Brand"
					name="website"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
            <Form.Item
            label="Price"
					name="website"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
            <Form.Item
            label="Currency"
					name="website"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
            </Col>
                </Row>
                <h4>Variant details</h4>
                <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
            <Form.Item
            label="Variant group ID"
					name="website"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
            </Col>
                </Row>
                <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
            <Form.Item
            label="Size"
					name="website"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
                <Form.Item
            label="Color"
					name="website"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
                <Form.Item
            label="Material"
					name="website"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
            <Form.Item
            label="Pattern"
					name="website"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
            <Form.Item
            label="Age group"
					name="website"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
                <Form.Item
            label="Gender/Sex"
					name="website"
					hasFeedback
					id='numberInput'
                    className='col-sm-6 col-md-6'
				>
					<Input />
				</Form.Item>
            </Col>
                </Row>
         </Form>
        </Modal>
               <Row>
                   <Col xs={24} sm={24} md={24} lg={24}>
                   <div className='mb-5 d-flex justify-content-between'>
                   <div>
                   <Search placeholder="Search your products…"
                        style={{ width: '50%' }} className="mr-1 font-weight-bold" onSearch={this.onSearch} />
                        <Select className="mr-1"
                        allowClear
                        onChange={this.handleChange}
                        placeholder="Category"
                        style={{ width: '20%' }}
                    >
                         <Search placeholder="input search text"
                         className="mr-1 font-weight-bold" onSearch={this.onSearch} />
                        <Option value="un">
                        Uncategorized
                        </Option>
                        <Button>Apply</Button>
                    </Select>
                        <Select className="mr-1"
                        allowClear
                        onChange={this.handleChange}
                        placeholder="Reviews"
                        style={{ width: '20%' }}
                    >
                         <Option value="prowith">
                        Products with reviews
                        </Option>
                        <Option value="prowithout">
                        Products without reviews
                        </Option>
                        <Button>Apply</Button>
                    </Select>
                   </div>
                  <Link to="/app/apps/review/import"><Button type='primary'>Import products</Button></Link>
                   </div>
                   </Col>
               </Row>
                <Table
                    {...this.state}
                    pagination={{ position: [this.state.top, this.state.bottom] }}
                    columns={tableColumns}
                    dataSource={state.hasData ? data : null}
                    scroll={scroll}
                />
            </>
        );
    }
}

export default ProductCatalog;