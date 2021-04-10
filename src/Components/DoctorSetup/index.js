import { Form, Select, Button, Switch, Input, DatePicker } from "antd";
import axios from "axios";
import { AuthContext } from "../../Contexts/Auth__Context";
import { useContext, useState, useRef, useEffect } from "react";
import { Redirect } from "react-router-dom";

const { Option } = Select;
let slots = [
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
];

const DoctorSetup = (props) => {
  const { user, changeUser } = useContext(AuthContext);
  const [selectedSlots, setselectedSlots] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState();
  const setupForm = useRef();

  const onFinish = async (values) => {
    setUploading(true);
    slots.map((slot) => {
      if (values[slot] === true) setselectedSlots(selectedSlots.push(true));
      else setselectedSlots(selectedSlots.push(false));
    });
    const newUser = {
      ...user,
      ...values,
      slots: {
        "10:00 - 11:00": selectedSlots[0],
        "11:00 - 12:00": selectedSlots[1],
        "12:00 - 13:00": selectedSlots[2],
        "13:00 - 14:00": selectedSlots[3],
        "14:00 - 15:00": selectedSlots[4],
        "15:00 - 16:00": selectedSlots[5],
        "16:00 - 17:00": selectedSlots[6],
      },
      dob: new Date(values.dob.format("DD/MM/YYYY")),
      isVerified: true,
    };
    console.log(newUser);
    const url = "http://localhost:8000/api/updateUser";
    const response = await axios.post(url, newUser);
    setTimeout(() => {
      setUploading(false);
    }, 2000);
    if (response.statusText === "OK") {
      changeUser(response.data.token);
      setRedirect(true);
    } else {
      setError(response.data);
    }
  };

  useEffect(() => {
    setupForm.current.setFieldsValue({ ...user });
  }, [user]);

  return (
    <div className="signup2__container">
      <div className="signup2__left">{/* <h1>Dr.Chrome</h1> */}</div>
      <div className="signup2__mid">
        <h3>Create Your Free Account Today</h3>
      </div>
      <div className="signup2__right">
        <Form
          ref={setupForm}
          name="validate_other"
          onFinish={onFinish}
          onChange={(e) => console.log(e.target.value)}
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
            name="specialization"
            label="Specialization"
            hasFeedback
            className="form__item"
            rules={[
              {
                required: true,
                message: "Please Enter your Specialization",
              },
            ]}
          >
            <Input placeholder="Enter your Specialization" />
          </Form.Item>
          <Form.Item
            name="hospital"
            label="Hospital"
            hasFeedback
            className="form__item"
            rules={[
              {
                required: true,
                message: "Please Enter Hospital Address",
              },
            ]}
          >
            <Input placeholder="Enter the Hospital Address where you work" />
          </Form.Item>

          <Form.Item
            name="pricing"
            label="Pricing"
            hasFeedback
            className="form__item"
            rules={[
              {
                required: true,
                message: "Please Enter Your Rate",
              },
            ]}
          >
            <Input placeholder="Enter Your Rate" />
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
            name="yearsOfExp"
            label="Years of Experience"
            hasFeedback
            className="form__item"
            rules={[
              {
                required: true,
                message: "Please Enter Your Years of Experience",
              },
            ]}
          >
            <Input placeholder="Enter Your Years of Experience" />
          </Form.Item>

          <div className="form-slot-select">
            <label>Select your Available Slots : </label>
            {slots.map((slot) => (
              <Form.Item name={slot}>
                <Switch checkedChildren={slot} unCheckedChildren={slot} />
              </Form.Item>
            ))}
          </div>
          <br />
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
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
          >
            <Button
              className="form-submit"
              type="primary"
              htmlType="submit"
              loading={uploading}
            >
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

export default DoctorSetup;
