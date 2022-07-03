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

const children = [];

const handleChange = (value) => {
    console.log(`selected ${value}`);
  };


function Second() {
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
            <h3 style={{ marginRight: '88%',marginTop:'-25px'}}>Analytics Tags </h3>
            <h5 style={{ marginRight: '440px' }}>We recommend adding analytics tags that can be used to filter and compare performance of various links</h5>


            <Form.Item label="Feature (utm_medium)" tooltip={{
                title: 'Feature should describe the action or product where this link is placed. In the UTM world, this is typically utm_medium.',
                icon: <InfoCircleOutlined />,
            }}>
                <Space>
                    <Form.Item
                        name="feature"
                        noStyle
                        rules={[
                            {
                                required: false,
                                message: '(utm_medium)',
                            },
                        ]}
                    >
                        <Input
                           /*  mode="tags" */
                            style={{
                                width: 500,
                            }}
                            placeholder="marketing"
                            onChange={handleChange}
                        />
                        {/*     {children}
                        </Input> */}
                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item label="Channel (utm_source)" tooltip={{
                title: 'Tags are a free-form list of meaningful labels that can be used as filters in the Quick Links table. Use them to keep your analytics organized.',
                icon: <InfoCircleOutlined />,
            }}>
                <Space>
                    <Form.Item
                        name="channel"
                        noStyle
                        rules={[
                            {
                                required: false,
                                message: '(utm_source)',
                            },
                        ]}
                    >
                        <Input
                           /*  mode="tags" */
                            style={{
                                width: 500,
                            }}
                            placeholder="e.g.Facebook,Twitter"
                            onChange={handleChange}
                        />
                        {/*     {children}
                        </Input> */}
                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item label="Campaign (utm_campaign)" tooltip={{
                title: 'Campaign varies from company to company, but it should describe the theme of the link. In the UTM world, this is typically utm_campaign..',
                icon: <InfoCircleOutlined />,
            }}>
                <Space>
                    <Form.Item
                        name="campaign"
                        noStyle
                        rules={[
                            {
                                required: false,
                                message: 'campain',
                            },
                        ]}
                    >
                        <Input
                           /*  mode="tags" */
                            style={{
                                width: 500,
                            }}
                            placeholder="Black Friday"
                            onChange={handleChange}
                        />
                        {/*     {children}
                        </Input> */}
                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item label="Tags" tooltip={{
                title: 'Tags are a free-form list of meaningful labels that can be used as filters in the Quick Links table. Use them to keep your analytics organized.',
                icon: <InfoCircleOutlined />,
            }}>
                <Space>
                    <Form.Item
                        name="tags"
                        noStyle
                        rules={[
                            {
                                required: false,
                                message: 'Tags',
                            },
                        ]}
                    >
                        <Select
                            mode="tags"
                            style={{
                                width: 500,
                            }}
                            placeholder="e.g. June Offer, Summer"
                            onChange={handleChange}
                        >
                            {children}
                        </Select>
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

export default Second; 