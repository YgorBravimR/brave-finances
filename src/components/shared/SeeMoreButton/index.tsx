import { Button } from "@mui/material";
import { SeeMoreContainer } from "./styles";

interface Props {
  text: string
}

export function SeeMoreButton({ text }: Props) {
  return (
    <SeeMoreContainer>
      <Button>
        <p>{text}</p>
      </Button>
    </SeeMoreContainer>
  )
}