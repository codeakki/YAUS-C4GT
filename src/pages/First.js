import { Button, Form, Input, Select, Space } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from 'axios';


function First() {
    const baseUrl = " https://yaus.xyz";
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    const [state, setState] = useState({
        user: '0fe6ff38-fc46-11ec-b939-0242ac120001',
        url: '',
        project: '0fe6ff38-fc46-11ec-b939-0242ac120002',
        customHashId: '',
    });
    const handleSubmit = (e) => {
        const userData = {
            customHashId: state.customHashId,
            project: state.project,
            url: state.url,
            user: state.user
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...',
            "Access-Control-Allow-Origin": "*"
        }
        console.log(userData);
        /*  console.log(baseUrl+{customHashId});   */
        axios.post(`${baseUrl}/register`, userData, { headers: headers }).then((response) => {
            console.log(response.status);
            console.log(response.data.token);
            console.log(`${baseUrl}/${state.customHashId}`);

        });

    }

    const handleChange = (e) => {
        const value = e.target.value;
        /*  console.log(`${baseUrl}/${state.customHashId}`); */
        setState({
            ...state,
            [e.target.name]: value

        });
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
            justify="center"
            align="middle"
            margin="auto"

            style={{ minHeight: '20vh' }}
            {...formItemLayout}
            layout={formLayout}
            form={form}
            onSubmit={e => e.preventDefault()}
            onFinish={handleSubmit}

            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 2,
            }}
        >
            <h3 style={{ marginRight: '82%' }}>Name Your Link </h3>
            <h5 style={{ marginRight: '30%' }}>Let's start by naming your link and creating an alias. Make the link title easy to remember for you , as it will be displayed in the Quick Links table.</h5>
            <Form.Item label="Link Title" required tooltip="This is a required field" value="vertical">
                <Space>
                    <Form.Item
                        /* name="username" */
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: 'Title is required',
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
            <Form.Item label="Link Domain" required tooltip="This is a required field">
                <Input.Group compact>
                    <Form.Item
                        /*    name={['link']} */
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: 'Province is required',
                            },
                        ]}
                    >
                        <div className="steps-action" display="inline-flex">
                            <Input addonBefore="yaus.xyz/" initialValues="TT141kANAe" style={{
                                width: 500,
                            }} id="customHashId" name="customHashId" value={state.customHashId}
                                onChange={handleChange} />
                        </div>
                    </Form.Item>

                </Input.Group>
            </Form.Item>

            <Form.Item label="Original Web URL" tooltip={{
                title: 'Tooltip with customize icon',
                icon: <InfoCircleOutlined />,
            }}>
                <Space>
                    <Form.Item
                        /* name="url" */
                        noStyle
                        rules={[
                            {
                                required: true,
                                message: 'Url is required',
                            },
                        ]}
                    >
                        <Input
                            style={{
                                width: 500,
                            }}
                            placeholder="Paste a Web URL "
                            id="url"
                            name="url"
                            value={state.url}
                            onChange={handleChange}
                        />
                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item label=" " colon={false}>
                <Button type="submit" htmlType="submit" align="right" onClick={() => navigator.clipboard.writeText(`${baseUrl}/${state.customHashId}`)}>
                    Copy
                </Button>
            </Form.Item>
        </Form>
    );
};

export default First;

