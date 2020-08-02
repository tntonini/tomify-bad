/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Content = ({ children }) => (
  <div
    className="Content"
    css={css`
      width: calc(100% - 200px);
      padding: 20px;
      background: #121212;
    `}
  >
    {children}
  </div>
)

export default Content
