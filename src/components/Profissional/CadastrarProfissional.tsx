import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { ProfissoesContext } from "../../context/ProfissoesContext";

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
  tipoProfissionalId: yup.string().required("Preenchimento obrigatório"),
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

  const { carregarProfissoes, profissoes } = useContext(ProfissoesContext);
  const [id, setId] = useState<string>("");
  useEffect(() => {
    carregarProfissoes();
  }, []);

  function handleClick(data: Inputs) {
    const { nome, email, telefone } = data;
    axios
      .post("profissional", {
        nome: nome,
        email: email,
        situacao: true,
        tipoProfissionalId: Number(id),
        telefone: telefone,
      })
      .then(() => navigate("/profissionais"));
  }

  const handleChange = (event: SelectChangeEvent) => {
    setId(event.target.value);
  };

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
          <Typography color={"red"}>{errors.nome?.message} </Typography>

          <TextField
            label="Email"
            variant="outlined"
            {...register("email")}
            sx={{
              bgcolor: "#fff",
              width: 500,
            }}
          />
          <Typography color={"red"}> {errors.email?.message} </Typography>
          <TextField
            label="Telefone"
            variant="outlined"
            {...register("telefone")}
            sx={{
              bgcolor: "#fff",
              width: 500,
            }}
          />
          <Typography color={"red"}>{errors.telefone?.message}</Typography>

          <InputLabel id="profissão">Profissão</InputLabel>
          <Select
            {...register("tipoProfissionalId")}
            labelId="profissão"
            id="profissão"
            value={id}
            label="profissão"
            onChange={handleChange}
            sx={{
              backgroundColor: "#fff",
            }}
          >
            {profissoes.map((profissao) => (
              <MenuItem key={profissao.id} value={profissao.id}>
                {profissao.descricao}
              </MenuItem>
            ))}
          </Select>
          <Typography color={"red"}>
            {errors.tipoProfissionalId?.message}
          </Typography>
          <Button variant="contained" type="submit">
            Cadastrar
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
