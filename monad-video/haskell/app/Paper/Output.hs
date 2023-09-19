module Paper.Output where

import Paper.Term (Term (..), showTerm)

type M a = (Output, a)

type Output = String

eval :: Term -> M Int
eval (Con a) = (line (Con a) a, a)
eval (Div t u) =
  let (x, a) = eval t
      (y, b) = eval u
   in (x ++ y ++ line (Div t u) (a `div` b), a `div` b)

line :: Term -> Int -> Output
line t a = "eval(" ++ showTerm t ++ ") ⇐ " ++ show a ++ "\n"
