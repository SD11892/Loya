import React, { useEffect, useState } from "react";
import { getByFormUrl } from "../../actions/form";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import {
  ButtonBase,
  Grid,
  Select,
  TextField,
  NativeSelect,
} from "@mui/material";
import { DownArrow } from "../../icons/downArrow";
import { Design as DesignIcon } from "../../icons/wall/design";
import { WelcomePage as WelcomeIcon } from "../../icons/welcomePage";
import { Thank as ThankIcon } from "../../icons/thank";
import { Response as ResponseIcon } from "../../icons/response";
import { Attribution as AttributionIcon } from "../../icons/attribution";
import { Localization as LocalizationIcon } from "../../icons/localization";
import { Custom as CustomIcon } from "../../icons/custom";
import { FormStyle } from "./index.style";
import { createColor } from "material-ui-color";
import Picker from "../../components/uielements/picker";
import { Camera } from "../../icons/camera";
import PreviewContainer from "../../components/uielements/previewContainer";
import TopLinkContainer from "../../components/uielements/topLinkContainer";
import MainButton from "../../components/uielements/buttons/mainButton";
import PageTitle from "../../components/uielements/pageTitle";
import Switch from "@mui/material/Switch";
import { Delete as DeleteIcon } from "../../icons/delete";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderBottom: "1px solid #e5e7eb",
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

function NewForm() {
  const [visible, setVisible] = React.useState(1);
  const [expanded, setExpanded] = React.useState("panel1");
  const [priColor, setPriColor] = React.useState("");
  const [bgColor, setBgColor] = React.useState("");
  const [logoUrl, setLogoUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState(``);
  const [prompt, setPrompt] = React.useState(``);
  const [thankTitle, setThankTitle] = React.useState(``);
  const [thankMessage, setThankMessage] = React.useState(``);
  const [mobile, setMobile] = React.useState(0);
  const [addingFields, setAddingFields] = React.useState([]);
  const handlepriColorChange = (value) => {
    setPriColor(value.css.backgroundColor);
  };
  const handlebgColorChange = (value) => {
    setBgColor(value.css.backgroundColor);
  };
  const handleChange = (panel) => (event, newExpanded) => {
    console.log("panel=", panel);
    if (panel === "panel1") {
      setVisible(1);
    } else if (panel === "panel2") {
      setVisible(1);
    } else if (panel === "panel3") {
      setVisible(2);
    } else if (panel === "panel4") {
      setVisible(3);
    } else if (panel === "panel5") {
      setVisible(4);
    }
    setExpanded(newExpanded ? panel : false);
  };
  const url = window.location.pathname.replace(/forms/i, "").replace("//", "");

  useEffect(() => {
    getByFormUrl(url).then((res) => {
      setPriColor(res.data.data.data.pColor);
      setBgColor(res.data.data.data.bColor);
      setLogoUrl(res.data.data.data.logoUrl);
      setMessage(`${res.data.data.data.message}`);
      setTitle(res.data.data.data.title);
      setPrompt(`${res.data.data.data.prompt}`);
      setThankTitle(`${res.data.data.data.thankTitle}`);
      setThankMessage(`${res.data.data.data.thankMessage}`);
    });
  }, []);
  useEffect(() => {
    console.log("addingFields=", addingFields);
  }, [
    priColor,
    bgColor,
    logoUrl,
    message,
    title,
    prompt,
    thankTitle,
    thankMessage,
    visible,
    mobile,
    addingFields,
  ]);
  return (
    <FormStyle>
      <div class="flex h-full w-full">
        <div id="editor" class=" px-8 py-8 md-w-50 lg-w-40">
          <div class="flex h-full flex-col">
            <div class="flex justify-between">
              <a
                class="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-50"
                href="/forms"
              >
                <span class="pr-2">←</span>
                Forms
              </a>{" "}
              <button class="flex h-8 w-8 flex-none items-center justify-center rounded-full border bg-white text-gray-600 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="-ml-0.5"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </button>
            </div>{" "}
            <div class="relative">
              <div
                id="form-name"
                spellcheck="false"
                class="title relative mt-4 inline-block rounded p-0.5 outline-dashed outline-1 outline-transparent duration-100 hover:outline-gray-300 focus:pr-0.5 focus:outline-gray-300"
                contenteditable="true"
              >
                <span class="editable-content">New</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="edit-ico pointer-events-none absolute bottom-[6.6px] -right-5 text-gray-300"
                >
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </div>
            </div>{" "}
            <div class="overflow-box relative h-full flex-grow overflow-hidden undefined">
              <div class="h-full overflow-y-auto overflow-x-visible">
                <div class="mt-4 flex gap-2 rounded bg-gray-100 p-4">
                  <div>💡</div>{" "}
                  <p class="text-gray-700">
                    Welcome to your collection form! Your form helps you collect
                    text and video testimonials from your customers.
                  </p>
                </div>
                <div class="mt-4 flex flex-col pb-6">
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
                      <div class="py-4">
                        <div class="flex flex-col gap-4">
                          <div>
                            <div class="block text-sm font-medium">
                              <div class="flex items-center gap-2">
                                {" "}
                                <div></div>
                              </div>{" "}
                              Logo
                            </div>{" "}
                            <button class="mt-2 text-left duration-100 hover:opacity-80">
                              <div class="flex h-20 min-w-[156px] flex-col items-center justify-center rounded-md border bg-white px-4 py-2">
                                <img
                                  src={`http://localhost:3000/${logoUrl}`}
                                  width="48px"
                                  height="48px"
                                />
                              </div>
                            </button>
                          </div>{" "}
                          <div class="flex w-full gap-4">
                            <div class="w-full">
                              <div>
                                <div class="block text-sm font-medium">
                                  <div class="flex items-center gap-2">
                                    Primary Color <div></div>
                                  </div>{" "}
                                </div>{" "}
                                <div
                                  style={{
                                    padding: "0.5rem",
                                    marginTop: "0.5rem",
                                    border: "1px solid #ddd",
                                    borderRadius: "1rem",
                                  }}
                                >
                                  <Picker
                                    value={createColor(priColor)}
                                    onChange={handlepriColorChange}
                                  />
                                </div>
                              </div>
                            </div>{" "}
                            <div class="w-full">
                              <div>
                                <div class="block text-sm font-medium">
                                  <div class="flex items-center gap-2">
                                    Background Color <div></div>
                                  </div>{" "}
                                </div>{" "}
                                <div
                                  style={{
                                    padding: "0.5rem",
                                    marginTop: "0.5rem",
                                    border: "1px solid #ddd",
                                    borderRadius: "1rem",
                                  }}
                                >
                                  <Picker
                                    value={bgColor}
                                    onChange={handlebgColorChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                        </div>{" "}
                      </div>
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
                      <WelcomeIcon />
                      Welcome Page
                    </AccordionSummary>
                    <AccordionDetails>
                      <div class="py-4">
                        <div class="flex flex-col gap-4">
                          <div class="w-full">
                            <label
                              for="title"
                              class="block text-sm font-medium text-gray-800"
                            >
                              <div class="flex items-center gap-2">
                                Welcome Page Title <div></div>
                              </div>{" "}
                            </label>{" "}
                            <div class="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                              {" "}
                              <input
                                name="title"
                                id=""
                                type="text"
                                spellcheck="false"
                                placeholder="ex. Share a testimonial"
                                class=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                                defaultValue={title}
                                onChange={(e) => {
                                  setTitle(e.target.value);
                                }}
                              />
                            </div>{" "}
                          </div>{" "}
                          <div>
                            <div class="w-full">
                              <label
                                for="message"
                                class="block text-sm font-medium text-gray-800"
                              >
                                <div class="flex items-center gap-2">
                                  Introductory Message <div></div>
                                </div>{" "}
                              </label>{" "}
                              <textarea
                                name="message"
                                placeholder="Have we made a positive impact on your product or service? Spread the love with a text or video shoutout!"
                                class="h-40 focus:ring-primary focus:border-primary mt-2 block w-full appearance-none rounded-md border-gray-300 py-2-5 text-sm shadow-sm"
                                defaultValue={message}
                                onChange={(e) => {
                                  setMessage(e.target.value);
                                }}
                              ></textarea>
                            </div>{" "}
                          </div>
                        </div>
                      </div>
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
                      <ResponseIcon />
                      Response Page
                    </AccordionSummary>
                    <AccordionDetails>
                      <div class="py-4">
                        <div class="flex flex-col gap-4">
                          <div>
                            <div class="w-full">
                              <label
                                for="message"
                                class="block text-sm font-medium text-gray-800"
                              >
                                <div class="flex items-center gap-2">
                                  Prompt{" "}
                                  <div class="text-gray-400">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="14"
                                      height="14"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      fill="none"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                      <line
                                        x1="12"
                                        y1="17"
                                        x2="12.01"
                                        y2="17"
                                      ></line>
                                    </svg>
                                  </div>{" "}
                                  <div></div>
                                </div>{" "}
                              </label>{" "}
                              <textarea
                                name="message"
                                placeholder="- What do you like most about LOVE 
- Would you recommend us to a friend?"
                                class="h-40 focus:ring-primary focus:border-primary mt-2 block w-full appearance-none rounded-md border-gray-300 py-2-5 text-sm shadow-sm"
                                defaultValue={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                              ></textarea>
                            </div>{" "}
                            <p class="mt-2 text-xs text-gray-600">
                              Markdown supported
                            </p>
                          </div>{" "}
                          <div class="flex items-center gap-2 ">
                            <input
                              name=""
                              id=""
                              type="checkbox"
                              class="checked:bg-primary checked:focus:bg-primary-400 hover:checked:bg-primary-400 block flex-none appearance-none rounded-md border-gray-300 bg-contain bg-center bg-no-repeat text-sm shadow-sm focus:outline-none focus:ring-0 focus:ring-transparent disabled:cursor-not-allowed"
                            />{" "}
                            <div class="flex-grow">
                              <div class="block text-sm font-medium text-gray-800">
                                <div class="flex items-center gap-2">
                                  Collect Ratings <div></div>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                      <AttributionIcon />
                      Attribution Page
                    </AccordionSummary>
                    <AccordionDetails>
                      <div class="py-4">
                        <div class="w-full">
                          <div class="rounded-md border bg-white p-4 text-sm font-medium text-gray-600 shadow-sm">
                            <div class="flex items-center justify-between">
                              <div>Ask For Email Address</div>{" "}
                              <label class="group relative flex items-center gap-2 text-sm font-medium text-gray-600">
                                <input
                                  name=""
                                  type="checkbox"
                                  class="peer absolute left-1/2 hidden h-full w-full -translate-x-1/2 rounded-md"
                                />{" "}
                                <span class="peer-checked:bg-primary-base flex h-6 w-12 flex-shrink-0 items-center rounded-full bg-gray-300 p-1 duration-300 ease-in-out after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-md after:duration-300 group-hover:after:translate-x-1 peer-checked:after:translate-x-6">
                                  <span class="sr-only"></span>
                                </span>{" "}
                                <span></span>
                              </label>
                            </div>{" "}
                            <hr class="my-2" />{" "}
                            <div class="flex items-center justify-between">
                              <div>Ask For Headline</div>{" "}
                              <label class="group relative flex items-center gap-2 text-sm font-medium text-gray-600">
                                <input
                                  name=""
                                  type="checkbox"
                                  class="peer absolute left-1/2 hidden h-full w-full -translate-x-1/2 rounded-md"
                                />{" "}
                                <span class="peer-checked:bg-primary-base flex h-6 w-12 flex-shrink-0 items-center rounded-full bg-gray-300 p-1 duration-300 ease-in-out after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-md after:duration-300 group-hover:after:translate-x-1 peer-checked:after:translate-x-6">
                                  <span class="sr-only"></span>
                                </span>{" "}
                                <span></span>
                              </label>
                            </div>{" "}
                            <hr class="my-2" />{" "}
                            <div class="flex items-center justify-between">
                              <div>Ask For Website</div>{" "}
                              <label class="group relative flex items-center gap-2 text-sm font-medium text-gray-600">
                                <input
                                  name=""
                                  type="checkbox"
                                  class="peer absolute left-1/2 hidden h-full w-full -translate-x-1/2 rounded-md"
                                />{" "}
                                <span class="peer-checked:bg-primary-base flex h-6 w-12 flex-shrink-0 items-center rounded-full bg-gray-300 p-1 duration-300 ease-in-out after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-md after:duration-300 group-hover:after:translate-x-1 peer-checked:after:translate-x-6">
                                  <span class="sr-only"></span>
                                </span>{" "}
                                <span></span>
                              </label>
                            </div>
                          </div>{" "}
                          <div class="mt-4">
                            <div class="flex items-end justify-between">
                              <span class="label">Additional Fields</span>{" "}
                              <button
                                type="button"
                                class="rounded-md bg-zinc-100 p-2"
                                onClick={() => {
                                  setAddingFields([...addingFields, ""]);
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  class=""
                                >
                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                              </button>
                            </div>{" "}
                            {addingFields.length === 0 ? (
                              <ButtonBase
                                style={{
                                  width: "100%",
                                  border: "1px dashed #e5e7eb",
                                  padding: "1rem",
                                }}
                                onClick={() => {
                                  setAddingFields([...addingFields, ""]);
                                }}
                              >
                                ⚡ Collect more information from your users by
                                adding an additional field.
                              </ButtonBase>
                            ) : (
                              addingFields.map((value) => {
                                return (
                                  <div
                                    style={{
                                      width: "100%",
                                      border: "1px solid #e5e7eb",
                                      padding: "0.5rem",
                                      marginTop: "0.25rem",
                                      borderRadius: "0.375rem",
                                      display: "flex",
                                      flexDirection: "column",
                                    }}
                                  >
                                    <DeleteIcon />
                                    <NativeSelect
                                      defaultValue={30}
                                      inputProps={{
                                        name: "age",
                                        id: "uncontrolled-native",
                                      }}
                                    >
                                      <option value={10}>Ten</option>
                                      <option value={20}>Twenty</option>
                                      <option value={30}>Thirty</option>
                                    </NativeSelect>
                                    <input
                                      class=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                                      style={{
                                        border: "1px solid #ddd",
                                        padding: "2px",
                                      }}
                                      placeholder="value"
                                    />
                                  </div>
                                );
                              })
                            )}
                            <section
                              class="mt-2 flex flex-col gap-2"
                              aria-disabled="false"
                              role="list"
                              aria-describedby="dnd-zone-active"
                              tabindex="0"
                            ></section>
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                  >
                    <AccordionSummary
                      aria-controls="panel4d-content"
                      id="panel4d-header"
                    >
                      <ThankIcon />
                      Thank You Page
                    </AccordionSummary>
                    <AccordionDetails>
                      <div class="py-4">
                        <div class="flex h-full flex-col gap-4">
                          <div>
                            <div class="w-full">
                              <label
                                for="title"
                                class="block text-sm font-medium text-gray-800"
                              >
                                <div class="flex items-center gap-2">
                                  Page Title <div></div>
                                </div>{" "}
                              </label>{" "}
                              <div class="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                                {" "}
                                <input
                                  name="title"
                                  id=""
                                  type="text"
                                  spellcheck="false"
                                  placeholder="Thank you for your feedback 🙏"
                                  class=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
                                  defaultValue={thankTitle}
                                  onChange={(e) =>
                                    setThankTitle(e.target.value)
                                  }
                                />
                              </div>{" "}
                            </div>
                          </div>{" "}
                          <div>
                            <div class="w-full">
                              <label
                                for="message"
                                class="block text-sm font-medium text-gray-800"
                              >
                                <div class="flex items-center gap-2">
                                  Message <div></div>
                                </div>{" "}
                              </label>{" "}
                              <textarea
                                name="message"
                                placeholder="Thank you for taking the time to respond. We truly appreciate it!"
                                class="h-40 focus:ring-primary focus:border-primary mt-2 block w-full appearance-none rounded-md border-gray-300 py-2-5 text-sm shadow-sm"
                                defaultValue={thankMessage}
                                onChange={(e) =>
                                  setThankMessage(e.target.value)
                                }
                              ></textarea>
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                  >
                    <AccordionSummary
                      aria-controls="panel4d-content"
                      id="panel4d-header"
                    >
                      <LocalizationIcon />
                      Localization
                    </AccordionSummary>
                    <AccordionDetails>Localization</AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel7"}
                    onChange={handleChange("panel7")}
                  >
                    <AccordionSummary
                      aria-controls="panel4d-content"
                      id="panel4d-header"
                    >
                      <CustomIcon />
                      Custom Domain
                    </AccordionSummary>
                    <AccordionDetails>Custom</AccordionDetails>
                  </Accordion>
                </div>{" "}
              </div>
              <div class="top-bar point  er-events-none absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white via-white/40 to-white/0 opacity-0 duration-200"></div>{" "}
              <div class="bottom-bar pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white via-white/90 to-white/0 opacity-0 duration-200"></div>
            </div>{" "}
            <div class="flex gap-2">
              <button
                type="submit"
                class="hover:shadow-primary-600/20 bg-black text-white duration-200 hover:shadow-lg disabled:opacity-80 w-full block appearance-none rounded-lg text-sm font-medium duration-100 focus:outline-transparent px-4 py-2-5"
              >
                <div class="relative flex items-center justify-center ">
                  <div class="duration-100 undefined false">Save changes</div>{" "}
                  <div class="opacity-0 absolute inset-0 flex items-center justify-center">
                    <div class="">
                      <svg
                        id="dots"
                        width="32px"
                        viewBox="0 0 132 58"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        class="svelte-10juqow"
                      >
                        <defs></defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="dots"
                            fill="currentColor"
                            class="svelte-10juqow"
                          >
                            <circle
                              id="dot1"
                              cx="25"
                              cy="30"
                              r="13"
                              class="svelte-10juqow"
                            ></circle>
                            <circle
                              id="dot2"
                              cx="65"
                              cy="30"
                              r="13"
                              class="svelte-10juqow"
                            ></circle>
                            <circle
                              id="dot3"
                              cx="105"
                              cy="30"
                              r="13"
                              class="svelte-10juqow"
                            ></circle>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div id="preview" class=" h-screen bg-gray-200 md-block lg-w-60">
          <div class="flex h-full flex-col items-center overflow-y-scroll p-8 pt-8 pb-12">
            <div class="mb-4 flex justify-center">
              <div class="flex rounded-lg bg-gray-300 p-1">
                <button
                  onClick={() => {
                    setMobile(0);
                  }}
                  class="screen-toggle selected svelte-1jkyjij"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class=""
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="12"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="2" y1="20" x2="22" y2="20"></line>
                  </svg>
                </button>{" "}
                <button
                  class="screen-toggle  svelte-1jkyjij"
                  onClick={() => {
                    setMobile(1);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class=""
                  >
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M12 18h.01"></path>
                  </svg>
                </button>
              </div>
            </div>{" "}
            <div
              class="relative flex h-628px flex-none flex-col overflow-hidden bg-gray-50 shadow-xl ring-4 w-full rounded-md"
              style={{ width: mobile === 1 ? "50%" : "100%" }}
            >
              <div
                style={{
                  background: bgColor,
                  width: "100%",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem",
                  borderColor: "#ddd",
                  borderWidth: "0.2rem",
                  overflowY: "auto",
                }}
              >
                <PreviewContainer
                  style={{ display: visible === 1 ? "flex" : "none" }}
                >
                  <TopLinkContainer>
                    <img
                      src={`http://localhost:3000/heart.svg`}
                      width="16px"
                      height="16px"
                      style={{ paddingTop: "0.4rem", marginRight: "0.2rem" }}
                    />
                    <a
                      href="http://localhost:3000"
                      style={{
                        textDecoration: "unset",
                      }}
                    >
                      Powered by Loya
                    </a>
                  </TopLinkContainer>
                  <Grid container style={{ marginBottom: "1rem" }}>
                    <img
                      src={`http://localhost:3000/${logoUrl}`}
                      width="48px"
                      height="48px"
                    />
                  </Grid>
                  <Grid container style={{ marginBottom: "1rem" }}>
                    <PageTitle>{title}</PageTitle>
                  </Grid>
                  <Grid
                    container
                    style={{
                      marginBottom: "1rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {message}
                  </Grid>
                  <Grid container style={{ marginBottom: "1rem" }}>
                    <MainButton
                      style={{
                        width: "100%",
                        alignItem: "center",
                        background: priColor,
                        justifyContent: "center",
                      }}
                    >
                      <Camera />
                      Record a video
                    </MainButton>
                  </Grid>
                  <Grid container style={{ marginBottom: "1rem" }}>
                    <MainButton
                      style={{
                        width: "100%",
                        background: "#f0f0f0",
                        color: "#222",
                        justifyContent: "center",
                      }}
                    >
                      Write a review
                    </MainButton>
                  </Grid>
                </PreviewContainer>
                <PreviewContainer
                  style={{ display: visible === 2 ? "flex" : "none" }}
                >
                  <TopLinkContainer>
                    <img
                      src={`http://localhost:3000/heart.svg`}
                      width="16px"
                      height="16px"
                      style={{ paddingTop: "0.4rem", marginRight: "0.2rem" }}
                    />
                    <a
                      href="http://localhost:3000"
                      style={{
                        textDecoration: "unset",
                      }}
                    >
                      Powered by Loya
                    </a>
                  </TopLinkContainer>
                  <Grid container style={{ marginTop: "1rem" }}>
                    <img
                      src={`http://localhost:3000/${logoUrl}`}
                      width="48px"
                      height="48px"
                    />
                  </Grid>
                  <Grid container style={{ marginTop: "1rem" }}>
                    <PageTitle>Write a text textimonial</PageTitle>
                  </Grid>
                  <Grid
                    container
                    style={{
                      marginTop: "1rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {prompt}
                  </Grid>
                  <Grid
                    container
                    style={{
                      marginTop: "1rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      multiline
                      rows={4}
                      placeholder="Write something nice ✨"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid container style={{ marginTop: "1rem" }}>
                    <MainButton
                      style={{
                        width: "100%",
                        alignItem: "center",
                        background: { priColor },
                        justifyContent: "center",
                      }}
                    >
                      <Camera />
                      Submit
                    </MainButton>
                  </Grid>
                </PreviewContainer>
                <PreviewContainer
                  style={{
                    display: visible === 3 ? "flex" : "none",
                    alignSelf: "baseline",
                  }}
                >
                  <TopLinkContainer>
                    <img
                      src={`http://localhost:3000/heart.svg`}
                      width="16px"
                      height="16px"
                      style={{ paddingTop: "0.4rem", marginRight: "0.2rem" }}
                    />
                    <a
                      href="http://localhost:3000"
                      style={{
                        textDecoration: "unset",
                      }}
                    >
                      Powered by Loya2
                    </a>
                  </TopLinkContainer>
                  <FormStyle style={{ height: "unset" }}>
                    <Grid container style={{ marginTop: "1rem" }}>
                      <img
                        src={`http://localhost:3000/${logoUrl}`}
                        width="48px"
                        height="48px"
                      />
                    </Grid>
                    <Grid container style={{ marginTop: "1rem" }}>
                      <PageTitle>Almost done</PageTitle>
                    </Grid>
                    <form class="mt-5 flex flex-col gap-4 text-black">
                      <div class="w-full">
                        <label
                          for="name"
                          class="block text-sm font-medium text-gray-800"
                        >
                          <div class="flex items-center gap-2">
                            Your Name <div></div>
                          </div>{" "}
                        </label>{" "}
                        <div class="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                          {" "}
                          <input
                            name="name"
                            id=""
                            type="text"
                            required=""
                            spellcheck="false"
                            placeholder="ex. John Smith"
                            class=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-ug-primary focus:border-ug-primary border-gray-300 rounded-md"
                          />
                        </div>{" "}
                      </div>{" "}
                      <div class="w-full">
                        <label
                          for="email"
                          class="block text-sm font-medium text-gray-800"
                        >
                          <div class="flex items-center gap-2">
                            Email address <div></div>
                          </div>{" "}
                        </label>{" "}
                        <div class="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                          {" "}
                          <input
                            name="email"
                            id=""
                            type="email"
                            required=""
                            spellcheck="false"
                            placeholder="john@example.com"
                            class=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-ug-primary focus:border-ug-primary border-gray-300 rounded-md"
                          />
                        </div>{" "}
                      </div>{" "}
                      <div class="w-full">
                        <label
                          for="headline"
                          class="block text-sm font-medium text-gray-800"
                        >
                          <div class="flex items-center gap-2">
                            Headline <div></div>
                          </div>{" "}
                        </label>{" "}
                        <div class="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                          {" "}
                          <input
                            name="headline"
                            id="headline"
                            type="text"
                            spellcheck="false"
                            placeholder="ex. Founder of Loya"
                            class=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-ug-primary focus:border-ug-primary border-gray-300 rounded-md"
                          />
                        </div>{" "}
                      </div>{" "}
                      <div class="w-full">
                        <label
                          for="url"
                          class="block text-sm font-medium text-gray-800"
                        >
                          <div class="flex items-center gap-2">
                            Your Website <div></div>
                          </div>{" "}
                        </label>{" "}
                        <div class="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
                          {" "}
                          <input
                            name="url"
                            id="url"
                            type="url"
                            spellcheck="false"
                            placeholder="https://grandline.com"
                            class=" block flex-grow rounded-r-md border disabled:opacity-60 py-2-5 px-2 text-sm focus:ring-ug-primary focus:border-ug-primary border-gray-300 rounded-md"
                          />
                        </div>{" "}
                      </div>{" "}
                      <div class="flex flex-col gap-2">
                        <label
                          for="avatar"
                          class="block text-sm font-medium text-gray-800"
                        >
                          <div class="flex items-center gap-2">
                            Your Avatar <div></div>
                          </div>{" "}
                        </label>{" "}
                        <div class="flex items-center gap-2">
                          <label tabindex="0">
                            <span class="sr-only" aria-label="required">
                              required
                            </span>{" "}
                            <div class="flex items-center gap-2">
                              <img
                                src="https://ik.imagekit.io/senja/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1657796891741"
                                alt=""
                                class="h-10 w-10 rounded-full object-cover"
                              />{" "}
                              <button
                                type="button"
                                class="border shadow-sm rounded-md px-4 py-2 text-sm font-semibold"
                              >
                                Pick an image
                              </button>
                            </div>{" "}
                            <input
                              type="file"
                              multiple=""
                              accept="image/png,image/jpg,image/gif,image/jpeg,image/webp"
                              autocomplete="off"
                              style={{ display: "none" }}
                            />
                          </label>{" "}
                          <div class="ml-2 text-gray-600"> </div>
                        </div>
                      </div>{" "}
                      <Grid container style={{ marginTop: "1rem" }}>
                        <MainButton
                          style={{ width: "100%", justifyContent: "center" }}
                        >
                          Submit
                        </MainButton>
                      </Grid>
                    </form>{" "}
                  </FormStyle>
                </PreviewContainer>
                <PreviewContainer
                  style={{ display: visible === 4 ? "flex" : "none" }}
                >
                  <TopLinkContainer>
                    <img
                      src={`http://localhost:3000/heart.svg`}
                      width="16px"
                      height="16px"
                      style={{ paddingTop: "0.4rem", marginRight: "0.2rem" }}
                    />
                    <a
                      href="http://localhost:3000"
                      style={{
                        textDecoration: "unset",
                      }}
                    >
                      Powered by Loya3
                    </a>
                  </TopLinkContainer>
                  <Grid container style={{ marginTop: "1rem" }}>
                    <img
                      src={`http://localhost:3000/${logoUrl}`}
                      width="48px"
                      height="48px"
                    />
                  </Grid>
                  <Grid container style={{ marginTop: "1rem" }}>
                    <PageTitle>{thankTitle}</PageTitle>
                  </Grid>
                  <Grid
                    container
                    style={{
                      marginTop: "1rem",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {thankMessage}
                  </Grid>
                </PreviewContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormStyle>
  );
}

export default NewForm;
