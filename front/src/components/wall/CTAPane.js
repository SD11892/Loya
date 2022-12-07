import * as React from 'react';
import { WallOfLoveStyle } from '../uielements/wallOfLove';
import { styled } from '@mui/material/styles';
import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    marginTop: '7px',
    marginLeft: '10px',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export const CTAPane = () => {
  return (
    <WallOfLoveStyle>
      <div className="py-4">
        <section className="flex flex-col gap-4">
          <div className="flex justify-between">
            <label for="ctaEnabled" className="block text-sm font-medium">
              <div className="flex items-center gap-2">
                Enable CTA <div></div>
              </div>
            </label>
            <FormGroup>
              <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              />
            </FormGroup>
          </div>
          <hr />
          <div className="w-full">
            <label for="title" className="block text-sm font-medium">
              <div className="flex items-center gap-2">
                CTA Title <div></div>
              </div>
            </label>
            <div className="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
              <input
                name="title"
                id=""
                type="text"
                spellcheck="false"
                placeholder=""
                className=" block flex-grow rounded-r-md border disabled:opacity-60 py-2.5 px-2 text-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="w-full">
            <label for="url" className="block text-sm font-medium">
              <div className="flex items-center gap-2">
                CTA URL <div></div>
              </div>
            </label>
            <div className="flex w-full rounded-md text-sm shadow-sm duration-200 mt-2 ">
              <input
                name="url"
                id=""
                type="text"
                spellcheck="false"
                placeholder=""
                className=" block flex-grow rounded-r-md border disabled:opacity-60 py-2.5 px-2 text-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md"
              />
            </div>
          </div>
        </section>
      </div>
    </WallOfLoveStyle>
  );
};
