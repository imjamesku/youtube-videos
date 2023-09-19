module Paper.StateMonad where

import Paper.Term (Term (..))

type M a = State -> (a, State)

type State = Int

unit :: a -> M a
unit a = \x -> (a, x)

(>>=) :: M a -> (a -> M b) -> M b
a >>= f = \x ->
  let (v1, s1) = a x
      (v2, s2) = f v1 s1
   in (v2, s2)

eval :: Term -> M Int
eval (Con a) x = (a, x)
eval (Div t u) x =
  let (a, y) = eval t x
      (b, z) = eval u y
   in (a `div` b, z + 1)