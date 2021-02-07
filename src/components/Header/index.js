import React, {useContext}  from 'react';
import { TransactionContext } from '../../context/GlobalContext';
import {Wrapper, Nav, NavLink, Logo} from './styles'

const Header = () => {
    const {openTeacher, openStudent, openTeacherModel} = useContext(TransactionContext)
    console.log(openTeacherModel)
    return (
        <header>
            <Wrapper>
                <Logo>Logo</Logo>
                <Nav>
                    <NavLink onClick={openTeacher}>Add Teacher</NavLink>
                    <NavLink onClick={openStudent}>Add Student</NavLink>
                </Nav>
            </Wrapper>
        </header>
    )
}

export default Header;