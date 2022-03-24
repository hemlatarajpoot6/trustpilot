import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Alert, Select } from "antd";
import { signUp, showAuthMessage, showLoading, hideAuthMessage } from 'redux/actions/Auth';
import { Link, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import countries from "./CountryCode";

// const rules = {
// 	email: [
// 		{
// 			required: true,
// 			message: 'Please input your email address'
// 		},
// 		{
// 			type: 'email',
// 			message: 'Please enter a validate email!'
// 		}
// 	],
// 	password: [
// 		{
// 			required: true,
// 			message: 'Please input your password'
// 		}
// 	],
// 	confirm: [
// 		{
// 			required: true,
// 			message: 'Please confirm your password!'
// 		},
// 		({ getFieldValue }) => ({
// 			validator(rule, value) {
// 				if (!value || getFieldValue('password') === value) {
// 					return Promise.resolve();
// 				}
// 				return Promise.reject('Passwords do not match!');
// 			},
// 		})
// 	]
// }

export const RegisterForm = (props) => {

	const { Option } = Select;

	const [userRegister, setUserRegister] = useState([]);
	const [domain, setDomain] = useState("");

	const onHandleChange = (e) => {
		userRegister[e.target.name] = e.target.value;
		setUserRegister(userRegister);
		
	};
	const onHandleWebsite = (e) => {
		setDomain(e.target.value)
	}

	const { signUp, showLoading, token, loading, redirect, message, showMessage, hideAuthMessage, allowRedirect } = props
	const [form] = Form.useForm();
	let history = useHistory();

	const onSignUp = () => {
		form.validateFields().then(values => {
			showLoading()
			signUp(values)
		}).catch(info => {
			console.log('Validate Failed:', info);
		});
	}

	useEffect(() => {
		if (token !== null && allowRedirect) {
			history.push(redirect)
		}
		if (showMessage) {
			setTimeout(() => {
				hideAuthMessage();
			}, 3000);
		}
	});

	const selectBefore = (
		<Select defaultValue="India +91" className="select-before">
			{countries && countries.length > 0 && countries.map((item, index) =>
				<Option value={item.code} key={index}>{item.name}{item.code}</Option>

			)}
		</Select>
	);
	console.log("domain", domain);
	const selectAfter = (
		<>
		<p>{domain ? '@' : null}{domain}</p>
		</>);

	return (
		<>
			<motion.div
				initial={{ opacity: 0, marginBottom: 0 }}
				animate={{
					opacity: showMessage ? 1 : 0,
					marginBottom: showMessage ? 20 : 0
				}}>
				<Alert type="error" showIcon message={message}></Alert>
			</motion.div>
			<Form form={form} layout="vertical" name="register-form" onFinish={onSignUp}>
				{/* <Form.Item 
					name="email" 
					label="Email" 
					rules={rules.email}
					hasFeedback
				>
					<Input prefix={<MailOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="password" 
					label="Password" 
					rules={rules.password}
					hasFeedback
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item>
				<Form.Item 
					name="confirm" 
					label="ConfirmPassword" 
					rules={rules.confirm}
					hasFeedback
				>
					<Input.Password prefix={<LockOutlined className="text-primary" />}/>
				</Form.Item> */}
				<Form.Item
					name="website"
					hasFeedback
					onChange={(e) => onHandleWebsite(e)}
					value={domain}
					id='numberInput'
				>
					<Input placeholder='Website' />
				</Form.Item>
				<Form.Item
					name="companyname"
					hasFeedback
					onChange={(e) => onHandleChange(e)}
					value={userRegister.companyname}
				>
					<Input placeholder='Company name' name />
				</Form.Item>
				<Form.Item
					name="first_name"
					hasFeedback
					onChange={(e) => onHandleChange(e)}
					value={userRegister.first_name}
				>
					<Input placeholder='First name' />
				</Form.Item>
				<Form.Item
					name="last_name"
					hasFeedback
					onChange={(e) => onHandleChange(e)}
					value={userRegister.last_name}
				>
					<Input placeholder='Last name' />
				</Form.Item>
				<Form.Item
					name="job_title"
					hasFeedback
					onChange={(e) => onHandleChange(e)}
					value={userRegister.job_title}
				>
					<Input placeholder='Job title' />
				</Form.Item>
				<Form.Item
					name="work_email"
					hasFeedback
					onChange={(e) => onHandleChange(e)}
					value={userRegister.work_email}
				>
					<Input addonAfter={selectAfter} placeholder='Work email' />
				</Form.Item>
				<Form.Item
					name="password"
					hasFeedback
					onChange={(e) => onHandleChange(e)}
					value={userRegister.password}
				>
					<Input placeholder='Enter Password' />
				</Form.Item>
				<Form.Item
					name="confirm_password"
					hasFeedback
					onChange={(e) => onHandleChange(e)}
					value={userRegister.confirm_password}
				>
					<Input placeholder='Enter Confirm Password' />
				</Form.Item>
				<Form.Item
					name="phone_number"
					hasFeedback
					onChange={(e) => onHandleChange(e)}
					value={userRegister.phone_number}
				>
					<Input addonBefore={selectBefore} defaultValue="Phone number" />
					{/* <Input placeholder='Phone number'/> */}
				</Form.Item>
				<Form.Item>
					<Link to="register-3">
					<Button type="primary" htmlType="submit" block loading={loading}>
						Sign Up
					</Button>
					</Link>
				</Form.Item>
			</Form>
		</>
	)
}

const mapStateToProps = ({ auth }) => {
	const { loading, message, showMessage, token, redirect } = auth;
	return { loading, message, showMessage, token, redirect }
}

const mapDispatchToProps = {
	signUp,
	showAuthMessage,
	hideAuthMessage,
	showLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
