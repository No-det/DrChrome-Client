import "./index.css";
import { Form, Select, Button, DatePicker, Input } from "antd";
const { Option } = Select;

const SignUp2 = (props) => {
  const onFinish = ({ dob }) => {
    console.log("Received values of form: ", dob.format("DD/MM/YYYY"));
  };

  return (
    <div className="signup2__container">
      <div className="signup2__left">{/* <h1>Dr.Chrome</h1> */}</div>
      <div className="signup2__mid">
        <h3>Create Your Free Account Today</h3>
      </div>
      <div className="signup2__right">
        <Form
          name="validate_other"
          onFinish={onFinish}
          requiredMark={false}
          //   initialValues={{
          //     ["input-number"]: 3,
          //     ["checkbox-group"]: ["A", "B"],
          //     rate: 3.5,
          //   }}
        >
          <Form.Item
            name="name"
            label="Name"
            hasFeedback
            className="form__item"
            rules={[
              {
                required: true,
                message: "Please Enter Your Name",
              },
            ]}
          >
            <Input placeholder="Enter Your Name" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            hasFeedback
            className="form__item"
            rules={[
              {
                required: true,
                message: "Please Enter Your Phone Number",
              },
            ]}
          >
            <Input placeholder="Enter Your Phone Number" />
          </Form.Item>

          <Form.Item
            name="city"
            label="City"
            hasFeedback
            className="form__item"
            rules={[
              {
                required: true,
                message: "Please Enter Your City",
              },
            ]}
          >
            <Input placeholder="Enter Your City" />
          </Form.Item>
          <Form.Item
            name="state"
            label="State"
            hasFeedback
            className="form__item"
            rules={[
              {
                required: true,
                message: "Please Enter Your State",
              },
            ]}
          >
            <Input placeholder="Enter Your State" />
          </Form.Item>
          <Form.Item
            name="zip"
            label="Pin Code"
            hasFeedback
            className="form__item"
            rules={[
              {
                required: true,
                message: "Please Enter Your Pin Code",
              },
            ]}
          >
            <Input placeholder="Enter Your Pin Code" />
          </Form.Item>

          <Form.Item
            name="dob"
            label="Date Of Birth"
            hasFeedback
            className="form__item"
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
            label="Gender"
            hasFeedback
            className="form__item"
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
            label="Blood Group"
            hasFeedback
            className="form__item"
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
        <a href="http://localhost:8000/auth/google">Sign in with Google</a>
      </div>
    </div>
  );
};

export default SignUp2;
