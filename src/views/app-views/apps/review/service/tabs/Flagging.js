import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import flagging from "../../../../../../assets/img/abce54b400231888a503.svg"

const Flagging = () =>{

    return(
        <React.Fragment>
            <Card>
               <div className="flagging-content text-center m-5 p-5">
               <img src={flagging} alt='flagging' />
               <h3 className="mx-5 my-3">Here’s where all of your reports will be visible alongside the statistics on your flagging behaviour.</h3>
               <h5 className="mx-5 mt-3 mb-5">the statistics on your flagging behaviour.
You don’t have any reports yet. Learn more about when and how to flag <Link to="/https://support.trustpilot.com/hc/en-us/articles/202194328">here</Link>.</h5>
               </div>
            </Card>
        </React.Fragment>
    )
};

export default Flagging;