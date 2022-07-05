import { Button, Form, Input, Select, Space, Tooltip, Typography, Cascader } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import { useState } from 'react';
const { Option } = Select;

const selectBefore = (
    <Select defaultValue="Default" className="select-before">
        <Option value="WebUrl">Web Url</Option>
        <Option value="DeepView">Deep View</Option>
        <Option value="Defaultt">Default</Option>
    </Select>
);
const children =[];


const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};
const onChangeCheck = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  

function Third() {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const formItemLayout =
        formLayout === 'vertical'
            ? {
                labelCol: {
                    span: 80,
                },
                wrapperCol: {
                    span: 1,
                },
            }
            : null;
    return (

        <Form
            /* type="felx" */
            justify="center"
            align="middle"
            margin="auto"

            style={{ minHeight: '20vh' }}
            {...formItemLayout}
            layout={formLayout}
            form={form}
            onFinish={onFinish}
            initialValues={{
                layout: formLayout,
            }}

            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 2,
            }}
        >
            <h3 style={{ marginRight: '92%', marginTop: '-25px' }}>Redirects </h3>
            <h5 style={{ marginRight: '50%' }}>Tell us what to do if the app is not installed when the user clicks on the link. We can take the user to the app store, open a web page, or open adeepview.</h5>


            <Form.Item label="iOS">
                <Space>
                    <Form.Item
                        name="ios"
                        noStyle
                        rules={[
                            {
                                required: false,
                                message: '(ios)',
                            },
                        ]}
                    >
                 <Input addonBefore={selectBefore}  defaultValue="Enter Url"  style={{
                            width: 500,}}/>
                        {/*     {children}
                        </Input> */}
                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item label="Android">
                <Space>
                    <Form.Item
                        name="android"
                        noStyle
                        rules={[
                            {
                                required: false,
                                message: '(ios)',
                            },
                        ]}
                    >
                 <Input addonBefore={selectBefore}  defaultValue="Enter Url"  style={{
                            width: 500,}}/>
                        {/*     {children}
                        </Input> */}
                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item label="Desktop">
                <Space>
                    <Form.Item
                        name="desktop"
                        noStyle
                        rules={[
                            {
                                required: false,
                                message: '(ios)',
                            },
                        ]}
                    >
                 <Input addonBefore={selectBefore}  defaultValue="Enter Url"  style={{
                            width: 500,}}/>
                        {/*     {children}
                        </Input> */}
                    </Form.Item>
                </Space>
            </Form.Item>
           

            <Form.Item label=" " colon={false}>
            <Checkbox  onChange={onChange} style={{width:500 }} >Web Only Link</Checkbox>
            <h5 style={{ marginRight: '10%',width: 500}}>Always redirect to web, even if the app is installed. Please note that the toggle only affects iOS links by default</h5>

                {/* <Button type="primary" htmlType="submit">
                    Submit
                </Button> */}
            </Form.Item>
        </Form>
    );
};

export default Third; 