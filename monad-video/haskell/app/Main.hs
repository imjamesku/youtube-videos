-- stackMaip :: State Stack Int

module Main where

import Paper.Output (eval)
import Paper.Term (answer)

newtype State s a = State {runState :: s -> (a, s)}

instance Functor (State s) where
  fmap f (State x) = State $ \s ->
    let (a, newState) = x s
     in (f a, newState)

instance Applicative (State s) where
  pure x = State $ \s -> (x, s)
  (State f) <*> (State x) = State $ \s ->
    let (g, s1) = f s
        (a, s2) = x s1
     in (g a, s2)

instance Monad (State s) where
  (State h) >>= f = State $ \s ->
    let (a, newState) = h s
        (State g) = f a
     in g newState

type Stack = [Int]

pop :: State Stack Int
pop = State $ \(x : xs) -> (x, xs)

push :: Int -> State Stack ()
push a = State $ \xs -> ((), a : xs)

stackMaip = do
  push 3
  push 4
  pop

-- stackMaip :: State Stack Int
-- stackMaip = push 3 >> push 4 >> pop

-- main :: IO ()
-- main = print $ runState stackMaip [1, 2]

main :: IO ()
main = do
  let (output, _) = eval answer
  putStrLn output
