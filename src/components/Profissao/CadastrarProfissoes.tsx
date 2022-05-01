import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

type Inputs = {
  descricao: string;
};
const schema = yup
  .object({
    descricao: yup
      .string()
      .required("Preenchimento obrigatório")
      .min(3, "Mínimo de 3 caracteres"),
  })
  .required();
export default function CadastrarProfissoes() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  function handleClick(data: Inputs) {
    axios
      .post("profissao", {
        descricao: data.descricao,
      })
      .then(() => {
        navigate("/profissoes");
      });
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
        <Typography color={"red"}>{errors.descricao?.message}</Typography>
        <Button variant="contained" type="submit">
          Cadastrar
        </Button>
      </Stack>
    </form>
  );
}
