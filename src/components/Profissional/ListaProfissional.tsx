import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useContext, useEffect } from "react";
import { ProfissionalContext } from "../../context/ProfissionalContext";

export default function ListaProfissoes() {
  const { carregarProfissionais, profissionais, deletarProfissional } =
    useContext(ProfissionalContext);
  useEffect(() => {
    carregarProfissionais();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Profissão</TableCell>
            <TableCell align="right">Cadastrado em</TableCell>
            <TableCell align="right">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {profissionais.map((profissional) => (
            <TableRow key={profissional.id}>
              <TableCell align="right">{profissional.nome}</TableCell>
              <TableCell align="right">{profissional.email}</TableCell>
              <TableCell align="right">
                {profissional.tipoProfissional?.descricao}
              </TableCell>
              <TableCell align="right">{profissional.createdAt}</TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={() => deletarProfissional(profissional.id)}
                >
                  <DeleteForeverIcon sx={{ color: "red" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
