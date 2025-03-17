import { Box, Button, TextField, Select, MenuItem, InputLabel, FormControl, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const CrmForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="Allot Experience" subtitle="Allot Experience To Business of The Unit" />

      <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 4" }}}>
              {/* Status Dropdown */}
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel>Customers</InputLabel>
                <Select name="status" value={values.status} onChange={handleChange} onBlur={handleBlur}>
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Waiting for confirmation">Waiting for confirmation</MenuItem>
                  <MenuItem value="Processing">Processing</MenuItem>
                  <MenuItem value="Resolved">Resolved</MenuItem>
                </Select>
              </FormControl>

              {/* Priority Dropdown */}
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel>Priority</InputLabel>
                <Select name="priority" value={values.priority} onChange={handleChange} onBlur={handleBlur}>
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Urgent">Urgent</MenuItem>
                </Select>
              </FormControl>

              {/* Ticket Type Dropdown */}
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel>Ticket Type</InputLabel>
                <Select name="ticketType" value={values.ticketType} onChange={handleChange} onBlur={handleBlur}>
                  <MenuItem value="Issue">Issue</MenuItem>
                  <MenuItem value="Request">Request</MenuItem>
                  <MenuItem value="Query">Query</MenuItem>
                </Select>
              </FormControl>

              {/* Department Dropdown */}
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel>Department</InputLabel>
                <Select name="department" value={values.department} onChange={handleChange} onBlur={handleBlur}>
                  <MenuItem value="Support">Support</MenuItem>
                  <MenuItem value="Sales">Sales</MenuItem>
                  <MenuItem value="Technical">Technical</MenuItem>
                  <MenuItem value="HR">HR</MenuItem>
                </Select>
              </FormControl>

              {/* Assign To Dropdown */}
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <InputLabel>Assign To</InputLabel>
                <Select name="assignTo" value={values.assignTo} onChange={handleChange} onBlur={handleBlur}>
                  <MenuItem value="User1">User 1</MenuItem>
                  <MenuItem value="User2">User 2</MenuItem>
                  <MenuItem value="User3">User 3</MenuItem>
                </Select>
              </FormControl>

              {/* Subject Input */}
              <TextField fullWidth variant="filled" type="text" label="Subject" name="subject" onBlur={handleBlur} onChange={handleChange} value={values.subject} error={!!touched.subject && !!errors.subject} helperText={touched.subject && errors.subject} sx={{ gridColumn: "span 4" }} />

              {/* Request Information TextArea */}
              <TextField fullWidth variant="filled" multiline rows={4} label="Request Information" name="requestInfo" onBlur={handleBlur} onChange={handleChange} value={values.requestInfo} error={!!touched.requestInfo && !!errors.requestInfo} helperText={touched.requestInfo && errors.requestInfo} sx={{ gridColumn: "span 4" }} />

              {/* File Attachment */}
              <Box sx={{ gridColumn: "span 4" }}>
                <Typography>File Attachment</Typography>
                <input type="file" onChange={(event) => setFieldValue("attachment", event.currentTarget.files[0])} />
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" sx={{backgroundColor:colors.blueAccent[700],}} variant="contained">Allot Business of the Unit</Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  status: yup.string().required("Status is required"),
  priority: yup.string().required("Priority is required"),
  ticketType: yup.string().required("Ticket Type is required"),
  department: yup.string().required("Department is required"),
  assignTo: yup.string().required("Assignee is required"),
  subject: yup.string().required("Subject is required"),
  requestInfo: yup.string().required("Request Information is required"),
  attachment: yup.mixed().required("File attachment is required"),
});

const initialValues = {
  status: "",
  priority: "",
  ticketType: "",
  department: "",
  assignTo: "",
  subject: "",
  requestInfo: "",
  attachment: null,
};

export default CrmForm;
