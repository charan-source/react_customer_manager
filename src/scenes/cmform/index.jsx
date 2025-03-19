import { Box, Button, TextField, Typography, useMediaQuery, useTheme, FormControl, Select, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
// import Header from "../../components/Header";
import { useState } from "react";
import { tokens } from "../../theme";

const experienceOptions = [
  { value: "Extremely happy", label: "😊 Extremely Happy", color: "#8BC34A" },
  { value: "Happy", label: "🙂 Happy", color: "#f7f700" },
  { value: "Frustrated", label: "😠 Frustrated", color: "#FF9800" },
  { value: "Extremely frustrated", label: "😡 Extremely Frustrated", color: "#F44336" },
];

const impactOptions = [
  { value: "Revenue impact", label: "💰 Revenue Impact", color: "#00ACC1" },
  { value: "Business show stopper", label: "🚧 Business Show Stopper", color: "#00ACC1" },
  { value: "Customer experience", label: "👥 Customer Experience", color: "#00ACC1" },
];

const checkoutSchema = yup.object().shape({
  experience: yup.string().required("Experience selection is required"),
  experienceDetails: yup.string().max(500, "Maximum 500 characters").required("Details are required"),
  impact: yup.string().required("Impact selection is required"),
});

const initialValues = {
  experience: "",
  experienceDetails: "",
  impact: "",
  attachments: [],
};

const CmForm = () => {
  const theme = useTheme();
  const [status] = useState("Open");
  const isMobile = useMediaQuery("(max-width:600px)");
  const colors = tokens(theme.palette.mode);

  const handleFormSubmit = (values) => {
    const formData = {
      ...values,
      date: new Date().toISOString(),
      status,
    };
    console.log(formData);
  };
  const scalingFactor = 1.1;

  return (
    <Box m="20px" sx={{ backgroundColor: "#ffffff", padding: "20px" }}>
      {/* <Header title="Share your experience" /> */}

      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap="20px">
              {/* Experience Selection Heading */}
              <Typography fontWeight="bold" fontSize="15px">
                How was your experience?
              </Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                gap="10px"
                alignItems={isMobile ? "flex-start" : "flex-start"}
                justifyContent={isMobile ? "center" : "flex-start"}
              >
                {experienceOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant="contained"
                    color="primary"
                    onClick={() => setFieldValue("experience", option.value)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "8px",
                      textTransform: "none",
                      fontSize: isMobile ? "15px" : "15px",
                      width: isMobile ? "100%" : "auto",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: values.experience === option.value ? option.color : "#f5f5f5",
                      color: values.experience === option.value ? "#000" : "#333",
                      boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.15)",
                      transition: "0.3s",
                      "&:hover": {
                        transform: `scale(${scalingFactor})`,
                        color: "#000",
                        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <span>{option.label}</span>
                  </Button>
                ))}
              </Box>
              {touched.experience && errors.experience && (
                <Typography color="error" fontSize="0.9rem">
                  {errors.experience}
                </Typography>
              )}

              {/* Subject Input with Label */}
              <Box display="flex" flexDirection="column" gap="8px">
                <Typography fontWeight="bold" fontSize="15px">
                  Subject
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!touched.subject && !!errors.subject}
                  helperText={touched.subject && errors.subject}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      // borderRadius: "8px",
                      border: "1px solid #ccc",
                      backgroundColor: "#ffffff",
                      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        borderColor: "#999",
                        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.15)",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#555",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
              </Box>

              {/* Experience Details Input with Label */}
              <Box display="flex" flexDirection="column" gap="8px">
                <Typography variant="body1" fontWeight="bold" fontSize="15px">
                  Details of your experience
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  multiline
                  rows={4}
                  name="experienceDetails"
                  value={values.experienceDetails}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!touched.experienceDetails && !!errors.experienceDetails}
                  helperText={touched.experienceDetails && errors.experienceDetails}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      // borderRadius: "8px",
                      border: "1px solid #ccc",
                      backgroundColor: "#ffffff",
                      boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        borderColor: "#999",
                        boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.15)",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#555",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
              </Box>

              {/* Impact Selection */}
              {/* Impact Selection */}
              <Typography variant="h6" fontWeight="bold" fontSize="15px">
                Impact
              </Typography>
              <FormControl fullWidth>
                <Select
                  value={values.impact}
                  onChange={(event) => setFieldValue("impact", event.target.value)}
                  displayEmpty
                  variant="outlined"
                  sx={{
                    backgroundColor: "#ffffff",
                    // borderRadius: "8px",
                    border: "1px solid #ccc",
                    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
                    "&:hover": {
                      borderColor: "#999",
                      boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <MenuItem value="" disabled>Select an impact</MenuItem>
                  {impactOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                {touched.impact && errors.impact && (
                  <Typography color="error" fontSize="0.9rem">
                    {errors.impact}
                  </Typography>
                )}
              </FormControl>


              {/* File Upload */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "5px",
                  borderRadius: "5px",
                  width: isMobile ? "100%" : "30%",
                  position: "relative",
                  // border: "2px solid gray",
                  cursor: "pointer",
                  // backgroundColor: "#f9f9f9",
                  // marginY: "15px"
                }}
                onClick={() => document.getElementById("fileInput").click()} // Trigger file input on click
              >
                <Box sx={{ width: "17%" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width="40"
                    height="32"
                    stroke="gray"
                    fill="white"
                    strokeWidth="14"
                  >
                    <path d="M64 480H296.2C305.1 491.8 317.3 502.3 329.7 511.3C326.6 511.7 323.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H220.1C232.8 0 245.1 5.057 254.1 14.06L369.9 129.9C378.9 138.9 384 151.2 384 163.9V198.6C372.8 201.8 362.1 206 352 211.2V192H240C213.5 192 192 170.5 192 144V32H64C46.33 32 32 46.33 32 64V448C32 465.7 46.33 480 64 480V480zM347.3 152.6L231.4 36.69C229.4 34.62 226.8 33.18 224 32.48V144C224 152.8 231.2 160 240 160H351.5C350.8 157.2 349.4 154.6 347.3 152.6zM448 351.1H496C504.8 351.1 512 359.2 512 367.1C512 376.8 504.8 383.1 496 383.1H448V431.1C448 440.8 440.8 447.1 432 447.1C423.2 447.1 416 440.8 416 431.1V383.1H368C359.2 383.1 352 376.8 352 367.1C352 359.2 359.2 351.1 368 351.1H416V303.1C416 295.2 423.2 287.1 432 287.1C440.8 287.1 448 295.2 448 303.1V351.1zM576 368C576 447.5 511.5 512 432 512C352.5 512 288 447.5 288 368C288 288.5 352.5 224 432 224C511.5 224 576 288.5 576 368zM432 256C370.1 256 320 306.1 320 368C320 429.9 370.1 480 432 480C493.9 480 544 429.9 544 368C544 306.1 493.9 256 432 256z" />
                  </svg>
                </Box>
                <Typography sx={{ fontSize: "16px", color: "#000000" }}>Attach Files</Typography>

                {/* Hidden File Input */}
                <input
                  id="fileInput"
                  type="file"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: "pointer",
                  }}
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file) {
                      console.log("Selected file:", file.name);
                    }
                  }}
                />
              </Box>



              {/* Submit Button */}
              <Box display="flex" justifyContent="flex-end" mt="5px">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    padding: "14px 24px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    borderRadius: "3px",
                    boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)",
                    color: "#ffffff",
                    transition: "0.3s",
                    textTransform: "none",
                    backgroundColor: colors.blueAccent[700],
                    "&:hover": { backgroundColor: colors.blueAccent[600], boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)" },
                  }}
                >
                  Submit Experience
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default CmForm;