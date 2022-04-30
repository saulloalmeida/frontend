import { Card, CardContent, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ProfissionalContext } from "../../context/ProfissionalContext";

function CardProfissional() {
  const { totalDeprofissionais, carregarTotalDeProfissionais } =
    useContext(ProfissionalContext);
  useEffect(() => {
    carregarTotalDeProfissionais();
  }, []);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Profissionais Cadastrados
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 30, color: "black" }}>
          {totalDeprofissionais.total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardProfissional;
