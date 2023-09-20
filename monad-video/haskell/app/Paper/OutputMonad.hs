module Paper.OutputMonad where

import Paper.Term (Term (..), showTerm)

type M a = (Output, a)

type Output = String

unit :: a -> M a
unit a = out (line (Con a) a) >>= \_ -> unit a

(>>=) :: M a -> (a -> M b) -> M b
ma >>= f =
  let (o1, a) = ma
      (o2, b) = f a
   in (o1 ++ o2, b)

eval :: Term -> M Int
eval (Con a) = (line (Con a) a, a)
eval (Div t u) =
  let (x, a) = eval t
      (y, b) = eval u
   in (x ++ y ++ line (Div t u) (a `div` b), a `div` b)

line :: Term -> Int -> Output
line t a = "eval(" ++ showTerm t ++ ") ⇐ " ++ show a ++ "\n"

out :: Output -> M ()
out x = (x, ())