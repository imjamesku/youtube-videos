import Control.Monad.State

type RandomState = Int -- Replace with a more complex state for a real RNG

-- A simple pseudo-random number generator
nextRandom :: RandomState -> (Int, RandomState)
nextRandom s = (newVal, newState)
  where
    newVal = (s * 1103515245 + 12345) `mod` 2 ^ 31
    newState = newVal

-- Generate a random number using State Monad
randomNumber :: State RandomState Int
randomNumber = state nextRandom

-- Generate N random numbers
randomNumbers :: Int -> State RandomState [Int]
randomNumbers 0 = return []
randomNumbers n = do
  r <- randomNumber
  rs <- randomNumbers (n - 1)
  return (r : rs)

main :: IO ()
main = do
  let initialState = 42 -- Seed
  let (nums, _) = runState (randomNumbers 5) initialState
  print nums -- Output will be 5 pseudo-random numbers
