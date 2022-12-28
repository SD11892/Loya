import styled from "styled-components";
import { Avatar, Rating } from "@mui/material";

const WidgetBubbleContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;
const WidgetBubbleBackground = styled.div`
  width: 16rem;
  border: 3px solid black;
  border-radius: 24px;
  background: repeating-linear-gradient(
    45deg,
    ${(props) => props.ffill},
    ${(props) => props.ffill} 16px,
    ${(props) => props.sfill} 8px,
    ${(props) => props.sfill} 20px
  );
  bottom: -0.5rem;
  top: 1rem;
  right: 0px;
  left: 0.5rem;
  z-index: -1;
  position: absolute;
`;
const WidgetBubbleForeground = styled.div`
  width: 14rem;
  text-align: left;
  border-radius: 24px;
  background-color: ${(props) => props.fill};
  color: ${(props) => props.letter};
  padding: 16px;
  position: relative;
  min-height: 3rem;
  z-index: 1;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  &:before {
    content: "";
    position: absolute;
    top: 30px;
    left: -21px;
    height: 20px;
    width: 20px;
    background-color: ${(props) => props.fill};
    box-sizing: border-box;
    border-bottom-right-radius: 5px;
    transform: rotate(135deg) translate(-60%);
    border-bottom: inherit;
    border-right: inherit;
    box-shadow: inherit;
  }
`;
const WidgetBubble = (props) => {
  return (
    <WidgetBubbleContainer>
      {props.data !== null ? (
        <Avatar
          style={{
            borderRadius: "50%",
            border: "1px solid #ddd",
            borderColor: "rgb(237, 243, 249)",
            borderWidth: "4px",
          }}
          sx={{ width: 56, height: 56 }}
        >
          <img
            src={`data:image/png;base64,${btoa(
              String.fromCharCode(...new Uint8Array(props.data))
            )}`}
            width={"60px"}
          />
        </Avatar>
      ) : (
        <Avatar
          style={{
            borderRadius: "50%",
            border: "1px solid #ddd",
            borderColor: "rgb(237, 243, 249)",
            borderWidth: "4px",
          }}
          sx={{ width: 56, height: 56 }}
        >
          <img src={`../../../../../user.png`} width={"60px"} />
        </Avatar>
      )}

      <div style={{ position: "relative" }}>
        <WidgetBubbleForeground fill={props.fgColor} letter={props.txtColor}>
          <div style={{ width: "100%" }}>
            <Rating
              readOnly
              value={props.rating}
              style={{
                color: props.ratingColor,
              }}
            />
          </div>
          <div style={{ width: "100%", minHeight: "2rem" }}>
            {props.content}
          </div>
          <div style={{ width: "100%" }}>
            {props.name} {props.headline}
          </div>
        </WidgetBubbleForeground>
        <WidgetBubbleBackground ffill={props.bfColor} sfill={props.blColor} />
      </div>
    </WidgetBubbleContainer>
  );
};

export default WidgetBubble;
