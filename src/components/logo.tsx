import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Logo = styled(Link)`
 text-decoration: none;
    font-weight: 300;
    font-size: 2.2rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: white;
    svg{
    position: absolute;
    width: 25px;
    transform: rotate(67deg);
    left: 164px;
    top: 31px;
    }
    strong{
        color:#37df9e;
    }
`

function logo() {
  return (
    <Logo to='/'>
        M.EL <strong>Yaakoubi</strong>
        <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100" height="70" viewBox="0 0 100 70">
  <image x="1" width="99" height="70" xlinkHref="data:img/png;base64,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"/>
</svg>

    </Logo>
  )
}

export default logo