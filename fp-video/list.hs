module Main where

main = do
  let foo = [1, 2, 3]
  let bar = let (x : xs) = foo in x + 1 : xs
  print bar