printSomething :: IO ()
printSomething = do
  putStrLn "Hello World"

myfn :: Integer
myfn =
  let t = printSomething
   in 1

main :: IO ()
main = do
  let something = myfn
  putStrLn "123"