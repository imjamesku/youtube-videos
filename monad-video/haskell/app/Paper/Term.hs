module Paper.Term where

import Text.Printf (printf)

data Term = Con Int | Div Term Term

answer :: Term
answer = Div (Div (Con 1972) (Con 2)) (Con 23)

error :: Term
error = Div (Con 1) (Con 0)

showTerm :: Term -> String
showTerm t = case t of
  Con a -> printf "Con %d" a
  Div a b -> printf "Div %s %s" (showTerm a) (showTerm b)