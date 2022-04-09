import React from 'react';
import { Breadcrumb, Col, Row, Upload, message, Card } from 'antd';
import { Link } from 'react-router-dom';
import { DownloadOutlined, InfoCircleFilled } from "@ant-design/icons"

const ServiceInvite = ({ ...props }) => {

    const { Dragger } = Upload;
    const title = props && props.history && props.history.location && props.history.location.title;

    const propss = {
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

    return (
        <React.Fragment>
            <Breadcrumb separator=">">
                <Breadcrumb.Item href="" className="h3">Invite customers</Breadcrumb.Item>
                <Breadcrumb.Item className="h3">{title}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="note-invitation d-flex">
            <InfoCircleFilled className="text-info mr-3 mt-1" />
                <h4>Note that once you start using this invitation method you’ll have 90 days to invite your past customers and  
                    <Link to="/app/apps/getreview/getreviews" className="text-info"> set up automatic invitations </Link> for your future customers. Just want to see how the email looks? 
                    <Link to="#" className="text-info">Send yourself a test invitation.</Link>
                </h4>
            </div>
            <Row>
                <Col xs={24} sm={24} md={24} lg={16}>
                    <Card className="mr-2 h-100">
                        <h3>Upload a file with customer data</h3>
                        <p>Upload a CSV file containing the data of customers you’d like to invite. The columns in the CSV file should contain: customer email, customer name and reference number (order ID, invoice ID, transaction ID, booking ID or similar).</p>
                        <p>Please select a CSV file. <Link to="#" className="text-info">Need help?</Link></p>
                        <Dragger {...propss}>
                            <p className="ant-upload-drag-icon">
                                <DownloadOutlined />
                            </p>
                            <p className="ant-upload-hint text-info">
                               <b> Select file</b>
                            </p>
                        </Dragger>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8}>
                    <Card className="ml-2 h-100">
                        <img src="http://www.w3.org/2000/svg" alt="best" /><b className="ml-2">Best practices for creating invitations</b>
                        <ol className="mt-3 mb-3 pl-3">
                            <li className="mt-3 mb-3">Invite <b>all customers or none</b></li>
                            <li className="mt-3 mb-3">Tell reviewers they’ll get a <b>user profile</b></li>
                            <li className="mt-3 mb-3">Feel free to  <b>link to our guidelines</b></li>
                            <li className="mt-3 mb-3"><b>Don’t offer incentives</b> for reviews</li>
                        </ol>
                        <Link to="#">Read more here</Link>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default ServiceInvite;