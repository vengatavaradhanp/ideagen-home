import React, { useEffect, useState } from "react";
import events from "../../assets/images/Events.jpg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import InvertColorsOutlinedIcon from "@mui/icons-material/InvertColorsOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  BarChartOutlined,
  HubOutlined,
  OpenInBrowser,
  PentagonOutlined,
  ReviewsOutlined,
} from "@mui/icons-material";
import Slider from "react-slick";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import AppHeader from "../../components/AppLayout/AppHeader";
import AppSidebar from "../../components/AppLayout/AppSidebar";
import "./css/index.css";
import {
  ProductsMockData,
  carouselMockData,
  carouselSettings,
} from "../../utils/MockData";
import AppLoader from "../../components/AppLayout/AppLoader";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Home(props: any) {
  const [value, setValue] = useState<any>(0);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <AppHeader />
      <AppLoader state={loader} />
      <>
        <div>
          <Grid container spacing={3}>
            <Grid xs={8}>
              <div className="homeGrid8">
                <Grid container alignItems="center">
                  <Grid sm={10}>
                    <div className="homeAlert">
                      Not quiet ready for Ideagen Home?
                    </div>
                    <div>
                      You can opt of using Home until we figure out a few things
                    </div>
                  </Grid>
                  <Grid sm={2} textAlign="end">
                    <Button
                      className="homeAlertButton"
                      variant="contained"
                      disableTouchRipple
                      disableElevation
                      disableRipple
                    >
                      Opt out
                    </Button>
                  </Grid>
                </Grid>
              </div>

              <div className="leftCardContanier">
                <div className="leftCardContanierHeading">Product you own</div>
                <div className="leftCardContanierContentbody">
                  <div className="leftCardContanierIcon">
                    <LanguageOutlinedIcon className="LanguageIcon" />{" "}
                    <span className="leftCardContanierIconText">Courson</span>
                  </div>
                  <div>
                    <p className="leftCardContanierPara">
                      Gain completd control visiblity and real-time reporting of
                      your safe and operational risks landscape with our
                      enterprise cloud-based softwares to maintain their
                      organizations.
                    </p>
                  </div>
                  <div className="homeGrid12ButtonContainer">
                    <Button
                      className="leftCardContanierButton"
                      variant="contained"
                      disableTouchRipple
                      disableElevation
                      disableRipple
                    >
                      Launch product
                    </Button>
                  </div>
                </div>
                <div className="leftCardContanierContentbody">
                  <div className="leftCardContanierIcon">
                    <InvertColorsOutlinedIcon className="LanguageIcon" />{" "}
                    <span className="leftCardContanierIconText">Q-Pulse</span>
                  </div>
                  <div>
                    <p className="leftCardContanierPara">
                      Connect your business, organizations, production and embed
                      unshakeable quality with Ideagen Q-Pulse QMS, our powerful
                      quality management software without the port folio and new
                      letters.
                    </p>
                  </div>
                  <div className="homeGrid12ButtonContainer">
                    <Button
                      className="leftCardContanierButton"
                      variant="contained"
                      disableTouchRipple
                      disableElevation
                      disableRipple
                    >
                      Launch product
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid xs={4}>
              <div className="homeGrid4">
                <Box sx={{ width: "100%", height: "500px" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs value={value} onChange={handleChange}>
                      <Tab label="Events" {...a11yProps(0)} />
                      <Tab label="Training" {...a11yProps(1)} />
                      <Tab label="Suggested Products" {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <>
                      <Slider {...carouselSettings}>
                        {carouselMockData.map((item, index) => (
                          <div key={index}>
                            <>
                              <div>
                                <div>
                                  <img
                                    alt="img"
                                    className="rightCardEventImage"
                                    src={events}
                                  />
                                </div>
                              </div>
                              <div className="rightCardContainer">
                                <div className="rightCardContainerHeading">
                                  Calculating Risk In Automation
                                </div>

                                <div>
                                  <Grid
                                    container
                                    spacing={0}
                                    className="rightCardGridContainer"
                                  >
                                    <Grid sm={6}>
                                      <div className="rightCardCalendarGrid6">
                                        <div>
                                          <CalendarMonthOutlinedIcon className="rightCardCalendarGrid6Icon" />
                                        </div>
                                        <div>12 April 2023 16:00 (GMT)</div>
                                      </div>
                                    </Grid>
                                    <Grid sm={6}>
                                      <div className="rightCardLoacationGrid6">
                                        <div>
                                          <LocationOnOutlinedIcon className="rightCardLoacationGrid6Icon" />
                                        </div>
                                        <div>Ruddington, Nottingham</div>
                                      </div>
                                    </Grid>
                                  </Grid>
                                </div>
                                <div className="rightCardContainerContent">
                                  Gain completd control visiblity and real-time
                                  reporting of your safe and operational risks
                                  landscape with our enterprise cloud-based
                                  softwares.
                                </div>
                              </div>
                              <div className="rightCardButtonContainer">
                                <Button
                                  variant="contained"
                                  className="rightCardButton"
                                  disableTouchRipple
                                  disableElevation
                                  disableRipple
                                >
                                  Learn More
                                </Button>
                              </div>
                            </>
                          </div>
                        ))}
                      </Slider>
                      <div className="rightCardArrowContainer">
                        <div>
                          <ArrowBackOutlinedIcon className="rightCardArrowBackIcon" />
                        </div>
                        <div>
                          <ArrowForwardOutlinedIcon className="rightCardArrowForwardIcon" />
                        </div>
                      </div>
                    </>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <div>Training...</div>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <div>Suggested Products...</div>
                  </TabPanel>
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="homeGrid12">
          <div className="homeGrid12Heading">
            Discover more products from Ideagen
          </div>
          <div className="homeGrid12">
            <Grid container spacing={3}>
              {ProductsMockData.map((item, index) => (
                <Grid sm={2.4} key={index}>
                  <div>
                    <Card className="homeGrid12Card">
                      <div className="homeGrid12ContinerIconName">
                        <div className="homeGrid12Icon">
                          {item.icon}
                          <span className="homeGrid12Name">{item.name}</span>
                        </div>
                      </div>
                      <div>
                        <span className="homeGrid12Badge">{item.badge}</span>
                      </div>
                      <div className="homeGrid12Body">
                        <span>{item.body}</span>
                      </div>
                      <div className="homeGrid12ButtonContainer">
                        <Button
                          className="homeGrid12Button"
                          variant="contained"
                          disableTouchRipple
                          disableElevation
                          disableRipple
                        >
                          Learn More
                        </Button>
                      </div>
                    </Card>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </>

      <AppSidebar />
    </React.Fragment>
  );
}

export default Home;
