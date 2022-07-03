import { Button, Form, Input, Select, Space, Tooltip, Typography, Cascader } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
const { Option } = Select;

const selectBefore = (
    <Select defaultValue="http://" className="select-before">
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
    </Select>
);

function First() {
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
            <h3  style={{ marginRight: '85%' }}>Name Your Link </h3>
               <h5 style={{ marginRight: '240px' }}>Let's start by naming your link and creating an alias. Make the link title easy to remember for you , as it will be displayed in the Quick Links table.</h5> 
            <Form.Item label="Link Title" required tooltip="This is a required field" value="vertical">
                <Space>
                    <Form.Item
                        name="username"
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: 'Username is required',
                            },
                        ]}
                    >
                        <Input
                            style={{
                                width: 500,
                            }}
                            placeholder="Please input"
                        />
                    </Form.Item>
                </Space>
            </Form.Item>

            {/*   <Space direction="vertical">
                <Form.Item label="Link Domain">
                    <Input addonBefore="ubwee.app.link/" defaultValue="TT141kANAe" />
                </Form.Item>
            </Space> */}


            <Form.Item label="Link Domain" required tooltip="This is a required field">
                <Input.Group compact>
                    <Form.Item
                        name={['address', 'province']}
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: 'Province is required',
                            },
                        ]}
                    >
                        <Input addonBefore="ubwee.app.link/" initialValues="TT141kANAe" style={{
                            width: 500,
                        }} />
                    </Form.Item>
                    {/* <Form.Item
                        name={['address', 'street']}
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: 'Street is required',
                            },
                        ]}
                    >
                        <Input
                            style={{
                                width: '50%',
                            }}
                            placeholder="Input street"
                        />
                    </Form.Item> */}
                </Input.Group>
            </Form.Item>
            <Form.Item label="Original Web URL" tooltip={{
                title: 'Tooltip with customize icon',
                icon: <InfoCircleOutlined />,
            }}>
                <Space>
                    <Form.Item
                        name="weburl"
                        noStyle
                        rules={[
                            {
                                required: false,
                                message: 'Username is required',
                            },
                        ]}
                    >
                        <Input
                            style={{
                                width: 500,
                            }}
                            placeholder="Paste a Web URL "
                        />
                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item label=" " colon={false}>
                {/* <Button type="primary" htmlType="submit">
                    Submit
                </Button> */}
            </Form.Item>
        </Form>
    );
};

export default First; 