import { theme } from "@/assets/styles/theme";
import styled from "styled-components";

export const Loading = styled.div`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;

  .hide {
    display: none;
  }

  .spinner {
    position: relative;
    width: 40px;
    height: 40px;
  }

  .double-bounce1,
  .double-bounce2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.mainColor};
    border-radius: 50%;
    opacity: 0.6;
    animation: sk-bounce 2s infinite ease-in-out;
  }

  .double-bounce2 {
    animation-delay: -1s;
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
    }

    50% {
      transform: scale(1);
    }
  }
`;
