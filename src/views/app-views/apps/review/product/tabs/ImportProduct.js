import React, { useState } from "react";
import { Upload, message, Row, Col, Card, Steps, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { CheckOutlined } from "@ant-design/icons"
import Tables from "./ImportTable";

const ImportProduct = () => {

    const { Step } = Steps;
    const { Dragger } = Upload;
    const [current, setCurrent] = useState(0);

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: 'Upload CSV',
            content: <>
                <h2 className="mt-4">Create a CSV file</h2>
                <div className="d-flex justify-content-between">
                    <p className="pr-5">Your file should contain separate columns for each data point below (in the same order).
                        If you don’t have corresponding data, please leave the space blank.</p>
                    <Link to="/#" className="ml-5">Need help?</Link>
                </div>

                <Row>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Card style={{ height: "100%" }} className="mr-2">
                            <div className="text-center">
                                <a href="#/" download>Download example file</a>
                            </div>
                            <div className='d-flex justify-content-between my-3 my-3'>
                                <span>Product SKU <span className="text-danger">required</span></span>
                                <span>ABC-1234</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>Product SKU <span className="text-danger">required</span></span>
                                <span>ABC-1234</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>Product URL</span>
                                <span>https://example.com/product/red-shoes</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>Product image URL</span>
                                <span>https://example.com/product-images/red-shoes01.jpg</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>Price</span>
                                <span>599</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>Currency</span>
                                <span>USD</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>GTIN</span>
                                <span>012345678</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>Brand</span>
                                <span>Nike</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>MPN</span>
                                <span></span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>Google Merchant Center product ID</span>
                                <span>1234567890</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>Google product category ID</span>
                                <span>1234</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>Variant group ID</span>
                                <span>(Anything)</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>Variant size</span>
                                <span>(Anything)</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>Variant color</span>
                                <span>(Anything)</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>Variant material</span>
                                <span>(Anything)</span>
                            </div><div className='d-flex justify-content-between my-3'>
                                <span>Variant pattern</span>
                                <span>(Anything)</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>Variant age group</span>
                                <span>newborn|infant|toddler|kids|adult</span>
                            </div>
                            <div className='d-flex justify-content-between my-3'>
                                <span>Variant gender/sex</span>
                                <span>male|female|unisex</span>
                            </div>
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <Card style={{ height: "100%" }} className="ml-2 d-flex">
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <DownloadOutlined />
                                </p>
                                <p className="ant-upload-text">Drag and drop your file here
                                    Or upload a file from your computer</p>
                                <p className="ant-upload-hint">
                                    Max 2000 lines per file
                                </p>
                            </Dragger>
                        </Card>
                    </Col>
                </Row>
            </>,
        },
        {
            title: 'Confirm data',
            content: <>
                <Tables />
            </>,
        },
        {
            title: 'Done',
            content: <>
                <Card>
                    <div className="text-center align-items-center">
                        <div><CheckOutlined className="text-success upgrade-contact" /></div>
                        <h2>We’ve successfully updated your product details</h2>
                        <p>You’ve added or updated 7 products</p>
                        <Link to='/app/apps/review/product'><Button type="primary">Go to product catalog</Button></Link>
                    </div>
                </Card>
            </>,
        },
    ];


    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action float-right mt-4">
            {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                
            </div>

        </>
    )
};

export default ImportProduct;