import { Link, Typography } from "@mui/material";

export function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Desenvolvido por Saullo Almeida"}
      <Link color="inherit" href="https://www.linkedin.com/in/saullo-almeida/">
        @saulloalmeida
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
