import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { deleteToDo, toDoCompleted, reOrderItems } from '../actions';

const ListContainer = styled.div`
    background: white;
    margin-top: 24px;
    text-align: center;
    font-weight: 600;
    padding: 12px;
    border-radius: 4px;
    box-shadow: 10px 9px 41px 16px rgba(0,0,0,0.42);
`;

const ToDoUl = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const ToDoLi = styled.li`
    border: 1px solid grey;
    border-radius: 4px;
    margin-bottom: 12px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    background: ${props => props.completed ? 'green' : 'transparant'}
`;



const ListNumber = styled.div`
  font-weight: 600;
`;

const ListItem = styled.div`
    padding: 0 12px;
    font-weight: 500;
    text-decoration: ${props => props.completed ? 'line-through' : 'none'}
`;


const ListButtons = styled.div`
  flex-direction: column;
  display: flex;
   button {
       width: 70px;
`;




class List extends React.Component {

    state = {
        toDos:{},
    };



    onDragEnd = result => {
        if (!result.destination) {
            return;
        }

       const reorder = (list, startIndex, endIndex) => {
            const result = Array.from(list);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);
            this.props.reOrderItems(result);
        };

        const toDos = reorder(
            this.props.toDos,
            result.source.index,
            result.destination.index,
        );

        this.setState({
           toDos,
        });
    };

    handleClickRemove = item => {
        this.props.deleteToDo(item);
    };

    handleFinishToDo = (value, item) => {
        this.props.toDoCompleted(value, item);
    };


    render() {
        const todoEntries = this.props.toDos;
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
            <ListContainer >
                <Droppable droppableId="droppable">
                        {(provided) => (
                            <ToDoUl ref={provided.innerRef}>
                                {todoEntries.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided) => (
                                            <ToDoLi completed={item.completed}
                                                    key={index}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}>
                                                <ListNumber>{item.id}</ListNumber>
                                                <ListItem completed={item.completed}>{item.text}</ListItem>
                                                <ListButtons>
                                                    <button onClick={() => this.handleClickRemove(item.text)}>DELETE
                                                    </button>
                                                    <button
                                                        onClick={() => this.handleFinishToDo(true, item.text)}>{item.completed ? 'UNDO' : 'DONE'} </button>
                                                </ListButtons>
                                            </ToDoLi>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </ToDoUl>
                        )}
                    </Droppable>
            </ListContainer>
            </DragDropContext>
        );
    }
}

const mapStateToProps = state => ({
    toDos: state.toDos
});

export default connect(mapStateToProps, {deleteToDo, toDoCompleted, reOrderItems})(List);


