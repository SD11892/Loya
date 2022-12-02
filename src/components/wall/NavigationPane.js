import * as React from 'react';
import { Logo } from '../../icons/wall/logo';
import { WallOfLoveStyle } from '../../components/uielements/wallOfLove';

export const NavigationPane = () => {
  return (
    // <div>
    //   <div
    //     style={{
    //       padding: "0.5rem",
    //       overflowX: "auto",
    //       overflow: "visible",
    //       display: "flex",
    //       gap: "1rem",
    //     }}
    //   >
    //     Logo
    //   </div>
    //   <div
    //     style={{
    //       padding: "0.5rem",
    //       overflowX: "auto",
    //       overflow: "visible",
    //       display: "flex",
    //       gap: "1rem",
    //       width: "inherit",
    //       textAlign: "center",
    //     }}
    //   >
    //     <Logo />
    //   </div>
    // </div>
    <WallOfLoveStyle>
      <div className="py-4">
        <section className="flex flex-col gap-4">
          <div>
            <div className="block text-sm font-medium">
              <div className="flex items-center gap-2">
                <div></div>
              </div>
              Logo
            </div>
            <button className="mt-2 w-full text-left duration-100 hover:opacity-80">
              <div className="flex h-24 flex-col items-center justify-center rounded-lg border bg-gray-100 px-4 py-4">
                <svg
                  width="48px"
                  height="48px"
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 257.84 222.51"
                >
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        className="cls-1"
                        d="M239.53,111.88,128.9,222.51,93.62,187.23h0L35.36,129l0,0L18.3,111.83a62.5,62.5,0,0,1,0-88.38l5.17-5.15a62.51,62.51,0,0,1,88.38,0l17.09,17.09,17.06-17a62.42,62.42,0,0,1,88.36,0l5.17,5.16A62.49,62.49,0,0,1,239.53,111.88Z"
                      ></path>
                      <path
                        className="cls-2"
                        d="M204.24,76.59,93.65,187.18l0,0h0L35.36,129l0,0L18.3,111.83a62.5,62.5,0,0,1,0-88.38l5.17-5.15a62.51,62.51,0,0,1,88.38,0l17.09,17.09,17.06-17A62.47,62.47,0,0,1,216.66,5.91,62.5,62.5,0,0,1,204.24,76.59Z"
                      ></path>
                      <path
                        className="cls-1"
                        d="M128.94,35.39c-17.51,22-37.38,36.89-57.62,39.78a37.72,37.72,0,1,1-8-74.89C65.11.12,66.87,0,68.61,0A62.22,62.22,0,0,1,111.85,18.3Z"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="block text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div></div>
                </div>
                Header Links
              </div>
              <button className="rounded-md bg-gray-100 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-primary"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
            <div
              className="flex flex-col gap-2"
              aria-disabled="false"
              role="list"
              aria-describedby="dnd-zone-active"
              tabindex="0"
            ></div>
          </div>
        </section>
      </div>
    </WallOfLoveStyle>
  );
};
