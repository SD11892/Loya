import styled from 'styled-components';

export const WallOfLoveStyle = styled.div`
  --primary: #6701e6;
  --on-primary: #ffffff;
  --on-primary-polar: #000000;
  --clr-background: #fff;
  --clr-primary: #6701e6;
  --clr-text: #374151;
  --padding: 16px;
  --clr-text-lt: hsla(217, 19%, 37%, 1);
  --clr-rating: #fbbf24;
  --border-width: 1px;
  --clr-border: rgb(229, 231, 235);
  --border-radius: 0.75rem;
  --box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --width: 20px;
  --height: 20px;
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

  .sj-card {
    background-color: var(--clr-background);
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    .sj-content {
      font-size: 1rem;
      color: var(--clr-text);
      line-height: 1.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      white-space: pre-line !important;
      letter-spacing: -0.025em;
    }
    .sj-text-card {
      padding: var(--padding);
      border-width: var(--border-width);
      box-shadow: var(--box-shadow);
      border-color: var(--clr-border);
      border-radius: var(--border-radius);
    }
    .sj-card-content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .sj-card-details {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
  .sj-masonry {
    overflow: unset !important;
  }
  .sj-endorser-view-container {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1rem;
  }
  .sj-avatar-container {
    position: relative;
    flex-shrink: 0;
    &.svelte-173satm {
      &.svelte-173satm {
        border-radius: 9999px;
        background-color: #0000000d;
      }
      & img.svelte-173satm {
        border-radius: 9999px;
        -o-object-fit: cover;
        object-fit: cover;
      }
    }
  }
  .sj-endorser-name {
    color: var(--clr-text);
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
  }
  .sj-desc {
    color: var(--clr-text-lt);
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .sj-spacer {
    flex-grow: 1;
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

  textarea {
    resize: vertical;
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
  [type='text'],
  [type='email'],
  [type='url'],
  [type='password'],
  [type='number'],
  [type='date'],
  [type='datetime-local'],
  [type='month'],
  [type='search'],
  [type='tel'],
  [type='time'],
  [type='week'],
  [multiple],
  textarea,
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    border-color: #6b7280;
    border-width: 1px;
    border-radius: 0;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    --tw-shadow: 0 0 #0000;
  }
  ol,
  ul,
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  div.svelte-1o7ejtn {
    display: flex;
  }
  svg.svelte-195uyxn {
    width: var(--width);
    height: var(--height);
    margin-right: 2px;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  img,
  video {
    max-width: 100%;
    height: auto;
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
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Plus Jakarta Sans, ui-sans-serif, system-ui, -apple-system,
      'system-ui', Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
      'Noto Color Emoji';
    font-weight: 500;
  }
  button,
  [role='button'] {
    cursor: pointer;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
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

  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .block {
    display: block;
  }

  .bg-zinc-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(244 244 245 / var(--tw-bg-opacity));
  }
  .min-h-screen {
    min-height: 100vh;
  }

  .relative {
    position: relative;
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
      0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  .bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  .bg-gray-100 {
    --tw-bg-opacity: 1;
    background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  }

  .items-center {
    align-items: center;
  }
  .items-stretch {
    align-items: stretch;
  }

  .flex {
    display: flex;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-grow {
    flex-grow: 1;
  }

  .font-bold {
    font-weight: 700;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-heading {
    font-family: Plus Jakarta Sans, ui-sans-serif, system-ui, -apple-system,
      'system-ui', Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
      'Noto Color Emoji';
  }
  .font-medium {
    font-weight: 500;
  }

  .tracking-tight {
    letter-spacing: -0.025em;
  }
  .leading-normal {
    line-height: 1.5;
  }

  .border {
    border-width: 1px;
  }
  .border-gray-300 {
    --tw-border-opacity: 1;
    border-color: rgb(209 213 219 / var(--tw-border-opacity));
  }
  .text-gray-700 {
    --tw-text-opacity: 1;
    color: rgb(55 65 81 / var(--tw-text-opacity));
  }
  .text-gray-900 {
    --tw-text-opacity: 1;
    color: rgb(17 24 39 / var(--tw-text-opacity));
  }
  .text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-primary {
    --tw-text-opacity: 1;
    color: rgb(103 1 230 / var(--tw-text-opacity));
  }
  .text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .max-w-xl {
    max-width: 36rem;
  }
  .max-w-5xl {
    max-width: 64rem;
  }

  .w-full {
    width: 100%;
  }
  .h-full {
    height: 100%;
  }
  .rounded-full {
    border-radius: 9999px;
  }
  .rounded-lg {
    border-radius: 0.5rem;
  }
  .rounded-md {
    border-radius: 0.375rem;
  }

  .h-14 {
    height: 3.5rem;
  }
  .h-24 {
    height: 6rem;
  }

  .gap-2 {
    gap: 0.5rem;
  }
  .gap-4 {
    gap: 1rem;
  }
  .gap-8 {
    gap: 2rem;
  }

  .justify-center {
    justify-content: center;
  }
  .justify-between {
    justify-content: space-between;
  }

  .p-1 {
    padding: 0.25rem;
  }
  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .py-2-5 {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }
  .py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .py-24 {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  .pt-24 {
    padding-top: 6rem;
  }
  .pb-12 {
    padding-bottom: 3rem;
  }
  .my-1 {
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mt-auto {
    margin-top: auto;
  }
  .mt-2 {
    margin-top: 0.5rem;
  }
  .mt-6 {
    margin-top: 1.5rem;
  }
  .-mt-8 {
    margin-top: -2rem;
  }

  .cls-1 {
    fill: #6701e6;
  }
  .cls-2 {
    fill: #8b41f2;
  }

  .duration-100 {
    transition-duration: 0.1s;
  }

  .z-50 {
    z-index: 50;
  }
  .bottom-0 {
    bottom: 0px;
  }
  .inset-x-0 {
    left: 0px;
    right: 0px;
  }
  .fixed {
    position: fixed;
  }

  .focus-ring-primary:focus {
    --tw-ring-opacity: 1;
    --tw-ring-color: rgb(103 1 230 / var(--tw-ring-opacity)) !important;
  }
  .focus-border-primary:focus {
    --tw-border-opacity: 1;
    border-color: rgb(103 1 230 / var(--tw-border-opacity)) !important;
  }

  [type='text']:focus,
  [type='email']:focus,
  [type='url']:focus,
  [type='password']:focus,
  [type='number']:focus,
  [type='date']:focus,
  [type='datetime-local']:focus,
  [type='month']:focus,
  [type='search']:focus,
  [type='tel']:focus,
  [type='time']:focus,
  [type='week']:focus,
  [multiple]:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    --tw-ring-inset: var(--tw-empty);
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: #2563eb;
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0
      var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0
      calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow),
      var(--tw-shadow);
    border-color: #2563eb;
  }
  [type='text'],
  [type='email'],
  [type='url'],
  [type='password'],
  [type='number'],
  [type='date'],
  [type='datetime-local'],
  [type='month'],
  [type='search'],
  [type='tel'],
  [type='time'],
  [type='week'],
  [multiple],
  textarea,
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    border-color: #6b7280;
    border-width: 1px;
    border-radius: 0;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    --tw-shadow: 0 0 #0000;
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
  .shadow-sm {
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  .appearance-none {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  @media (min-width: 640px) {
    .sm-flex {
      display: flex;
    }
  }
  @media (min-width: 640px) {
    .sm-right-4 {
      right: 1rem !important;
    }
  }
  @media (min-width: 640px) {
    .sm-bottom-4 {
      bottom: 1rem;
    }
  }
  @media (min-width: 640px) {
    .sm-inset-x-auto {
      left: auto;
      right: auto;
    }
  }
  @media (min-width: 640px) {
    .sm-shadow-md {
      --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
      --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
        0 2px 4px -2px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
  }

  @media (min-width: 640px) {
    .sm-rounded-md {
      border-radius: 0.375rem;
    }
  }
`;
