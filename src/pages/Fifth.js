import { Button, Form, Input, Select, Space} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';
import { useState } from 'react';
import { Menu } from 'antd';


const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


function Fifth() {
    const [selectedMenuItem, setSelectedMenuItem]= useState('useUrl');

 const componentsSwtich = (key) => {
 switch (key) {
   case 'useUrl':
     return ( <> 
     <h5 style={{width: 500,marginTop:"10px"}}>Please provide a valid image file url from the web ending in .png, .jpg, or .jpeg or upload your own valid image.</h5>
     <Form.Item label="Image Url" style={{marginTop:"10px"}}>
        <Space>
            <Form.Item
                name="url"
                noStyle
                rules={[
                    {
                        required: false,
                        message: 'title',
                    },
                ]}
            >
                <Input
                    style={{
                        width: 500,
                    }}
                    placeholder="e.g https://website.com.tree.jpg"

                    onChange={handleChange}
                />

            </Form.Item>
        </Space>
    </Form.Item>
    </>
    );
   case 'upload':
     return (<>
     <h5 style={{width: 500,marginTop:"10px"}}>Please provide a valid image file url from the web ending in .png, .jpg, or .jpeg or upload your own valid image.</h5>
     <Upload {...props}>
    <Button>
     Click to Upload
    </Button>
    </Upload>
     </>);
  }
 };
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
                span: 6,
            }}
            wrapperCol={{
                span: 2,
            }}
        >
            <h3 style={{ marginRight: '83%', marginTop: '-25px' }}>Social Media Tags </h3>
            <h5 style={{ marginRight: '45%' }}>When a link is shared on social media platforms, it generally shows a preview of title, description, and image</h5>


            <Form.Item label="Title" tooltip={{
                title: 'Title of Shorten Url',
                icon: <InfoCircleOutlined />,
            }}>
                <Space>
                    <Form.Item
                        name="title"
                        noStyle
                        rules={[
                            {
                                required: false,
                                message: 'title',
                            },
                        ]}
                    >
                        <Input
                            style={{
                                width: 500,
                            }}

                            onChange={handleChange}
                        />
                        {/*     {children}
                        </Input> */}
                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item label="Description">
                <Space>
                    <Form.Item
                        name="description"
                        noStyle
                        rules={[
                            {
                                required: false,
                                message: 'description',
                            },
                        ]}
                    >
                        <Input
                            /*  mode="tags" */
                            style={{
                                width: 500,
                            }}

                            onChange={handleChange}
                        />
                       
                    </Form.Item>
                </Space>
            </Form.Item>
            <Form.Item label="Image URL" tooltip={{
                title: 'Note that your image may be cropped and aligned differently depending on the social platform.',
                icon: <InfoCircleOutlined />,
            }}>
         <Menu style={{width:500}} selectedKeys={selectedMenuItem} mode="horizontal" onClick={(e) => 
        setSelectedMenuItem(e.key)}>
                    <Menu.Item key="useUrl" >
                       Use Url 
                    </Menu.Item>
                    <Menu.Item key="upload" >
                        Upload Image
                    </Menu.Item>
                    </Menu>
                    <div>
     {componentsSwtich(selectedMenuItem)}
   </div>
            </Form.Item>
        </Form>
    );
};

export default Fifth; 