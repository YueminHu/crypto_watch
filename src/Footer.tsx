import styled from "styled-components";

// const;

const Wrapper = styled.p`
  position: fixed;
  bottom: 0;
  margin: 0px auto;
  font-size: 0.8em;
  padding: 8px;
  width: 100%;
  background-color: var(--background-color);
  /* border-top: 1px solid var(--border-color); */
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  transition: all 0.3s ease-in-out, transform 0.3s linear 3s;

  backdrop-filter: blur(6px);
  a {
    color: var(--text-color);
    color: inherit;
  }

  &.Connecting {
    background-color: yellow;
    color: #000;
  }
  &.Connected {
    background-color: rgba(0, 255, 0, 0.33);
    transform: translateY(calc(100% - 4px));
  }
  &.Disconnected {
    background-color: var(--down-color);
  }
  > *:first-child {
    justify-self: start;
  }
  > *:last-child {
    justify-self: end;
  }
`;

const Footer = ({
  wsStatus,
  lastRefetch,
  reconnect,
}: // reconnect,
{
  wsStatus: number;
  lastRefetch: Date;
  reconnect: any;
}) => {
  const status = wsStatus;
  //   console.log(status);
  const statusString =
    status === 0 || status === undefined
      ? "Connecting"
      : status === 1
      ? "Connected"
      : status === 3
      ? "Disconnected"
      : undefined;
  return (
    <Wrapper className={statusString}>
      <span>
        <i>
          {((+new Date() - Number(lastRefetch)) / 1000).toFixed(0) +
            " Seconds ago"}
        </i>
      </span>
      <span>
        <i>{statusString}</i>
        {status === 3 && <button onClick={reconnect}>Reconnect</button>}
      </span>
    </Wrapper>
  );
};

export default Footer;
