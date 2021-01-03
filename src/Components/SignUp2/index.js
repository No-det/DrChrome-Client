import "./index.css";
import { Form, Select, Button, DatePicker, Input } from "antd";
import axios from "axios";
import { AuthContext } from "../../Contexts/Auth__Context";
import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";

const { Option } = Select;

const SignUp2 = (props) => {
  const { user, setToken } = useContext(AuthContext);
  const [uploading, setUploading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState();

  const onFinish = async (values) => {
    setUploading(true);
    const newUser = {
      ...user,
      ...values,
      dob: new Date(values.dob.format("DD/MM/YYYY")),
      isVerified: true,
    };
    const url = "http://localhost:8000/api/addUser";
    const response = await axios.post(url, newUser);
    setTimeout(() => {
      setUploading(false);
    }, 2000);
    if (response.statusText === "OK") {
      sessionStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      setRedirect(true);
    } else {
      setError(response.data);
    }
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
          // initialValues={{
          //   name: user.firstName,
          // }}
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
            <Button type="primary" htmlType="submit" loading={uploading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
        {error && <h1 style={{ color: "red" }}>{error}</h1>}
      </div>
      {redirect && <Redirect to="/patient" />}
    </div>
  );
};

export default SignUp2;
