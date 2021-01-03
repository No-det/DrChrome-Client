import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./index.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth__Context";
import axios from "axios";
import { Redirect } from "react-router-dom"


export default function AppointmentForm(props) {
  const [uploading, setUploading] = useState(false);
  const [reason, setReason] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const { user } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false)
  const url = `http://localhost:8000/api/appoinment/${user._id}`;


  const onFinish = async (values) => {
    console.log(values);
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const createAppoinment = async () => {
    let data = {
      doctorID: "5feb386a44ae600aecd5bb0f",
      reason: reason,
      symptoms: symptoms,
      time: localStorage.getItem("slotTime"),
    };
    let res = await axios.post(url, data);
    if (res.status == 200) setRedirect(true);
  };

  return (
    redirect ? <Redirect to="/patient/" /> :
    <div className="apt-form">
      <Form
        name="validate_other"
        onFinish={onFinish}
        requiredMark={false}
        // initialValues={{
        //   name: user.firstName,
        // }}
      >
        <Form.Item
          name="reason"
          //   label="Reason for Appointment"
          hasFeedback
          className="form__item"
          rules={[
            {
              required: true,
              message: "Please enter the reason for your appointment: ",
            },
          ]}
          style={{ marginBottom: 40 }}
        >
          <Input.TextArea
            placeholder="Enter Your Reason"
            allowClear
            rows={5}
            onChange={(e) => setReason(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="Symptoms"
          //   label="Symptoms"
          hasFeedback
          className="form__item"
          rules={[
            {
              message: "Please Enter Your Symptoms",
            },
          ]}
          style={{ marginBottom: 40 }}
        >
          <Input.TextArea
            placeholder="Enter Your Symptoms"
            allowClear
            rows={5}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="upload"
          label="Upload any documents: "
          valuePropName="fileList"
          getValueFromEvent={normFile}
          style={{ marginTop: 30 }}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            loading={uploading}
            onClick={createAppoinment}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

// 414227024002-7msf4kdntm638jgr2uccptmrb3s2kc23.apps.googleusercontent.com
// z9GSp8u6a46WbigqybKyF-gW
