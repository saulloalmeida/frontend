import { Card, CardContent, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ProfissoesContext } from "../../context/ProfissoesContext";

function CardProfissao() {
  const { totalDeProfissoes, carregarTotalDeProfissoes } =
    useContext(ProfissoesContext);
  useEffect(() => {
    carregarTotalDeProfissoes();
  }, []);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Profissoes Cadastradas
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 30, color: "black" }}>
          {totalDeProfissoes.total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardProfissao;
