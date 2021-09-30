import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const DragDropContainer = ({
  items,
  setItems,
  droppableId,
  children,
  direction,
}) => {
  const handleOnDragEnd = (result) => {
  if (!result.destination) return;
  const _items = [...items];
  const [reorderedItem] = _items.splice(result.source.index, 1);
  _items.splice(result.destination.index, 0, reorderedItem);
  setItems([..._items]);
  };

  return typeof window !== "undefined" && (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable
        droppableId={droppableId}
        direction={direction ? direction : "vertical"}
      >
        {(provided) => (
          <div
            className={droppableId}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div>
              {children}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
};

export default DragDropContainer
