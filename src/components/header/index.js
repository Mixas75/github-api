import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Header = () => 
{
  const { getUser } = useGithub();
  const [usernameForsearch, setusernameForsearch] = useState();
  const submitGetUser = () => {
    if (!usernameForsearch) return; 
    return getUser(usernameForsearch)
  }
  return (
    <header>
      <S.Wrapper>
        <input type="text" placeholder="Digite o username para pesquisar..." onChange={(event) => setusernameForsearch (event.target.value)}/>
        <button type="submit" onClick={submitGetUser}><span>Buscar</span></button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
