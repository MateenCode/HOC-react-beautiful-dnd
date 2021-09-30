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
  StyledButton,
  DropDownText
} from './CollapseRow.styles';
// Icons
import Up from '../../images/up.svg';
import Down from '../../images/down.svg';
import Plus from '../../images/plus.svg';
import { Draggable } from 'react-beautiful-dnd';
import { DragDropCollapseRow, DragDropContainer } from '@components';

const detailList = [
  { id: 1, name: 'George Clooney' },
  { id: 2, name: 'Steve Carell' },
  { id: 3, name: 'Barbra Streisand' },
  { id: 4, name: 'James Patterson' },
  { id: 5, name: 'Ben Stiller' },
  { id: 6, name: 'Jeff Gordon' }
];

const CollapseRow = ({ name }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(detailList);

  return (
    <Container>
      <Main onClick={() => setOpen(!open)}>
        <Text>{name}</Text>
        <Box p='20px 0px'>
          {open ? <Image src={Up} alt='Up' /> : <Image src={Down} alt='down' />}
        </Box>
      </Main>
      {name === 'Quotes' ? (
        <Collapse in={open} timeout={500}>
          <DropDown>
            <Box
              display='flex'
              justifyContent='space-between'
              alignContent='center'
              p='8px 0'
            >
              <DropDownText>{name.toUpperCase()}</DropDownText>
              <StyledButton variant='text'>
                ADD QUOTE{' '}
                <Box pl='20px'>
                  <Image src={Plus} alt='plus' />
                </Box>
              </StyledButton>
            </Box>
            <DragDropContainer
              items={items}
              setItems={setItems}
              droppableId='quotes'
            >
              {items.map((item, idx) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={idx}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <DragDropCollapseRow key={item.id} name={item.name} />
                    </div>
                  )}
                </Draggable>
              ))}
            </DragDropContainer>
          </DropDown>
        </Collapse>
      ) : (
        <Collapse in={open}>
          <DropDown>
            Example Field for <b>{name}</b>
          </DropDown>
        </Collapse>
      )}
    </Container>
  );
};

export default CollapseRow;
