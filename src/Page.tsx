import { useEffect, useState } from "react";
import "./App.css";
import { Formik, Form, Field } from "formik";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import Button from "@mui/material/Button";

interface FormData {
  name: string;
  email: string;
  date: string;
  address: string;
  teliphone: string;
  altnumber: string;
}

 const onSubmit = (values: FormData) => {
//   // console.log(values);
};

function Page() {
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    fetch("/api/details")
      .then((res) => res.json())
      .then((json) => setFormData(json.details[0]))
      .catch((err) => console.log(err));
  }, []);

  const initialValues: FormData = {
    name: formData?.name || "hello",
    email: formData?.email || "",
    date: formData?.date || "",
    address: formData?.address || "",
    teliphone: formData?.teliphone || "",
    altnumber: formData?.altnumber || "",
  };

  const onSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="App">
      <Box
        sx={{
          width: "50%",
          borderRadius: "10px",
          border: "1px solid black",
        }}
      >

        

        <Box sx={{ width: "100%", color: "white" }}>
          <Box className="topHeading">
            <Typography variant="h5" color="black">
              Customer Details
            </Typography>
            <Button variant="outlined">Edit</Button>
          </Box>
        </Box>
        <Divider />

        <Box>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>

              
             
              <Box className="form_container">
                <Box className="input_field_wrapper" gap={2}>
                  <Box className="input_field">
                    <Typography className="text_lable" variant="h6" color="black">
                      Customer Name
                    </Typography>
                    <Field
                      className="text-field"
                      type="text"
                      id="name"
                      name="name"
                    />
                  </Box>
                  <Box className="input_field">
                    <Typography className="text_lable" variant="h6" color="black">
                      Date Of Birth
                    </Typography>
                    <Field
                      className="text-field"
                      type="text"
                      id="date"
                      name="date"
                    />
                  </Box>
                  <Box className="input_field">
                    <Typography className="text_lable" variant="h6" color="black">
                      Email Address
                    </Typography>
                    <Field
                      className="text-field"
                      type="text"
                      id="email"
                      name="email"
                    />
                  </Box>
                </Box>

                <Box className="input_field_wrapper">
                  <Box className="input_field">
                    <Typography className="text_lable" variant="h6" color="black">
                      Address
                    </Typography>
                    <Field
                      as="textarea"
                      rows={8}
                      className="text-field_address"
                      type="text-area"
                      id="address"
                      name="address"
                    />
                    <button type="submit">Submit</button>
                  </Box>
                </Box>

                <Box className="input_field_wrapper" gap={2}>
                  <Box className="input_field">
                    <Typography className="text_lable" variant="h6" color="black">
                      Telephone Number
                    </Typography>
                    <Field
                      className="text-field"
                      type="text"
                      id="teliphone"
                      name="teliphone"
                    />
                  </Box>

                  <Box className="input_field">
                    <Typography className="text_lable" variant="h6" color="black">
                      Alt Telephone Number
                    </Typography>
                    <Field
                      className="text-field"
                      type="text"
                      id="altnumber"
                      name="altnumber"
                    />
                  </Box>
                </Box>
              </Box>
            </Form>
          </Formik>
        </Box>
      </Box>
        
    </div>
  );
}

export default Page;
