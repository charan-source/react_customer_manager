import React, { useState } from "react";
import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  // IconButton,
  Toolbar,
} from "@mui/material";
import { tokens } from "../../theme";
import {
  Search as SearchIcon,
  ImportExport as ImportExportIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const NewExperiences = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 1300px)");
  const colors = tokens(theme.palette.mode);
    const Navigate = useNavigate();

  // State for search, rows per page, and tickets
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const tickets = [
    {
      id: 223958,
      subject: "Eligendi ut illum alias voluptatibus eos molestiae accusantium.",
      // createdBy: "Krystel Jetmanie",
      // assignedTo: "Kory Maegan",
      priority: "Very Urgent",
      status: "Processing",
      date: "2 hours ago",
      updated: "2 hours ago",

      type: "Bug",
      category: "Software",
      department: "IT",
    },
    {
      id: 616840,
      subject: "Vero excepturi cunque nulla est corrupti.",
      // createdBy: "Savansh Ivory",
      // assignedTo: "Leam Leda",
      priority: "Less Urgent",
      status: "Pending",
      date: "2 hours ago",
      updated: "2 hours ago",

      type: "Feature Request",
      category: "Hardware",
      department: "Support",
    },

    {
      id: 223958,
      subject: "Eligendi ut illum alias voluptatibus eos molestiae accusantium.",
      // createdBy: "Krystel Jetmanie",
      // assignedTo: "Kory Maegan",
      priority: "Very Urgent",
      status: "Processing",
      date: "2 hours ago",
      updated: "2 hours ago",

      type: "Bug",
      category: "Software",
      department: "IT",
    },
    {
      id: 616840,
      subject: "Vero excepturi cunque nulla est corrupti.",
      // createdBy: "Savansh Ivory",
      // assignedTo: "Leam Leda",
      priority: "Less Urgent",
      status: "Pending",
      date: "2 hours ago",
      updated: "2 hours ago",

      type: "Feature Request",
      category: "Hardware",
      department: "Support",
    },

    {
      id: 223958,
      subject: "Eligendi ut illum alias voluptatibus eos molestiae accusantium.",
      // createdBy: "Krystel Jetmanie",
      // assignedTo: "Kory Maegan",
      priority: "Very Urgent",
      status: "Processing",
      date: "2 hours ago",
      updated: "2 hours ago",

      type: "Bug",
      category: "Software",
      department: "IT",
    },
    {
      id: 616840,
      subject: "Vero excepturi cunque nulla est corrupti.",
      // createdBy: "Savansh Ivory",
      // assignedTo: "Leam Leda",
      priority: "Less Urgent",
      status: "Pending",
      date: "2 hours ago",
      updated: "2 hours ago",

      type: "Feature Request",
      category: "Hardware",
      department: "Support",
    },
    {
      id: 223958,
      subject: "Eligendi ut illum alias voluptatibus eos molestiae accusantium.",
      // createdBy: "Krystel Jetmanie",
      // assignedTo: "Kory Maegan",
      priority: "Very Urgent",
      status: "Processing",
      date: "2 hours ago",
      updated: "2 hours ago",

      type: "Bug",
      category: "Software",
      department: "IT",
    },
    {
      id: 616840,
      subject: "Vero excepturi cunque nulla est corrupti.",
      // createdBy: "Savansh Ivory",
      // assignedTo: "Leam Leda",
      priority: "Less Urgent",
      status: "Pending",
      date: "2 hours ago",
      updated: "2 hours ago",

      type: "Feature Request",
      category: "Hardware",
      department: "Support",
    },
    {
      id: 223958,
      subject: "Eligendi ut illum alias voluptatibus eos molestiae accusantium.",
      // createdBy: "Krystel Jetmanie",
      // assignedTo: "Kory Maegan",
      priority: "Very Urgent",
      status: "Processing",
      date: "2 hours ago",
      updated: "2 hours ago",

      type: "Bug",
      category: "Software",
      department: "IT",
    },
    {
      id: 616840,
      subject: "Vero excepturi cunque nulla est corrupti.",
      // createdBy: "Savansh Ivory",
      // assignedTo: "Leam Leda",
      priority: "Less Urgent",
      status: "Pending",
      date: "2 hours ago",
      updated: "2 hours ago",

      type: "Feature Request",
      category: "Hardware",
      department: "Support",
    },
    {
      id: 223958,
      subject: "Eligendi ut illum alias voluptatibus eos molestiae accusantium.",
      // createdBy: "Krystel Jetmanie",
      // assignedTo: "Kory Maegan",
      priority: "Very Urgent",
      status: "Processing",
      date: "2 hours ago",
      updated: "2 hours ago",

      type: "Bug",
      category: "Software",
      department: "IT",
    },
    {
      id: 616840,
      subject: "Vero excepturi cunque nulla est corrupti.",
      priority: "Less Urgent",
      status: "Pending",
      date: "2 hours ago",
      updated: "2 hours ago",
      // createdBy: "Savansh Ivory",
      // assignedTo: "Leam Leda",


      type: "Feature Request",
      category: "Hardware",
      department: "Support",
    },
    // Add more ticket data here...
  ];


  // State for filter values
  const [filters, setFilters] = useState({
    type: "",
    category: "",
    department: "",
    priority: "",
    status: "",
    // status: "",
  });

  // Handle filter change
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Filter tickets based on search term and filters
  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filters.type ? ticket.type === filters.type : true;
    const matchesCategory = filters.category ? ticket.category === filters.category : true;
    const matchesDepartment = filters.department ? ticket.department === filters.department : true;
    const matchesPriority = filters.priority ? ticket.priority === filters.priority : true;
    const matchesStatus = filters.status ? ticket.status === filters.status : true;

    return (
      matchesSearch &&
      matchesType &&
      matchesCategory &&
      matchesDepartment &&
      matchesPriority &&
      matchesStatus
    );
  });

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  // Handle import/export actions
  const handleImport = () => {
    alert("Import functionality to be implemented");
  };

  const handleExport = () => {
    alert("Export functionality to be implemented");
  };

  // Handle new ticket button click
  const handleNewTicket = () => {
    Navigate('/cmform')
  };


  return (
    <Box>
      {/* Toolbar with search, import/export, and new ticket button */}
      {/* Search Bar */}

      <Box display="flex" flexDirection={isMobile ? "column" : "row"} justifyContent="space-around" alignItems="center" sx={{ padding: isMobile ? 0 : 2 }}>
        <Box sx={{ width: isMobile ? "100%" : "auto" }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            size="small"
            sx={{
              background: "#ffffff",
              width: isMobile ? "100%" : "560px",
              "& .MuiInputBase-root": {
                height: "48px",
              },
              "& .MuiInputBase-input": {
                fontSize: "16px",
              },
            }}
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: <SearchIcon sx={{ color: "action.active", mr: 1 }} />,
            }}
          />
        </Box>
        {/* Rows per page selector */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: isMobile ? "space-around" : "flex-end",
            padding: 2,
            gap: 5
            // mb: 2, 
          }}
        >

          <FormControl
            size="small"
            sx={{
              backgroundColor: "#ffffff",
              padding: "5px",
              border: "none", // Removes border
              boxShadow: "none", // Removes any shadow effects
            }}
          >
            <InputLabel sx={{ backgroundColor: "#ffffff", paddingX: "4px" }}>
              Rows per page
            </InputLabel>
            <Select
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              label="Rows per page"
              sx={{
                "&.MuiOutlinedInput-root": {
                  "& fieldset": { border: "none" }, // Removes default border
                  "&:hover fieldset": { border: "none" },
                  "&.Mui-focused fieldset": { border: "none" },
                },
              }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
            </Select>
          </FormControl>


          <Box sx={{ display: "flex", gap: 3 }}>
            <Button
              onClick={handleImport}
              sx={{ backgroundColor: "#ffffff", display: "flex", alignItems: "center", gap: 1 }}
            >
              <ImportExportIcon />
              <Typography variant="body2" sx={{ fontSize: "14px" }}>Import</Typography>
            </Button>
            <Button
              onClick={handleExport}
              sx={{ backgroundColor: "#ffffff", display: "flex", alignItems: "center", gap: 1 }}
            >
              <ImportExportIcon />
              <Typography variant="body2" sx={{ fontSize: "14px" }}>Export</Typography>
            </Button>
          </Box>

          <Button
            variant="contained"
            sx={{
              background: colors.blueAccent[500],
              fontWeight: "bold",
              color: "#ffffff",
              whiteSpace: "nowrap",
              // paddingX: "15px"
              padding: "12px 18px ",
              fontSize: "14px",
              textTransform:"none"
            }}
            startIcon={<AddIcon />}
            onClick={handleNewTicket}
          >
            New Experience
          </Button>
        </Box>



      </Box>

      <Toolbar
        sx={{
          width:"100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          gap: isMobile ? 2 : 0,
          mb: 2,
          // padding: isMobile ? 0 : 1
        }}

      >
        {/* Filter Dropdowns */}


        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 1,
            width: isMobile ? "100%" : "100%",
            justifyContent: "space-between",

            // alignItems:"center"
          }}
        >
          <Typography style={{ fontSize: "18px", textAlign: isMobile ? "left" : "center" }}>Filter Ticket By:</Typography>
          <FormControl variant="outlined" size="small" sx={{ minWidth: 140, backgroundColor: "#ffffff", }}>
            <InputLabel sx={{ fontSize: "15px" }}>Type</InputLabel>
            <Select
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
              label="Type"
              sx={{ padding: "5px" }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Bug">Bug</MenuItem>
              <MenuItem value="Feature Request">Feature Request</MenuItem>
              <MenuItem value="Enhancement">Enhancement</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" size="small" sx={{ minWidth: 140, backgroundColor: "#ffffff" }}>
            <InputLabel sx={{ fontSize: "15px" }}>Category</InputLabel>
            <Select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              label="Category"
              sx={{ padding: "5px" }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Software">Software</MenuItem>
              <MenuItem value="Hardware">Hardware</MenuItem>
              <MenuItem value="Network">Network</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" size="small" sx={{ minWidth: 140, backgroundColor: "#ffffff" }}>
            <InputLabel sx={{ fontSize: "15px" }}>Department</InputLabel>
            <Select
              name="department"
              value={filters.department}
              onChange={handleFilterChange}
              label="Department"
              sx={{ padding: "5px" }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Support">Support</MenuItem>
              <MenuItem value="HR">HR</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" size="small" sx={{ minWidth: 140, backgroundColor: "#ffffff" }}>
            <InputLabel sx={{ fontSize: "15px" }}>Priority</InputLabel>
            <Select
              name="priority"
              value={filters.priority}
              onChange={handleFilterChange}
              label="Priority"
              sx={{ padding: "5px" }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Very Urgent">Very Urgent</MenuItem>
              <MenuItem value="Urgent">Urgent</MenuItem>
              <MenuItem value="Less Urgent">Less Urgent</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined" size="small" sx={{ minWidth: 140, backgroundColor: "#ffffff" }}>
            <InputLabel sx={{ fontSize: "15px" }}>Status</InputLabel>
            <Select
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              label="Status"
              sx={{ padding: "5px" }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Processing">Processing</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Closed">Closed</MenuItem>
            </Select>
          </FormControl>

          {/* <FormControl variant="outlined" size="small" sx={{ minWidth: 140, backgroundColor: "#ffffff" }}>
            <InputLabel sx={{ fontSize: "15px" }}>Assign To</InputLabel>
            <Select
              name="Assign To"
              value={filters.status}
              onChange={handleFilterChange}
              label="Assign To"
              sx={{ padding: "5px" }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Processing">Processing</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Closed">Closed</MenuItem>
            </Select>
          </FormControl> */}
        </Box>



      </Toolbar>



      {/* Responsive Table */}
      <Box sx={{ padding: isMobile ? 2 : 3 }}>
        <TableContainer
          component={Paper}
          sx={{
            maxWidth: "100%",
            overflowX: "auto",
            whiteSpace: "nowrap",

            "&::-webkit-scrollbar": {
              height: "4px", // Adjust scrollbar height
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888", // Scrollbar color
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#555",
            },
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="responsive table">
            <TableHead>
              <TableRow sx={{ backgroundColor: colors.blueAccent[500] }}>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px", color: "#ffffff", textTransform:"uppercase"  }}>ID</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px", color: "#ffffff" }}>Subject</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px", color: "#ffffff" }}>Priority</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px", color: "#ffffff" }}>Status</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px", color: "#ffffff" }}>Date</TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "16px", color: "#ffffff" }}>Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTickets.slice(0, rowsPerPage).map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell sx={{ fontSize: "16px" }}>{ticket.id}</TableCell>
                  <TableCell sx={{ fontSize: "16px" }}>{ticket.subject}</TableCell>
                  <TableCell sx={{ fontSize: "16px" }}>{ticket.priority}</TableCell>
                  <TableCell sx={{ fontSize: "16px" }}>{ticket.status}</TableCell>
                  <TableCell sx={{ fontSize: "16px" }}>{ticket.date}</TableCell>
                  <TableCell sx={{ fontSize: "16px" }}>{ticket.updated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default NewExperiences;
