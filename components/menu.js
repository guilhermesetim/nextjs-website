import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

import Services from './services'
import MyGallery from './gallery'

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 30vw;
  
  border: none;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;

  &:hover {
    background-color: transparent;
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    
  }

  &.${tabUnstyledClasses.selected} {
    
    color: white;
    border-bottom: 2px solid white;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  background: url('background.jpg');
  background-size: cover;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  padding-bottom: 5px;
  background-color: transparent;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  align-content: space-between;
  
  margin: 0px 40px;
`;

export default function Menu() {

  return (
    <>
      <nav>
        <ul>
          <li><img src="logo.jpg"/></li>
          <li>Serviços</li>
          <li>Galeria</li>
          <li>Depoimentos</li>
        </ul>

      </nav>
      <style jsx>{`
      nav {
        position: fixed;
        
      }
      img {
        border-radius: 50%;
      }

      li {
        font-family: IBM Plex Sans, sans-serif;
        color: white;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: bold;
        background-color: transparent;
        width: 200px;
        border: none;
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
      }

      li:selected {
        border-bottom: 2px solid white;
      }
      

      ul {
        min-width: 320px;
        padding-bottom: 5px;
        background-color: transparent;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        align-content: space-between;
        margin: 0px 40px;
      }
      `}</style>
    </>
  );
}