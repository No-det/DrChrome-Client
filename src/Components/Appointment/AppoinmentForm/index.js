import { AuthContext } from "../../../Contexts/Auth__Context";
import { useState, useContext, useEffect } from "react";
import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./index.css";


const AppointmentForm =() => {

  // eslint-disable-next-line
  const [uploading, setUploading] = useState(false);
  const [doctorID, setDoctorID] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState(null);

  const { user } = useContext(AuthContext);

  const onFinish = async (formValues) => {
    setData({...formValues, time: localStorage.getItem("slotTime"), doctorID: doctorID});
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const sendAppointmentData = async () => {
    console.log("@func-start")
    if (localStorage.getItem("slotTime") !== "invalid") {
      console.log("@func-if")
      const res = await axios.post(`http://localhost:8000/api/appointment/${user.uid}`, data);
      console.log(res)
      if (res.status === 200) {
        console.log("@func-res-200")
        setRedirect(true);
      } else if (res.status === 203)
        alert("Booking cancelled. Complete the booked appointments to book a new one.")
    }
    else alert("Please select a valid slot");
  }

  useEffect(() => {
    setDoctorID(window.location.pathname.split("/")[2]);
  }, [])

  useEffect(() => {
    if (data !== null) sendAppointmentData();
  }, [data])

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
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}


// export default withRouter(AppointmentForm);
export default AppointmentForm;
// 414227024002-7msf4kdntm638jgr2uccptmrb3s2kc23.apps.googleusercontent.com
// z9GSp8u6a46WbigqybKyF-gW
