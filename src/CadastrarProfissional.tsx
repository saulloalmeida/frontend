import { Box, Stack } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  nome: string;
  email: string;
  situacao: true;
  tipoProfissionalId: 8;
  telefone: string;
};

export default function CadastrarProfissional() {
  const { register, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();
  function handleClick(data: Inputs) {
    const { nome, email, telefone } = data;
    axios.post("http://localhost:3333/profissional", {
      nome: nome,
      email: email,
      situacao: true,
      tipoProfissionalId: 8,
      telefone: telefone,
    });
    navigate("/profissionais");
  }
  return (
    <Box alignItems={"center"}>
      <Stack>
        <form onSubmit={handleSubmit(handleClick)}>
          <input {...register("nome")} />
          <input {...register("email")} />
          <input {...register("telefone")} />
          <input type="submit" />
        </form>
      </Stack>
    </Box>
  );
}
