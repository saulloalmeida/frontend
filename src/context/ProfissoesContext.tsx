import axios from "axios";
import { createContext, ReactNode, useState } from "react";

type ProfissoesContextProps = {
  children: ReactNode;
};

type Profissao = {
  id: number;
  descricao: string;
  createdAt: string;
};

type ProfissoesContextState = {
  carregarProfissoes: () => void;
  deletarProfissao: (id: number) => void;
  carregarTotalDeProfissoes: () => void;
  totalDeProfissoes: { total?: number };
  profissoes: Profissao[];
};

export const ProfissoesContext = createContext<ProfissoesContextState>(
  {} as ProfissoesContextState
);

export const ProfissoesContextProvider = ({
  children,
}: ProfissoesContextProps) => {
  const [profissoes, setProfissoes] = useState([]);
  const [totalDeProfissoes, setTotalDeProfissoes] = useState({});

  const carregarProfissoes = () => {
    axios
      .get("/profissoes")
      .then((response) => setProfissoes(response.data))
      .catch((err) => console.log(err));
  };

  function deletarProfissao(id: number) {
    axios.delete(`/profissao/${id}`).then(() => carregarProfissoes());
  }
  const carregarTotalDeProfissoes = () => {
    axios
      .get("/profissoes/total")
      .then((response) => setTotalDeProfissoes(response.data))
      .catch((err) => console.log(err));
  };
  return (
    <ProfissoesContext.Provider
      value={{
        carregarProfissoes,
        profissoes,
        deletarProfissao,
        carregarTotalDeProfissoes,
        totalDeProfissoes,
      }}
    >
      {children}
    </ProfissoesContext.Provider>
  );
};
