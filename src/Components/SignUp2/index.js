import "./index.css";
import { Form, Select, Button, DatePicker, Input } from "antd";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
};

const SignUp2 = () => {
  const onFinish = ({ dob }) => {
    console.log("Received values of form: ", dob.format("DD/MM/YYYY"));
  };

  return (
    <div className="form__main">
      <Form
        name="user_form"
        // {...formItemLayout}
        onFinish={onFinish}
        requiredMark={false}
        className="customForm"
        //   initialValues={{
        //     ["input-number"]: 3,
        //     ["checkbox-group"]: ["A", "B"],
        //     rate: 3.5,
        //   }}
      >
        <Form.Item
          name="name"
          // label="Name"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please Enter Your Name",
            },
          ]}
        >
          <Input placeholder="Enter Your Name" className="customInput" />
        </Form.Item>

        <Form.Item
          name="phone"
          // label="Phone Number"
          hasFeedback
          rules={[
            {
              pattern: RegExp(/^\d{10}$/),
              required: true,
              message: "Please Enter Your Phone Number",
            },
          ]}
        >
          <Input
            placeholder="Enter Your Phone Number"
            className="customInput"
          />
        </Form.Item>

        <Form.Item
          name="city"
          // label="City"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please Enter Your City",
            },
          ]}
        >
          <Input placeholder="Enter Your City" className="customInput" />
        </Form.Item>
        <Form.Item
          name="state"
          // label="State"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please Enter Your State",
            },
          ]}
        >
          <Input placeholder="Enter Your State" className="customInput" />
        </Form.Item>
        <Form.Item
          name="zip"
          // label="Pin Code"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please Enter Your Pin Code",
            },
          ]}
        >
          <Input placeholder="Enter Your Pin Code" className="customInput" />
        </Form.Item>

        <Form.Item
          name="dob"
          // label="Date Of Birth"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please Enter Your Date of Birth",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="gender"
          // label="Gender"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Select Gender",
            },
          ]}
        >
          <Select placeholder="Please select a gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="blood"
          // label="Blood Group"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Select Blood Group",
            },
          ]}
        >
          <Select placeholder="Please select your group">
            <Option value="o+">O+ve</Option>
            <Option value="o-">O-ve</Option>
            <Option value="a+">A+ve</Option>
            <Option value="a-">A-ve</Option>
            <Option value="b+">B+ve</Option>
            <Option value="b-">B-ve</Option>
            <Option value="ab+">AB+ve</Option>
            <Option value="ab-">AB-ve</Option>
          </Select>
        </Form.Item>

        {/*<Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="longgggggggggggggggggggggggggggggggggg"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item> */}

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp2;
