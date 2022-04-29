import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  descricao: string;
};
export default function CadastrarProfissoes() {
  const { register, handleSubmit } = useForm<Inputs>();

  const navigate = useNavigate();
  function handleClick(data: Inputs) {
    axios.post("http://localhost:3333/profissao", {
      descricao: data.descricao,
    });
    navigate("/profissoes");
  }
  return (
    <form onSubmit={handleSubmit(handleClick)}>
      <Stack spacing={2} alignContent={"center"}>
        <TextField
          id="outlined-basic"
          label="Cadastrar Nome da Profissão"
          variant="outlined"
          {...register("descricao")}
          sx={{
            bgcolor: "#fff",
            width: 300,
          }}
        />
        <Button variant="contained" type="submit">
          Cadastrar
        </Button>
      </Stack>
    </form>
  );
}
