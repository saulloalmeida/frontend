import { Stack } from "@mui/material";
import CardProfissao from "./Profissao/CardProfissao";
import CardProfissional from "./Profissional/CardProfissional";

export default function Home() {
  return (
    <Stack direction={"row"} spacing={2}>
      <CardProfissional />
      <CardProfissao />
    </Stack>
  );
}
