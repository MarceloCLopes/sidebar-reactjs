import { ReactNode } from "react";
import { Sidebar } from "../Sidebar";
import * as S from "./styles";

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <S.Layout>
      <Sidebar />
      <S.Main>{children}</S.Main>
    </S.Layout>
  );
}
