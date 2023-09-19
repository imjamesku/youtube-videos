plusOne = (+ 1)

multipliedByTwo = (* 2)

fmap plusOne . fmap multipliedByTwo $ arr == fmap (plusOne . multipliedByTwo) $ arr
