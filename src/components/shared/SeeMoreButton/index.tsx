import { Button } from "@mui/material";

import { SeeMoreContainer } from "./styles";

interface Props {
  text: string
  onClick: () => void
}

export function SeeMoreButton({ text, onClick }: Props) {
  return (
    <SeeMoreContainer>
      <Button onClick={onClick}>
        <p>{text}</p>
      </Button>
    </SeeMoreContainer>
  )
}
