import React, { Component } from 'react';
import styled from "styled-components";
import ReactTransitionGroup from 'react-addons-css-transition-group';

class LoginModal extends Component {
    render() {
        const { isOpen, isClose } = this.props;
        return (
            <>
                {
                    isOpen ?
                        <ReactTransitionGroup
                            transitionName={'Modal-anim'}
                            transitionEnterTimeout={200}
                            transitionLeaveTimeout={200}
                        >
                            <Overlay onClick={isClose} />
                            <Modal>
                                <p className="title">Title</p>
                                <div className="content">
                                    <p>
                                        Text
                                    </p>
                                    <p>
                                        Comment<br />
                                        <input />
                                    </p>
                                </div>
                                <div className="button-wrap">
                                    <button onClick={isClose}>Confirm</button>
                                </div>
                            </Modal>
                        </ReactTransitionGroup>
                        :
                        <ReactTransitionGroup transitionName={'Modal-anim'} transitionEnterTimeout={200} transitionLeaveTimeout={200} />
                }
            </>
        )
    }
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.16);
  &.Modal-anim-enter {
    opacity: 0.00;
    transition: all 0.2s;
  }
  &.Modal-anim-leave {
    opacity: 1;
    transition: all 0.2s;
  }
  &.Modal-anim-leave.Modal-anim-leave-active {
    opacity: 0.00;
  }    
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
    &.Modal-anim-enter {
      opacity: 0.00;
      transform: translate(-50%, -50%) scale(0.7);
      transition: all 0.2s;
    }
    &.Modal-anim-enter.Modal-anim-enter-active {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    &.Modal-anim-leave {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
      transition: all 0.2s;
    }
    &.Modal-anim-leave.Modal-anim-leave-active {
      opacity: 0.00;
      transform: translate(-50%, -50%) scale(0.7);
    }
    & > * {
      &.first-child {
        margin-top: 16px;
      }
      margin-left: 16px;
      margin-right: 16px;
    }
    p.title {
      font-size: 16pt;
      font-weight: bold;
      color: #333;
    }
    .content {
      border-top: 1px solid #bebebe;
      margin-top: 16px;
      p {
        padding: 8px;
        font-size: 12pt;
        color: #999;
      }
    }
    .button-wrap {
      margin: 0;
      margin-top: 8px;
      button {
        width: 100%;
        padding: 12px 0;
        border-radius: 0 0 10px 10px;
        background-color: #455dff;
        font-size: 13pt;
        color: white;
        border: 0;
        cursor: pointer;
        &:hover {
          background-color: #7f49c8;
        }
        &:active {
          background-color: #7e49c8;
        }
      }
    }
`;

export default LoginModal;