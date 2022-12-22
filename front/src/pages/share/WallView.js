import * as React from "react";
import Site from "../../components/wall/Site";
import { getAll } from "../../actions/testimonial";
import { useDispatch, useSelector } from "react-redux";
import { getByWallUrl, saveWall } from "../../actions/wall";
import BackwardButton from "../../components/uielements/buttons/backwardButton";
import { Grid, IconButton, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WallView = () => {
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

  const url = window.location.pathname.slice(-6);

  React.useEffect(() => {
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
          width: "100%",
          height: "100vh",
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

export default WallView;
