nextPos :: Int -> [Int]
nextPos x = [x + 2, x - 1]

main :: IO ()
main = do
  let l3 = do
        n <- nextPos 0
        nn <- nextPos n
        return nn

  print l3