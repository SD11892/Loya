import * as React from "react";
import Site from "../../components/wall/Site";
import { getAll } from "../../actions/testimonial";
import { useDispatch, useSelector } from "react-redux";
import { getByWallUrl, saveWall } from "../../actions/wall";
import BackwardButton from "../../components/uielements/buttons/backwardButton";
import { Grid, IconButton, Input } from "@mui/material";
import PageTitle from "../../components/uielements/pageTitle";
import { Share as ShareIcon } from "../../icons/wall/share";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { DownArrow } from "../../icons/downArrow";
import { Design as DesignIcon } from "../../icons/wall/design";
import { Navigation as NavigationIcon } from "../../icons/wall/navigation";
import { Copy as CopyIcon } from "../../icons/wall/copy";
import { CallToAction as CallToActionIcon } from "../../icons/wall/calltoaction";
import { Reorder as ReorderIcon } from "../../icons/wall/Reorder";
import DesignPane from "../../components/wall/DesignPane";
import NavigationPane from "../../components/wall/NavigationPane";
import CopyPane from "../../components/wall/CopyPane";
import CTAPane from "../../components/wall/CTAPane";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderBottom: "1px solid #e5e7eb",
  width: "inherit",
  "&:not(:last-child)": {},
  "&:before": {},
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<DownArrow />} {...props} />
))(({ theme }) => ({
  backgroundColor: "#fff",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  overflow: "visible",
  overflowX: "auto",
}));

const WallDesign = () => {
  const testimonials = useSelector((state) => state.testimonial.testimonial);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [theme, setTheme] = React.useState(0);
  const [pColor, setPColor] = React.useState("");
  const [key, setKey] = React.useState([]);
  const [value, setValue] = React.useState([]);
  const [pTitle, setPTitle] = React.useState("");
  const [subTitle, setSubTitle] = React.useState("");
  const [ctaTitle, setCtaTitle] = React.useState("");
  const [ctaUrl, setCtaUrl] = React.useState("");
  const [data, setData] = React.useState(null);
  const [fileName, setFileName] = React.useState("");
  const [type, setType] = React.useState("");
  const [expanded, setExpanded] = React.useState("panel1");

  const infor = {
    url: "",
    name: "",
    theme: 0,
    pColor: "",
    pTitle: "",
    subTitle: "",
    ctaTitle: "",
    ctaUrl: "",
    data: null,
    fileName: "",
    type: "",
    key: [],
    value: [],
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const url = window.location.pathname.replace(/walls/i, "").replace("//", "");

  React.useEffect(() => {
    console.log("URL=", url);
    getByWallUrl(url)
      .then((res) => {
        const result = res.data.data.data;
        setName(result.name);
        setTheme(result.theme);
        setPColor(result.pColor);
        setPTitle(result.pTitle);
        setSubTitle(result.subTitle);
        setCtaTitle(result.ctaTitle);
        setCtaUrl(result.ctaUrl);
        setData(result.data);
        setFileName(result.fileName);
        setType(result.type);
        setKey(result.key.split(","));
        setValue(result.value.split(","));
      })
      .catch((err) => {
        alert("Invalid Form");
      });
    dispatch(getAll());
  }, []);

  React.useEffect(() => {}, [theme, pColor, key, value]);

  return (
    <Grid container justifyContent="space-between">
      <Grid
        item
        style={{
          background: "#fff",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          borderRight: "1px solid #e5e7eb",
          width: "24rem",
          overflow: "auto",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100vh",
          }}
        >
          <Grid
            container
            pt={"2rem"}
            justifyContent="space-between"
            style={{ alignItems: "center" }}
          >
            <Grid item>
              <BackwardButton
                onClick={() => {
                  navigate("/walls");
                }}
              >
                ← Dashboard
              </BackwardButton>
            </Grid>
            <Grid item>
              <IconButton
                style={{ border: "1px solid #ddd" }}
                onClick={() => {
                  infor.name = name;
                  infor.theme = theme;
                  infor.ctaTitle = ctaTitle;
                  infor.key = key;
                  infor.value = value;
                  infor.url = url;
                  infor.ctaUrl = ctaUrl;
                  infor.pColor = pColor;
                  infor.pTitle = pTitle;
                  infor.subTitle = subTitle;
                  infor.url = url;
                  saveWall(infor).then(() => {
                    let path = `/walls/p/1/testimonials/${url}`;
                    navigate(path);
                  });
                }}
              >
                <ShareIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container pt={"2rem"}>
            <Grid item xs={12} style={{ marginBottom: "1rem" }}>
              <Input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            style={{
              padding: "1rem",
              marginBottom: "1rem",
              background: "#F3F4F6",
              overflowY: "auto",
            }}
          >
            <Grid item xs={1}>
              💡
            </Grid>
            <Grid item xs={11}>
              Share your testimonials with your customers using your wall of
              love.
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            style={{
              marginBottom: "1rem",
            }}
          >
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <DesignIcon />
                Design
              </AccordionSummary>
              <AccordionDetails>
                <DesignPane
                  theme={theme}
                  setTheme={setTheme}
                  pColor={pColor}
                  setPColor={setPColor}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <NavigationIcon />
                Navigation
              </AccordionSummary>
              <AccordionDetails>
                <NavigationPane
                  keys={key}
                  setKey={setKey}
                  values={value}
                  setValue={setValue}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <CopyIcon />
                Copy
              </AccordionSummary>
              <AccordionDetails>
                <CopyPane
                  pTitle={pTitle}
                  subTitle={subTitle}
                  setPTitle={setPTitle}
                  setSubTitle={setSubTitle}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <CallToActionIcon />
                Call to action
              </AccordionSummary>
              <AccordionDetails>
                <CTAPane
                  ctaTitle={ctaTitle}
                  ctaUrl={ctaUrl}
                  setCtaTitle={setCtaTitle}
                  setCtaUrl={setCtaUrl}
                />
              </AccordionDetails>
            </Accordion>
          </Grid>
        </div>
      </Grid>
      <Grid
        item
        style={{
          width: "calc(100% - 24rem)",
          overflowY: "scroll",
          overflowX: "unset",
        }}
      >
        <Site
          testimonials={testimonials}
          pColor={pColor}
          keys={key}
          values={value}
          pTitle={pTitle}
          subTitle={subTitle}
          ctaTitle={ctaTitle}
          ctaUrl={ctaUrl}
        />
      </Grid>
    </Grid>
  );
};

export default WallDesign;
