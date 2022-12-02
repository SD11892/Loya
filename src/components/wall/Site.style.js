import styled from 'styled-components';

export const SiteStyle = styled.div`
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

  .overflow-x-hidden {
    overflow-x: hidden;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  .mt-auto {
    margin-top: auto;
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
  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
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
  .text-center {
    text-align: center;
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

  .h-14 {
    height: 3.5rem;
  }

  .gap-2 {
    gap: 0.5rem;
  }
  .gap-8 {
    gap: 2rem;
  }

  .justify-center {
    justify-content: center;
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
  .py-24 {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  .py-2-5 {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
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
