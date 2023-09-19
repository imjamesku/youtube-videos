module Paper.Exception where

import Paper.Term (Term (..))
import Prelude hiding ((>>=))

data M a = Raise Exception | Return a

type Exception = String

eval :: Term -> M Int
eval (Con a) = Return a
eval (Div t u) = case eval t of
  Raise e -> Raise e
  Return a -> case eval u of
    Raise e -> Raise e
    Return b
      | b == 0 -> Raise "devide by zero"
      | otherwise -> Return (a `div` b)
