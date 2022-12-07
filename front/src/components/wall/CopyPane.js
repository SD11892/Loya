import * as React from 'react';
import { WallOfLoveStyle } from '../../components/uielements/wallOfLove';

export const CopyPane = () => {
  return (
    <WallOfLoveStyle>
      <div className="py-4">
        <section className="flex flex-col gap-4">
          <div className="w-full">
            <div className="block text-sm font-medium">
              <div className="flex items-center gap-2">
                Page Title <div></div>
              </div>
            </div>
            <div className="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
              <input
                name=""
                id=""
                type="text"
                spellcheck="false"
                placeholder=""
                className=" block flex-grow rounded-r-md border disabled:opacity-60 py-2.5 px-2 text-sm focus-ring-primary focus-border-primary border-gray-300 rounded-md"
                value={'Our Wall of Love'}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="block text-sm font-medium">
              <div className="flex items-center gap-2">
                Subtitle <div></div>
              </div>
            </div>
            <textarea
              name=""
              placeholder=""
              className=" focus-ring-primary focus-border-primary mt-2 block w-full appearance-none rounded-md border-gray-300 py-2.5 text-sm shadow-sm"
            ></textarea>
          </div>
        </section>
      </div>
    </WallOfLoveStyle>
  );
};
