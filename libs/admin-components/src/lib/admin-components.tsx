import styled from "styled-components";

/* eslint-disable-next-line */
export interface AdminComponentsProps {}

const StyledAdminComponents = styled.div`
  color: pink;
`;

export function AdminComponents(props: AdminComponentsProps) {
  return (
    <StyledAdminComponents>
      <h1>Welcome to AdminComponents!</h1>
    </StyledAdminComponents>
  );
}

export default AdminComponents;
