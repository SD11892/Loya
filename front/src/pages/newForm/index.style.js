import styled from "styled-components";

export const FormStyle = styled.div`
  overflow-x: visible;
  overflow: hidden;
  height: 100vh;
  --background: rgb(250, 250, 250);
    --primary: rgb(103, 1, 230);
    --on-primary: rgb(255, 255, 255);
    --on-primary-polar: rgb(0, 0, 0);
    --text: rgb(55, 65, 81);
    --heading: rgb(0, 0, 0);
    --secondary: rgb(240, 240, 240);
}
  *,
  :before,
  :after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
  }
  *,
  :before,
  :after {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x: ;
    --tw-pan-y: ;
    --tw-pinch-zoom: ;
    --tw-scroll-snap-strictness: proximity;
    --tw-ordinal: ;
    --tw-slashed-zero: ;
    --tw-numeric-figure: ;
    --tw-numeric-spacing: ;
    --tw-numeric-fraction: ;
    --tw-ring-inset: ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgb(59 130 246 / 0.5);
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 0 #0000;
    --tw-blur: ;
    --tw-brightness: ;
    --tw-contrast: ;
    --tw-grayscale: ;
    --tw-hue-rotate: ;
    --tw-invert: ;
    --tw-saturate: ;
    --tw-sepia: ;
    --tw-drop-shadow: ;
    --tw-backdrop-blur: ;
    --tw-backdrop-brightness: ;
    --tw-backdrop-contrast: ;
    --tw-backdrop-grayscale: ;
    --tw-backdrop-hue-rotate: ;
    --tw-backdrop-invert: ;
    --tw-backdrop-opacity: ;
    --tw-backdrop-saturate: ;
    --tw-backdrop-sepia: ;
  }
  .overflow-x-visible {
    overflow-x: visible;
  }
  .h-628px {
    height: 628px;
  }
  .border-b {
    border-bottom-width: 1px;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .h-screen {
    height: 100vh;
  }
  .h-full {
    height: 100%;
  }
  .flex {
    display: flex;
  }
  .w-10 {
    width: 2.5rem;
}
.h-10 {
    height: 2.5rem;
}
  .text-green-600 {
    --tw-text-opacity: 1;
    color: rgb(22 163 74 / var(--tw-text-opacity));
}
  @media (min-width: 1024px) {
    .lg-w-40 {
      width: 40%;
    }
  }
  :before, :after {
    --tw-content: "";
}
  @media (min-width: 768px) {
    .md-w-50 {
      width: 50%;
    }
  }
  .ring-gray-800 {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
  }
  .ring-4 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
      var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
      calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 #0000);
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
      0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  .bg-gray-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity));
  }
  .rounded-md {
    border-radius: 0.375rem;
  }
  .py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .shadow-sm {
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  .text-gray-600 {
    --tw-text-opacity: 1;
    color: rgb(75 85 99 / var(--tw-text-opacity));
  }
  .bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  .border {
    border-width: 1px;
  }
  .rounded-full {
    border-radius: 9999px;
  }
  .justify-center {
    justify-content: center;
  }
  .items-center {
    align-items: center;
  }
  .flex-none {
    flex: none;
  }
  .w-8 {
    width: 2rem;
  }
  .h-8 {
    height: 2rem;
  }
  .flex-col {
    flex-direction: column;
  }
  .justify-between {
    justify-content: space-between;
  }
  .text-gray-500 {
    --tw-text-opacity: 1;
    color: rgb(107 114 128 / var(--tw-text-opacity));
  }
  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .pb-6 {
    /* padding-bottom: 1.5rem; */
  }

  .mt-4 {
    margin-top: 1rem;
  }
  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .rounded-md {
    border-radius: 0.375rem;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  .pr-2 {
    padding-right: 0.5rem;
  }
  .relative {
    position: relative;
  }
  .mt-5 {
    margin-top: 1.25rem;
}
  .title {
    font-family: Plus Jakarta Sans, ui-sans-serif, -apple-system,
      BlinkMacSystemFont, Segoe UI, Helvetica, "Apple Color Emoji", Arial,
      sans-serif, "Segoe UI Emoji", Segoe UI Symbol;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
  }
  .duration-100 {
    transition-duration: 0.1s;
  }
  .outline-transparent {
    outline-color: transparent;
  }
  .outline-1 {
    outline-width: 1px;
  }
  .outline-dashed {
    outline-style: dashed;
  }
  .p-0\.5 {
    padding: 0.125rem;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .inline-block {
    display: inline-block;
  }
  .mt-4 {
    margin-top: 1rem;
  }
  .text-gray-300 {
    --tw-text-opacity: 1;
    color: rgb(209 213 219 / var(--tw-text-opacity));
  }
  .-right-5 {
    right: -1.25rem;
  }
  .bottom-\[6\.6px\] {
    bottom: 6.6px;
  }
  .absolute {
    position: absolute;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .flex-grow,
  .grow {
    flex-grow: 1;
  }
  .overflow-x-visible {
    overflow-x: visible;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .p-4 {
    padding: 1rem;
  }
  .bg-gray-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .gap-2 {
    gap: 0.5rem;
  }
  .pb-6 {
    padding-bottom: 1.5rem;
  }
  .border-b {
    border-bottom-width: 1px;
  }
  button,
  [role="button"] {
    cursor: pointer;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }
  .duration-200 {
    transition-duration: 0.2s;
  }
  .text-gray-600 {
    --tw-text-opacity: 1;
    color: rgb(75 85 99 / var(--tw-text-opacity));
  }
  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }
  .duration-200 {
    transition-duration: 0.2s;
  }
  .opacity-0 {
    opacity: 0;
  }
  .to-white\/0 {
    --tw-gradient-to: rgb(255 255 255 / 0);
  }
  .via-white\/40 {
    --tw-gradient-to: rgb(255 255 255 / 0);
    --tw-gradient-stops: var(--tw-gradient-from), rgb(255 255 255 / 0.4),
      var(--tw-gradient-to);
  }
  .from-white {
    --tw-gradient-from: #fff;
    --tw-gradient-to: rgb(255 255 255 / 0);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  }
  .bg-gradient-to-b {
    background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
  }
  .h-8 {
    height: 2rem;
  }
  .top-0 {
    top: 0px;
  }
  .left-0 {
    left: 0px;
  }
  .right-0 {
    right: 0px;
  }
  .absolute {
    position: absolute;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .left-0 {
    left: 0px;
  }
  .right-0 {
    right: 0px;
  }
  .absolute {
    position: absolute;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .duration-200 {
    transition-duration: 0.2s;
  }
  .duration-100 {
    transition-duration: 0.1s;
  }
  .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  .font-medium {
    font-weight: 500;
  }
  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .bg-black {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity));
  }
  .rounded-lg {
    border-radius: 0.5rem;
  }
  .appearance-none {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .w-full {
    width: 100%;
  }
  .block {
    display: block;
  }
  button,
  [role="button"] {
    cursor: pointer;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }
  .opacity-0 {
    opacity: 0;
  }
  @media (min-width: 1024px) {
    .lg-w-60 {
      width: 60%;
    }
  }
  .ring-gray-800 {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
}
.ring-4 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000);
}
.shadow-xl {
    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);
}
.bg-gray-50 {
    --tw-bg-opacity: 1;
    background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}
.rounded-md {
    border-radius: 0.375rem;
}
  @media (min-width: 768px) {
    .md-block {
      display: block;
    }
  }
  .bg-gray-200 {
    --tw-bg-opacity: 1;
    background-color: rgb(229 231 235 / var(--tw-bg-opacity));
  }
  .border-gray-300 {
    --tw-border-opacity: 1;
    border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
.focus\:ring-primary:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(103 1 230 / var(--tw-ring-opacity));
}
.focus\:border-primary:focus {
    --tw-border-opacity: 1;
    border-color: rgb(103 1 230 / var(--tw-border-opacity));
}
.text-sm {
    font-size: .875rem;
    line-height: 1.25rem;
}
  .w-50 {
    width: 50%;
  }
  .cls-1 {
    fill: #6701e6;
  }
  .cls-2 {
    fill: #8b41f2;
  }
  .h-screen {
    height: 100vh;
  }
  .hidden {
    display: none;
  }
  .pt-8 {
    padding-top: 2rem;
  }
  .pb-12 {
    padding-bottom: 3rem;
  }
  .p-8 {
    padding: 2rem;
  }
  .overflow-y-scroll {
    overflow-y: scroll;
  }
  .ring-gray-800 {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
  }
  .ring-4 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
      var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
      calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow, 0 0 #0000);
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
      0 8px 10px -6px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  .p-1 {
    padding: 0.25rem;
  }
  .bg-gray-300 {
    --tw-bg-opacity: 1;
    background-color: rgb(209 213 219 / var(--tw-bg-opacity));
  }
  .rounded-lg {
    border-radius: 0.5rem;
  }
  .screen-toggle.selected.svelte-1jkyjij {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  .screen-toggle.svelte-1jkyjij {
    border-radius: 0.375rem;
    padding: 0.25rem 0.5rem;
    transition-duration: 0.15s;
  }
  ._toastContainer.svelte-1u812xz {
    top: var(--toastContainerTop, 1.5rem);
    right: var(--toastContainerRight, 2rem);
    bottom: var(--toastContainerBottom, auto);
    left: var(--toastContainerLeft, auto);
    position: fixed;
    margin: 0;
    padding: 0;
    list-style-type: none;
    pointer-events: none;
    z-index: var(--toastContainerZIndex, 9999);
  }
  ol,
  ul,
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .opacity-0 {
    opacity: 0;
  }
  .to-white\/0 {
    --tw-gradient-to: rgb(255 255 255 / 0);
  }

  .via-white\/40 {
    --tw-gradient-to: rgb(255 255 255 / 0);
    --tw-gradient-stops: var(--tw-gradient-from), rgb(255 255 255 / 0.4),
      var(--tw-gradient-to);
  }
  .from-white {
    --tw-gradient-from: #fff;
    --tw-gradient-to: rgb(255 255 255 / 0);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  }
  .bg-gradient-to-b {
    background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
  }
  .h-8 {
    height: 2rem;
  }
  .top-0 {
    top: 0px;
  }
  .left-0 {
    left: 0px;
  }
  .right-0 {
    right: 0px;
  }
  .absolute {
    position: absolute;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .text-white {
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  .font-medium {
    font-weight: 500;
  }
  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .py-2-5 {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .bg-black {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity));
  }
  .rounded-lg {
    border-radius: 0.5rem;
  }
  .appearance-none {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .w-full {
    width: 100%;
  }
  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .gap-4 {
    gap: 1rem;
  }
  .items-center {
    align-items: center;
  }
  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }
  .text-primary {
    --tw-text-opacity: 1;
    color: rgb(103 1 230 / var(--tw-text-opacity));
  }
  .text-fuchsia-600 {
    --tw-text-opacity: 1;
    color: rgb(192 38 211 / var(--tw-text-opacity));
  }
  .rotate-45 {
    --tw-rotate: 45deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  .text-red-500 {
    --tw-text-opacity: 1;
    color: rgb(239 68 68 / var(--tw-text-opacity));
  }
  .text-red-500 {
    --tw-text-opacity: 1;
    color: rgb(239 68 68 / var(--tw-text-opacity));
  }
  .text-pink-600 {
    --tw-text-opacity: 1;
    color: rgb(219 39 119 / var(--tw-text-opacity));
  }
  .text-amber-500 {
    --tw-text-opacity: 1;
    color: rgb(245 158 11 / var(--tw-text-opacity));
  }
  .text-blue-500 {
    --tw-text-opacity: 1;
    color: rgb(59 130 246 / var(--tw-text-opacity));
  }
.ring-4 {
    border:0.2rem solid black;
}
.h-40{
  height:10rem;
}
.screen-toggle.svelte-1jkyjij {
    border-radius: 0.375rem;
    padding: 0.25rem 0.5rem;
    transition-duration: .15s;
    background: transparent;
}
.screen-toggle.selected.svelte-1jkyjij {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  background: #fff;
}
.screen-toggle.svelte-1jkyjij {
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  transition-duration: .15s;
}
`;
