import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

type Inputs = {
  nome: string;
  email: string;
  situacao: true;
  tipoProfissionalId: number;
  telefone: string;
};
type ProfissaoTipo = {
  id: number;
  descricao: string;
  createdAt: string;
};
type ProfissoesTipo = ProfissaoTipo[];

const schema = yup.object({
  nome: yup.string().required("Preenchimento obrigatório"),
  email: yup
    .string()
    .email("Email inválido")
    .required("Preenchimento obrigatório"),
  tipoProfissionalId: yup.number().required("Preenchimento obrigatório"),
  telefone: yup.string().required("Preenchimento obrigatório"),
});

export default function CadastrarProfissional() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const [profissoes, setProfissoes] = useState<ProfissoesTipo>([]);
  const [id, setId] = useState<string>();

  function carregarProfissoes() {
    axios
      .get("http://localhost:3333/profissoes")
      .then((response) => setProfissoes(response.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    carregarProfissoes();
  }, []);

  function handleClick(data: Inputs) {
    const { nome, email, telefone } = data;
    axios
      .post("http://localhost:3333/profissional", {
        nome: nome,
        email: email,
        situacao: true,
        tipoProfissionalId: id,
        telefone: telefone,
      })
      .then(() => navigate("/profissionais"));
  }
  function change(event: SelectChangeEvent) {
    setId(event.target.value as string);
  }
  return (
    <Box alignItems={"center"}>
      <form onSubmit={handleSubmit(handleClick)}>
        <Stack spacing={2} alignContent={"center"}>
          <TextField
            label="Nome"
            variant="outlined"
            {...register("nome")}
            sx={{
              bgcolor: "#fff",
              width: 500,
            }}
          />
          <p>{errors.nome?.message}</p>

          <TextField
            label="Email"
            variant="outlined"
            {...register("email")}
            sx={{
              bgcolor: "#fff",
              width: 500,
            }}
          />
          <p>{errors.email?.message}</p>
          <TextField
            label="Telefone"
            variant="outlined"
            {...register("telefone")}
            sx={{
              bgcolor: "#fff",
              width: 500,
            }}
          />
          <p>{errors.telefone?.message}</p>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={change}
            defaultValue={""}
          >
            {profissoes.map((profissao) => {
              return (
                <MenuItem key={profissao.id} value={profissao.id}>
                  {profissao.descricao}
                </MenuItem>
              );
            })}
          </Select>
          <p>{errors.tipoProfissionalId?.message}</p>
          <Button variant="contained" type="submit">
            Cadastrar
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
