import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useContext, useEffect } from "react";
import { ProfissoesContext } from "../../context/ProfissoesContext";

export default function ListaProfissoes() {
  const { carregarProfissoes, profissoes, deletarProfissao } =
    useContext(ProfissoesContext);
  useEffect(() => {
    carregarProfissoes();
  }, []);

  return (
    <>
      {profissoes.length <= 0 && <p>Nenhuma profissão cadastrada.</p>}
      {profissoes.length >= 1 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Profissão</TableCell>
                <TableCell align="right">Cadastrado em</TableCell>
                <TableCell align="right">Opções</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {profissoes.map((profissao) => (
                <TableRow key={profissao.id}>
                  <TableCell align="right">{profissao.descricao}</TableCell>
                  <TableCell align="right">{profissao.createdAt}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => deletarProfissao(profissao.id)}>
                      <DeleteForeverIcon sx={{ color: "red" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
