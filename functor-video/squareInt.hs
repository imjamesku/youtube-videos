squareOfInteger :: String -> Maybe Int
squareOfInteger inputStr =
  case parseInteger inputStr of
    Just intValue -> Just (square intValue)
    Nothing -> Nothing

parseInteger :: String -> Maybe Int
parseInteger inputStr =
  if all (`elem` ['0'..'9']) inputStr
    then Just (read inputStr)
    else Nothing

square :: Int -> Int
square x = x ^ 2