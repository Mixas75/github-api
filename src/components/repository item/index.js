import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>Name: {name}</S.WrapperTitle>
      <S.WrapperFullName>Link:</S.WrapperFullName>
      <S.WrapperLink
        href={linkToRepo}
        target="_blank"
        rel="noopener noreferrer"
      >
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;
