import styled from 'styled-components';

function NotFoundPage() {
  return (
    <NotFoundPageWrapper>
      <h1>404! Page not found. </h1>
    </NotFoundPageWrapper>
  );
}

const NotFoundPageWrapper = styled.section`
  min-height: 80vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  color: #fff;
`;

export default NotFoundPage;
