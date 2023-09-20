{-# LANGUAGE InstanceSigs #-}

module Main where

newtype M a = M (String, a) deriving (Show)

instance Functor M where
  fmap :: (a -> b) -> M a -> M b
  fmap f (M (s, a)) = M (s, f a)

instance Applicative M where
  pure :: a -> M a
  pure a = M ("", a)
  (<*>) :: M (a -> b) -> M a -> M b
  (<*>) (M (s1, f)) (M (s2, a)) = M (s1 ++ s2, f a)

instance Monad M where
  (>>=) :: M a -> (a -> M b) -> M b
  (>>=) (M (s1, a)) f = let M (s2, b) = f a in M (s1 ++ s2, b)

tell :: String -> M ()
tell s = M (s, ())

add2 :: Int -> M Int
add2 x = M ("add2 ", x + 2)

mult2 :: Int -> M Int
mult2 x = M ("mult2 ", x * 2)

doStuff :: M Int
doStuff = do
  x <- add2 1
  y <- mult2 x
  tell "doStuff"
  tell "123"
  return y

main :: IO ()
main = do
  let res = doStuff
  print res