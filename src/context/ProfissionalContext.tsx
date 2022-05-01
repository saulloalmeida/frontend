import axios from "axios";
import { createContext, ReactNode, useState } from "react";

type ProfissionalContextProps = {
  children: ReactNode;
};

type ProfissionalTipo = {
  id: number;
  nome: string;
  email: string;
  createdAt: string;
  tipoProfissional: {
    descricao: string;
  };
};

type ProfissionalState = {
  profissionais: ProfissionalTipo[];
  totalDeprofissionais: { total?: number };
  carregarProfissionais: () => void;
  deletarProfissional: (id: number) => void;
  carregarTotalDeProfissionais: () => void;
};

export const ProfissionalContext = createContext<ProfissionalState>(
  {} as ProfissionalState
);

export const ProfissionalContextProvider = ({
  children,
}: ProfissionalContextProps) => {
  const [profissionais, setProfissionais] = useState([]);
  const [totalDeprofissionais, setTotalDeProfissionais] = useState({});

  const carregarProfissionais = () => {
    axios
      .get("profissionais")
      .then((response) => setProfissionais(response.data))
      .catch((err) => console.log(err));
  };

  function deletarProfissional(id: number) {
    axios.delete(`profissional/${id}`).then(() => carregarProfissionais());
  }
  const carregarTotalDeProfissionais = () => {
    axios
      .get("profissionais/total")
      .then((response) => setTotalDeProfissionais(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <ProfissionalContext.Provider
      value={{
        profissionais,
        carregarProfissionais,
        deletarProfissional,
        carregarTotalDeProfissionais,
        totalDeprofissionais,
      }}
    >
      {children}
    </ProfissionalContext.Provider>
  );
};
