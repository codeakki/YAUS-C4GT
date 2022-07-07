import { Button, Form, Input, Select, Space } from 'antd';
import { useState } from 'react';
const { Option } = Select;

const selectBefore = (
    <Select defaultValue="Deeplink_path" className="select-before">
        <Option value="Deeplink_path">$deeplink_path</Option>
        <Option value="ios">$ios_deeplink_path</Option>
        <Option value="amndroid">$android_deeplink_path</Option>
        <Option value="desktop">$desktop_deeplink_path</Option>
    </Select>
);


function Fourth() {
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
            <h3 style={{ marginRight: '89%', marginTop: '-25px' }}>Link Data </h3>
            <h5 style={{ marginRight: '40%' }}>Add the data that you want to be passed to your app via this link. This data is also used to configure link functions like routing, attribution windows, etc. All keys and values are case-sensitive</h5>


            <Form.Item label="Key-Value">
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
                 <Input addonBefore={selectBefore}  style={{
                            width: 500,}}/>

                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item label="Key-Value">
                <Space>
                    <Form.Item
                        name="ios2"
                        noStyle
                        rules={[
                            {
                                required: false,
                                message: '(ios)',
                            },
                        ]}
                    >
                 <Input addonBefore={selectBefore}  style={{
                            width: 500,}}/>
                    
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

export default Fourth; 