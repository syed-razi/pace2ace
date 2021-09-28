import { Tabs, Tab, Box } from "@mui/material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabLabels(props) {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={props.tabValue}
        onChange={props.handleTabChange}
        aria-label="basic tabs example"
        centered={true}
      >
        <Tab label="Add Assignments" {...a11yProps(0)} />
        <Tab label="Set Availability" {...a11yProps(1)} />
        <Tab label="View Breakdown" {...a11yProps(2)} />
      </Tabs>
    </Box>
  );
}
