import { AiOutlineHome } from "react-icons/ai";
import Logo from "../ui/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { updateSubjectId } from "../redux/userSlice";

function TeacherSideBar({ teacherDetails }) {
  const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;+

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;
  const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `;
  const StyledSideBar = styled.aside`
    background-color: var(--color-grey-0);
    /* background-color: green; */
    padding: 3.2rem 2.4rem;
    border-right: 1px solid var(--color-grey-100);
    grid-row: 1/-1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  `;
  const {
    teachingSubject: { id, subjectName },
  } = teacherDetails;
  const dispatch = useDispatch();
  const handleClick = () => {
    console.log("THIS SUBJECT WAS CLICKED", id);
    dispatch(updateSubjectId(id));
  };

  return (
    <StyledSideBar>
      <Logo />
      <div></div>
      <nav>
        <NavList>
          {/* <li>
            <StyledNavLink exact to={`/student`}>
              <AiOutlineHome />
              <span>HOME</span>
            </StyledNavLink>
          </li> */}
          <li>
            <div onClick={handleClick}>
              <StyledNavLink to={`/teacher/${subjectName}`}>
                <AiOutlineHome />
                <span>{subjectName}</span>
              </StyledNavLink>
            </div>
          </li>
        </NavList>
      </nav>
    </StyledSideBar>
  );
}

export default TeacherSideBar;
