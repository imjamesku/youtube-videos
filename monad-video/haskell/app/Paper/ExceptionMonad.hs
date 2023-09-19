module Paper.ExceptionMonad where

import Prelude hiding ((>>=))

data M a = Raise Exception | Return a

type Exception = String

data Term = Con Int | Div Term Term

unit :: a -> M a
unit = Return

(>>=) :: M a -> (a -> M b) -> M b
m >>= k = case m of
  Raise e -> Raise e
  Return a -> k a

eval :: Term -> M Int
eval (Con a) = unit a
eval (Div t u) = eval t >>= \a -> eval u >>= \b -> unit (a `div` b)
