import { Button, Form, Input, Select, Space } from 'antd';
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
    const [id]=useState('0fe6ff38-fc46-11ec-b939-0242ac120002');
    const [url,setUrl]=useState('');
    const [customHashId,setCustomHashId]=useState('');
    const [project]=useState('0fe6ff38-fc46-11ec-b939-0242ac120002');
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('vertical');
   
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const handleSubmit = async(e)=>{
       /*  e.preventDefault(); */
        const name= {id,url,customHashId,project};
        fetch('https://3333-samagradevelopme-yaus-rkmbdjs3jmw.ws-us51.gitpod.io/api/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(name)

        }).then(()=>{
            console.log('Added Success');
        })
    }
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
            onFinish={handleSubmit}
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
               <h5 style={{ marginRight: '40%' }}>Let's start by naming your link and creating an alias. Make the link title easy to remember for you , as it will be displayed in the Quick Links table.</h5> 
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
                        }} value={customHashId}
                        onChange={(e)=>setCustomHashId(e.target.value)} />
                    </Form.Item>

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
                                required: true,
                                message: 'Username is required',
                            },
                        ]}
                    >
                        <Input
                            style={{
                                width: 500,
                            }}
                            placeholder="Paste a Web URL "
                            value={url}
                            onChange={(e)=>setUrl(e.target.url)}
                        />
                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item label=" " colon={false}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default First; 