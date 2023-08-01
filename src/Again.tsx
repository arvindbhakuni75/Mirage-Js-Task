import { useEffect, useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';



interface FormData {
  name: string;
  email: string;
  date: string;
  address: string;
  teliphone: string;
}

function Again() {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [input, setInput] = useState<FormData >({
    name: "",
    email: "",
    date: "",
    address: "",
    teliphone: ""
  });

  const [inable, setIneble] = useState (true)

  useEffect(() => {
    fetch("/api/details")
      .then((res) => res.json())
      .then((json) => setFormData(json.details[0]))
      .catch((err) => console.log(err));
  }, []);

  const hendleEdit = () => {
    setIneble(false)
  }

  return (
    <div className="App">
      <Box
        sx={{
          width: "50%",
          borderRadius: "10px",
          border: "1px solid black",
          p: 1,
          fontFamily: '"Segoe UI Symbol"',
        }}
      >
        <Box sx={{ width: "100%", color: "white",  }}>
          <Box sx={{alignItems:'center'}} className="topHeading">
            <Typography  sx={{
                    fontFamily: '"Segoe UI"',
                    display: 'inline-flex',
                    fontWeight: 500,
                  }} variant="h5" color="black">
              Customer Details  <PersonOutlineIcon sx={{fontSize: '32px', ml: "15px"}} />
            </Typography>
            <Button
              variant="outlined"
              onClick={hendleEdit}
              sx={{
                borderRadius: 5,
                width: '90px',
                height: '35px',
                border: 3,
                textTransform: "capitalize",
                "&:first-letter": {
                  textTransform: "uppercase",
                },
              }}
            >
              Edit
            </Button>
          </Box>
        </Box>
        <Divider sx={{}} />

        <Box
          sx={{
            fontWeight: 700,
            color: "red",
          }}
        >
          <Box className="form_container">
            <Box className="input_field_wrapper" gap={2}>
              <Box className="input_field">
                <Typography
                  sx={{
                    fontFamily: '"Segoe UI"',
                    color: "rgb(102, 101, 101)",
                    fontWeight: 500,
                  }}
                  variant="h6"
                  color="black"
                >
                  Customer Name
                </Typography>
                <input
                  disabled = {inable}
                  className="text-field"
                  type="text"
                  id="name_blue"
                  value={formData?.name}
                  onChange={(e)=> setInput({...input, name:e.target.value})}
                />
              </Box>
              <Box className="input_field">
                <Typography
                  sx={{
                    fontFamily: '"Segoe UI"',
                    color: "rgb(102, 101, 101)",
                    fontWeight: 500,
                  }}
                  variant="h6"
                  color="black"
                >
                  Date of Birth
                </Typography>
                <input
                  disabled = {inable}
                  className="text-field"
                  type="text"
                  id="date"
                  value={formData?.date}
                  onChange={(e)=> setInput({...input, date:e.target.value})}
                />
              </Box>
              <Box className="input_field">
                <Typography
                  sx={{
                    fontFamily: '"Segoe UI"',
                    color: "rgb(102, 101, 101)",
                    fontWeight: 500,
                  }}
                  variant="h6"
                  color="black"
                >
                  Email Address
                </Typography>
                <input
                  disabled = {inable}
                  className="text-field"
                  type="text"
                  id="email"
                  value={formData?.email}
                  onChange={(e)=> setInput({...input, email:e.target.value})}
                />
              </Box>
            </Box>

            <Box className="input_field_wrapper">
              <Box className="input_field">
                <Typography
                  sx={{
                    fontFamily: '"Segoe UI"',
                    color: "rgb(102, 101, 101)",
                    fontWeight: 500,
                  }}
                  variant="h6"
                  color="black"
                >
                  Address
                </Typography>
                <textarea
                  disabled = {inable}
                  rows={5}
                  className="text-field_address"
                  id="address"
                  value={formData?.address}
                  onChange={(e)=> setInput({...input, address:e.target.value})}
                />
              </Box>
            </Box>

            <Box className="input_field_wrapper" gap={2}>
              <Box className="input_field">
                <Typography
                  sx={{
                    fontFamily: '"Segoe UI"',
                    color: "rgb(102, 101, 101)",
                    fontWeight: 500,
                  }}
                  variant="h6"
                  color="black"
                >
                  Telephone Number
                </Typography>
                <input
                  disabled = {inable}
                  className="text-field"
                  type="text"
                  id="teliphone"
                  value={formData?.teliphone}
                  onChange={(e)=> setInput({...input, teliphone:e.target.value})}
                />
              </Box>

              <Box className="input_field">
                <Typography
                  sx={{
                    fontFamily: '"Segoe UI"',
                    color: "rgb(102, 101, 101)",
                    fontWeight: 500,
                  }}
                  className="text_lable"
                  variant="h6"
                  color="black"
                >
                  Alt Telephone Number
                </Typography>
                <input
                  disabled = {inable} 
                  className="text-field"
                  type="text"
                  id="altnumber"
                  name="altnumber"
                  onChange={(e)=> setInput({...input, teliphone:e.target.value})}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Again;
