import React, {ReactNode} from 'react'
import  Container  from 'react-bootstrap/Container'
import Navigation from '../Navigation'

interface ShellProps  {
    children: ReactNode
}

const Shell = ({ children }:ShellProps)=>(
    <Container>
    <Navigation/>
        {children}
    </Container>
)

export default Shell
