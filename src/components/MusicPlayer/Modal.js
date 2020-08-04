/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Modal = ({ children }) => (
  <div className="Modal" css={CSS}>
    <div className="modal-content">
      <i className="fa fa-times" />
      {children}
    </div>
  </div>
)

const CSS = css`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  right: 0;

  .modal-content {
    position: relative;
    height: auto;
    width: 400px;
    background: #211f27;
    position: absolute;
    top: calc(40% - 100px);
    left: calc(50% - 200px);
    border-radius: 4px;
    padding: 25px;
    display: flex;
    flex-direction: column;
  }

  i {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }
`

export default Modal
