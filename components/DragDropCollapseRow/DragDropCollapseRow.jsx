import React, { useState } from 'react';
import Image from 'next/image';
// MUI
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import {
  Container,
  Text,
  Main,
  DropDown,
  ImageBox
} from './DragDropCollapseRow.styles';
// Icons
import Up from '../../images/up.svg';
import Down from '../../images/down.svg';
import Drag from '../../images/drag.svg';

const DragDropCollapseRow = ({ name }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box display='flex' width='100%'>
        <ImageBox>
          <Image src={Drag} alt='Drag' />
        </ImageBox>
        <Container onClick={() => setOpen(!open)}>
          <Main>
            <Text>{name}</Text>
            <Box p='20px 0px'>
              {open ? (
                <Image src={Up} alt='Up' />
              ) : (
                <Image src={Down} alt='down' />
              )}
            </Box>
          </Main>
        </Container>
      </Box>
      <Collapse in={open}>
        <DropDown>
          Example Field for <b>{name}</b>
        </DropDown>
      </Collapse>
    </>
  );
};

export default DragDropCollapseRow;
