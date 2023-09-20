import Prelude hiding (sum)

main :: IO ()
main = do
  let res1 = return 1 :: IO Int
  let res2 = return 2 :: IO Int
  let sum = res1 >>= \n1 -> res2 >>= \n2 -> return (n1 + n2)
  sum >>= print