module Paper.State where

import Paper.Term (Term (..))

type M a = State -> (a, State)

type State = Int

eval :: Term -> M Int
eval (Con a) x = (a, x)
eval (Div t u) x =
  let (a, y) = eval t x
      (b, z) = eval u y
   in (a `div` b, z + 1)