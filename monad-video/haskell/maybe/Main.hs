trySomething1 :: Maybe Int
trySomething1 = Just 1

trySomething2 :: Maybe Int
trySomething2 = Nothing

sum1 :: Maybe Int
sum1 = do
  n1 <- trySomething1
  n2 <- trySomething2
  return (n1 + n2)

sum2 :: Maybe Int
sum2 = trySomething1 >>= \n1 -> trySomething2 >>= \n2 -> return (n1 + n2)