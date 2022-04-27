import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useEffect, useState } from "react";

type ProfissaoTipo = {
  id: number;
  descricao: string;
  createdAt: string;
};
type ProfissoesTipo = ProfissaoTipo[];

export default function ListaProfissoes() {
  const [profissoes, setProfissoes] = useState<ProfissoesTipo>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/tipo-profissional")
      .then((response) => setProfissoes(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Profissão</TableCell>
            <TableCell align="right">Cadastrado em</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {profissoes.map((profissao) => (
            <TableRow key={profissao.id}>
              <TableCell align="right">{profissao.descricao}</TableCell>
              <TableCell align="right">{profissao.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
