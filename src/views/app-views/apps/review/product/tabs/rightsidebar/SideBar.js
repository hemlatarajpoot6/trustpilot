import React from "react";
import { Button, Card, Divider } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SideBar = () =>{

    return(
        <Card className="ml-3">
                        <div>
                            <h3>This feature is part of the Product Reviews add-on module. You can unlock it by upgrading your plan.</h3>
                            <Divider />
                            <h5>The add-on module includes:</h5>
                            <ul>
                                <div className="d-flex mt-3">
                                    <CheckCircleFilled className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product">
                                           <b> Product TrustBoxes</b> to showcase reviews on your product and category pages
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckCircleFilled className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product">
                                        <b>Rich snippet stars</b> to stand out in organic search results
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckCircleFilled className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product">
                                       <b> User-generated photos in product reviews</b> you can showcase on your site and in your marketing materials
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckCircleFilled className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product">
                                       <b> Google Seller Ratings for product ads</b> to increase traffic and sales
                                        </li>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <CheckCircleFilled className="text-success mr-3 mt-1" />
                                    <div>
                                        <li className="list-box-product">
                                        <b>Import existing third-party product reviews</b> for a head start on your collection
                                        </li>
                                    </div>
                                </div>
                                <Link to="/app/apps/review/upgrade"><Button type="primary">Upgrade to access</Button></Link>
                            </ul>
                        </div>
                    </Card>
    )
};

export default SideBar;